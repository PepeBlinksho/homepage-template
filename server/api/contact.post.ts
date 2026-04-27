import { Resend } from 'resend'
import { z } from 'zod'
import { siteConfig } from '../../app/config/site'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  tel: z.string().optional(),
  message: z.string().min(1),
})

function buildHtml(data: { name: string; email: string; tel?: string; message: string }) {
  const { name, email, tel, message } = data
  const escaped = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const messageHtml = escaped(message).replace(/\n/g, '<br>')

  return `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f4;font-family:'Helvetica Neue',Arial,'Hiragino Sans',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- ヘッダー -->
        <tr>
          <td style="background:#292524;padding:24px 32px;border-radius:12px 12px 0 0;">
            <p style="margin:0;color:#f5f0eb;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;">Contact Form</p>
            <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:600;">お問い合わせを受け付けました</h1>
          </td>
        </tr>

        <!-- 本文 -->
        <tr>
          <td style="background:#ffffff;padding:32px;border:1px solid #e7e5e4;border-top:none;border-radius:0 0 12px 12px;">

            <!-- 送信者情報 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f5f5f4;">
                  <span style="display:block;font-size:11px;color:#a8a29e;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">お名前</span>
                  <span style="font-size:15px;color:#1c1917;font-weight:500;">${escaped(name)}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f5f5f4;">
                  <span style="display:block;font-size:11px;color:#a8a29e;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">メールアドレス</span>
                  <a href="mailto:${escaped(email)}" style="font-size:15px;color:#d97706;text-decoration:none;">${escaped(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f5f5f4;">
                  <span style="display:block;font-size:11px;color:#a8a29e;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">電話番号</span>
                  <span style="font-size:15px;color:#1c1917;">${tel ? escaped(tel) : '<span style="color:#a8a29e;">未入力</span>'}</span>
                </td>
              </tr>
            </table>

            <!-- お問い合わせ内容 -->
            <p style="margin:0 0 10px;font-size:11px;color:#a8a29e;letter-spacing:0.1em;text-transform:uppercase;">お問い合わせ内容</p>
            <div style="background:#fafaf9;border:1px solid #e7e5e4;border-radius:8px;padding:20px;font-size:14px;line-height:1.8;color:#44403c;">
              ${messageHtml}
            </div>

            <!-- 返信案内 -->
            <p style="margin:24px 0 0;font-size:13px;color:#a8a29e;line-height:1.6;">
              このメールに返信すると <strong style="color:#78716c;">${escaped(email)}</strong> 宛てに送信されます。
            </p>

          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function buildAutoReplyHtml(name: string) {
  const escaped = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f4;font-family:'Helvetica Neue',Arial,'Hiragino Sans',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:#292524;padding:24px 32px;border-radius:12px 12px 0 0;">
            <p style="margin:0;color:#f5f0eb;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;">Auto Reply</p>
            <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:600;">お問い合わせありがとうございます</h1>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:32px;border:1px solid #e7e5e4;border-top:none;border-radius:0 0 12px 12px;">
            <p style="margin:0 0 16px;font-size:15px;color:#1c1917;line-height:1.8;">
              ${escaped(name)} 様
            </p>
            <p style="margin:0 0 16px;font-size:14px;color:#44403c;line-height:1.8;">
              この度はお問い合わせいただき、誠にありがとうございます。<br>
              内容を確認のうえ、通常2〜3営業日以内にご返信いたします。
            </p>
            <p style="margin:0;font-size:14px;color:#44403c;line-height:1.8;">
              なお、このメールは自動送信されています。<br>
              このメールへの返信はお受けできませんのでご了承ください。
            </p>
            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #f5f5f4;">
              <p style="margin:0;font-size:14px;color:#78716c;font-weight:600;">${escaped(siteConfig.name)}</p>
              <p style="margin:4px 0 0;font-size:13px;color:#a8a29e;">${escaped(siteConfig.address.full)}</p>
              <p style="margin:4px 0 0;font-size:13px;color:#a8a29e;">TEL: ${escaped(siteConfig.tel)}</p>
            </div>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = schema.safeParse(body)
  if (!result.success) {
    throw createError({ statusCode: 400, statusMessage: '入力内容が正しくありません' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'noreply@resend.dev'

  if (!apiKey || !toEmail) {
    console.error('[contact] 環境変数 RESEND_API_KEY または CONTACT_EMAIL が未設定です')
    throw createError({ statusCode: 500, statusMessage: 'サーバーの設定が不完全です' })
  }

  const { name, email, tel, message } = result.data

  const resend = new Resend(apiKey)

  // 店舗への通知メールと送信者への自動返信を同時送信
  const [notifyResult, replyResult] = await Promise.all([
    resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `【お問い合わせ】${name}様より`,
      html: buildHtml({ name, email, tel, message }),
    }),
    resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `お問い合わせを受け付けました｜${siteConfig.name}`,
      html: buildAutoReplyHtml(name),
    }),
  ])

  if (notifyResult.error || replyResult.error) {
    console.error('[contact] Resend エラー:', notifyResult.error ?? replyResult.error)
    throw createError({ statusCode: 500, statusMessage: 'メール送信に失敗しました' })
  }

  return { success: true }
})
