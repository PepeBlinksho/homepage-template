<script setup lang="ts">
definePageMeta({ layout: false })

useSeoMeta({
  title: 'Bakery Ukigumo — Fresh bread drifting softly into everyday life',
  robots: 'noindex',
})

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Manrope:wght@400;500&family=JetBrains+Mono:wght@400&family=Noto+Serif+JP:wght@300;400&display=swap',
    },
  ],
})

const tweaks = reactive({
  theme: 'cream' as 'cream' | 'paper' | 'toasted',
  display_font: 'cormorant' as 'cormorant' | 'playfair',
  show_grain: true,
  tagline_alignment: 'left' as 'left' | 'center',
})
const tweaksPanelOpen = ref(false)

const heroContentStyle = computed(() =>
  tweaks.tagline_alignment === 'center'
    ? { alignItems: 'center', textAlign: 'center' }
    : {},
)
const heroBottomStyle = computed(() =>
  tweaks.tagline_alignment === 'center' ? { justifyContent: 'center' } : {},
)

function setTweak(patch: Partial<typeof tweaks>) {
  Object.assign(tweaks, patch)
  try { window.parent?.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*') } catch { /* iframe外で実行時のnoop */ }
}

onMounted(() => {
  const hdr = document.getElementById('hdr')
  const onScroll = () => {
    if (window.scrollY > 32) hdr?.classList.add('scrolled')
    else hdr?.classList.remove('scrolled')
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))

  const onMessage = (e: MessageEvent) => {
    const d = e.data || {}
    if (d.type === '__activate_edit_mode') tweaksPanelOpen.value = true
    if (d.type === '__deactivate_edit_mode') tweaksPanelOpen.value = false
  }
  window.addEventListener('message', onMessage)
  try { window.parent?.postMessage({ type: '__edit_mode_available' }, '*') } catch { /* iframe外で実行時のnoop */ }

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('message', onMessage)
    io.disconnect()
  })
})
</script>

<template>
  <div
    class="ukigumo-page"
    :data-theme="tweaks.theme"
    :data-display="tweaks.display_font"
    :data-grain="tweaks.show_grain.toString()"
  >
    <div
      class="grain-overlay"
      aria-hidden="true"
    />

    <!-- ───── HEADER ───── -->
    <header
      id="hdr"
      class="site"
    >
      <div class="left">
        <nav
          class="links"
          aria-label="Primary"
        >
          <a href="#story">ストーリー</a>
          <a href="#breads">パン</a>
          <a href="#cafe">カフェ</a>
          <a href="#seasonal">季節</a>
          <a href="#access">アクセス</a>
        </nav>
      </div>
      <a
        href="#"
        class="brand"
        aria-label="Bakery Ukigumo home"
      >
        <div class="word">Bakery <em>Ukigumo</em></div>
        <div class="sub">浮雲 — Komatsu, Ishikawa</div>
      </a>
      <div class="right">
        <nav
          class="links"
          aria-label="Secondary"
        >
          <a href="#">EN / 日本語</a>
        </nav>
      </div>
    </header>

    <!-- ───── HERO ───── -->
    <section
      class="hero"
      data-screen-label="01 Hero"
    >
      <div class="photo">
        <div
          class="ph hero-ph"
          style="position:absolute;inset:0;border-radius:0"
        >
          <div class="label">
            <span>Hero photograph</span>
            <span class="tick" />
            <small>Cinematic close-up of fresh sourdough on linen,<br>warm morning sunlight from upper-left</small>
          </div>
        </div>
      </div>
      <div
        class="hero-content wrap"
        style="padding-left:var(--gutter);padding-right:var(--gutter)"
        :style="heroContentStyle"
      >
        <div class="hero-tag reveal">
          <span class="line" />
          <span class="text">Est. 2018 — 石川県小松市</span>
        </div>
        <h1
          class="display reveal"
          style="--reveal-delay:120ms"
        >
          <span class="jp-overlay">浮 雲 の パ ン</span>
          日々のくらしに、<br>そっと寄り添う、<br>ひとつの<em>パン</em>。
        </h1>
        <div
          class="hero-bottom reveal"
          style="--reveal-delay:360ms"
          :style="heroBottomStyle"
        >
          <a
            href="#story"
            class="hero-cta"
          >
            <span>物語を読む</span>
            <span class="arrow" />
          </a>
          <div class="hero-meta">
            <div><b>07:30 — 18:00</b> &nbsp;·&nbsp; 火曜定休</div>
            <div>石川県小松市横町3-14-7 &nbsp;·&nbsp; 0761-00-0000</div>
          </div>
        </div>
      </div>
      <div class="scroll-hint">
        <span>Scroll</span>
        <span class="bar" />
      </div>
    </section>

    <!-- ───── STORY ───── -->
    <section
      id="story"
      class="story wrap"
      data-screen-label="02 Story"
    >
      <header class="sec-head">
        <div class="meta reveal">
          <div class="num-row">
            <span class="num">01 / Story</span>
            <span class="line" />
          </div>
          <div class="eyebrow">
            Philosophy &nbsp;·&nbsp; 哲学
          </div>
        </div>
        <h2
          class="display reveal"
          style="--reveal-delay:100ms"
        >
          手でこね、季節と歩む。<br>朝の<em>小さな営み</em>。
        </h2>
      </header>
      <div class="story-grid">
        <div class="ph ph-1 reveal">
          <div class="label">
            <span>Hands shaping dough</span>
            <span class="tick" />
            <small>Tight crop · flour-dusted hands<br>warm side-light · linen apron</small>
          </div>
        </div>
        <div
          class="copy reveal"
          style="--reveal-delay:120ms"
        >
          <p class="body-large">
            浮雲は、小松の郊外にある小さな木造の家から始まりました。日本海と白山に挟まれたこの街で、その日の湿度や気温と向き合いながら、時間をかけて発酵させたパンを毎朝焼いています。
          </p>
          <p class="body-large">
            石川の農家から届く石臼挽きの小麦、能登の海塩、開店当初から育ててきたサワードウ種。急がず、パンが焼き上がるのを待ちます。
          </p>
        </div>
        <div
          class="ph ph-2 reveal"
          style="--reveal-delay:200ms"
        >
          <div class="label">
            <span>Steam rising — oven door</span>
            <span class="tick" />
            <small>Wide editorial frame<br>candid, low light, warm tone</small>
          </div>
        </div>
        <div class="ph ph-3 reveal">
          <div class="label">
            <span>Stone-milled flour</span>
            <span class="tick" />
            <small>Macro · texture study</small>
          </div>
        </div>
        <div class="story-pull reveal">
          <blockquote>「急いで作るのではなく、丁寧に。そして朝が訪れるのを待ちます。」</blockquote>
          <cite>— 店主</cite>
        </div>
      </div>
    </section>

    <!-- ───── MARQUEE ───── -->
    <div
      class="marquee"
      aria-hidden="true"
    >
      <div class="marquee-track">
        <span>Pain de campagne</span>
        <span>季節のパン</span>
        <span>Cultured butter</span>
        <span>Hakusan rye</span>
        <span>Slow fermentation</span>
        <span>Noto sea salt</span>
        <span>Pain de campagne</span>
        <span>季節のパン</span>
        <span>Cultured butter</span>
        <span>Hakusan rye</span>
        <span>Slow fermentation</span>
        <span>Noto sea salt</span>
      </div>
    </div>

    <!-- ───── SIGNATURE BREADS ───── -->
    <section
      id="breads"
      class="signature"
      data-screen-label="03 Signature"
    >
      <div class="wrap">
        <header class="sec-head">
          <div class="meta reveal">
            <div class="num-row">
              <span class="num">02 / Bakery</span>
              <span class="line" />
            </div>
            <div class="eyebrow">
              Signature breads &nbsp;·&nbsp; パン
            </div>
          </div>
          <h2
            class="display reveal"
            style="--reveal-delay:100ms"
          >
            毎朝<em>一度だけ</em>焼く、八種類のパン。
          </h2>
        </header>
        <div class="breads-grid">
          <article class="bread reveal">
            <div class="ph">
              <div class="label">
                <span>Pain de Campagne</span><span class="tick" /><small>Crumb cross-section · close macro</small>
              </div>
            </div>
            <div class="meta">
              <h3 class="name">
                Pain de <em>Campagne</em>
              </h3>
              <span class="price">¥980</span>
              <p class="desc">
                石川産小麦とライ麦、能登の海塩。じっくり低温発酵させた、皮はパリッと、中はしっとりのカンパーニュ。
              </p>
              <div class="tag-row">
                <span class="tag">36時間低温発酵</span><span class="tag">ヴィーガン</span>
              </div>
            </div>
          </article>
          <article
            class="bread offset-up reveal"
            style="--reveal-delay:120ms"
          >
            <div class="ph">
              <div class="label">
                <span>Croissant au beurre</span><span class="tick" /><small>Side profile · honey lighting</small>
              </div>
            </div>
            <div class="meta">
              <h3 class="name">
                Croissant <em>au Beurre</em>
              </h3>
              <span class="price">¥420</span>
              <p class="desc">
                北海道産の発酵バターを27層に折り込んだ、軽やかな食感のクロワッサン。
              </p>
              <div class="tag-row">
                <span class="tag">数量限定</span>
              </div>
            </div>
          </article>
          <article
            class="bread reveal"
            style="--reveal-delay:240ms"
          >
            <div class="ph">
              <div class="label">
                <span>Hakusan Rye</span><span class="tick" /><small>Top-down · linen cloth · crumbs</small>
              </div>
            </div>
            <div class="meta">
              <h3 class="name">
                Hakusan <em>Rye</em>
              </h3>
              <span class="price">¥1,180</span>
              <p class="desc">
                白山産のライ麦を石臼挽きに。キャラウェイと糖蜜を加えた、深い味わいのライブレッド。
              </p>
              <div class="tag-row">
                <span class="tag">全粒粉</span><span class="tag">5日間日持ち</span>
              </div>
            </div>
          </article>
          <article class="bread offset-up reveal">
            <div class="ph">
              <div class="label">
                <span>Yuzu Brioche</span><span class="tick" /><small>Tear-apart · steam visible</small>
              </div>
            </div>
            <div class="meta">
              <h3 class="name">
                Yuzu <em>Brioche</em>
              </h3>
              <span class="price">¥640</span>
              <p class="desc">
                加賀産ゆずの皮を練り込んだ、卵たっぷりのブリオッシュ。温かいうちにちぎってどうぞ。
              </p>
              <div class="tag-row">
                <span class="tag">季節限定</span><span class="tag">冬季のみ</span>
              </div>
            </div>
          </article>
          <article
            class="bread reveal"
            style="--reveal-delay:120ms"
          >
            <div class="ph">
              <div class="label">
                <span>Anpan, hojicha cream</span><span class="tick" /><small>Single piece on ceramic</small>
              </div>
            </div>
            <div class="meta">
              <h3 class="name">
                Hojicha <em>Anpan</em>
              </h3>
              <span class="price">¥380</span>
              <p class="desc">
                ほうじ茶のカスタードと十勝産小豆の餡を包んだ、ほっとする味わい。
              </p>
              <div class="tag-row">
                <span class="tag">定番人気</span>
              </div>
            </div>
          </article>
          <article
            class="bread offset-up reveal"
            style="--reveal-delay:240ms"
          >
            <div class="ph">
              <div class="label">
                <span>Open sandwich</span><span class="tick" /><small>Overhead · linen runner</small>
              </div>
            </div>
            <div class="meta">
              <h3 class="name">
                Open <em>Sandwich</em>
              </h3>
              <span class="price">¥1,420</span>
              <p class="desc">
                自家製スモークサーモン、発酵バター、ディル。トーストしたカンパーニュにのせて。
              </p>
              <div class="tag-row">
                <span class="tag">カフェのみ</span><span class="tag">12:00 〜</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ───── CAFÉ SPACE ───── -->
    <section
      id="cafe"
      class="cafe"
      data-screen-label="04 Cafe"
    >
      <div class="wrap">
        <header class="sec-head">
          <div class="meta reveal">
            <div class="num-row">
              <span class="num">03 / Café</span>
              <span class="line" />
            </div>
            <div class="eyebrow">
              The space &nbsp;·&nbsp; 喫茶室
            </div>
          </div>
          <h2
            class="display reveal"
            style="--reveal-delay:100ms"
          >
            朝の光が差し込む、<em>木のぬくもり</em>。
          </h2>
        </header>
        <div class="cafe-hero ph reveal">
          <div class="label">
            <span>Café interior — wide</span>
            <span class="tick" />
            <small>Cinematic · empty room · 7am light through south windows · oak counter, linen curtains</small>
          </div>
        </div>
        <div class="cafe-cap">
          <div class="left reveal">
            <h3 class="display">
              十席。<em>一枚の長いテーブル。</em><br>ゆったりとした時間。
            </h3>
          </div>
          <div
            class="right body-large reveal"
            style="--reveal-delay:120ms"
          >
            <p>小さな中庭に面したカフェです。金沢のロースタリーから届くハンドドリップコーヒー、和束の煎茶、パンに合わせた日替わりプレートをご用意しています。本と静かな音楽のなかで、ゆっくりお過ごしください。</p>
          </div>
        </div>
        <div class="cafe-strip">
          <div class="ph reveal">
            <div class="label">
              <span>Counter detail</span><span class="tick" /><small>Oak grain · ceramic cup<br>steam rising · bokeh</small>
            </div>
          </div>
          <div
            class="ph reveal"
            style="--reveal-delay:120ms"
          >
            <div class="label">
              <span>Window seat</span><span class="tick" /><small>Linen curtain · wooden stool</small>
            </div>
          </div>
          <div
            class="ph reveal"
            style="--reveal-delay:240ms"
          >
            <div class="label">
              <span>Garden view</span><span class="tick" /><small>Through glass · moss · stone path</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ───── SEASONAL ───── -->
    <section
      id="seasonal"
      class="seasonal"
      data-screen-label="05 Seasonal"
    >
      <div class="wrap">
        <header
          class="sec-head"
          style="padding-top:0"
        >
          <div class="meta reveal">
            <div class="num-row">
              <span class="num">04 / Seasonal</span>
              <span
                class="line"
                style="background:rgba(253,250,243,0.15)"
              />
            </div>
            <div class="eyebrow">
              This month &nbsp;·&nbsp; 五月
            </div>
          </div>
        </header>
        <div class="seasonal-grid">
          <div class="seasonal-text">
            <h2 class="display reveal">
              山苺と<em>燻製ライ麦。</em>
            </h2>
            <p
              class="body-large reveal"
              style="--reveal-delay:120ms"
            >
              毎年五月、白山の麓の農家さんを訪ねます。春のパンに彩りを添える、小ぶりで甘い山苺を育てている畑です。富山の燻製所で仕上げたライ麦と合わせました。
            </p>
            <dl
              class="seasonal-detail reveal"
              style="--reveal-delay:240ms"
            >
              <div>
                <dt>販売期間</dt>
                <dd>5月1日 — 6月8日<br><small style="font-family:var(--mono);font-size:10px;letter-spacing:0.2em;color:rgba(253,250,243,0.5);text-transform:uppercase">1日50本・午前のみ</small></dd>
              </div>
              <div>
                <dt>素材</dt>
                <dd>白山の農家<br>富山の燻製所</dd>
              </div>
            </dl>
          </div>
          <div
            class="ph reveal"
            style="--reveal-delay:120ms"
          >
            <div class="label">
              <span>Seasonal feature</span>
              <span class="tick" />
              <small>Editorial still life · strawberries on linen<br>dark mood · single window light</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ───── ACCESS ───── -->
    <section
      id="access"
      class="access"
      data-screen-label="06 Access"
    >
      <div class="wrap">
        <header class="sec-head">
          <div class="meta reveal">
            <div class="num-row">
              <span class="num">05 / Visit</span>
              <span class="line" />
            </div>
            <div class="eyebrow">
              Access &amp; hours &nbsp;·&nbsp; ご来店
            </div>
          </div>
          <h2
            class="display reveal"
            style="--reveal-delay:100ms"
          >
            梯川と<em>旧街道</em>のあいだに。
          </h2>
        </header>
        <div class="access-grid">
          <div class="map-card reveal">
            <svg
              viewBox="0 0 800 640"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(43,38,34,0.05)"
                    stroke-width="0.5"
                  />
                </pattern>
              </defs>
              <rect
                width="800"
                height="640"
                fill="#ece3d2"
              />
              <rect
                width="800"
                height="640"
                fill="url(#grid)"
              />
              <path
                d="M -20 220 C 200 180, 280 320, 480 280 S 700 360, 840 320"
                stroke="#b8956a"
                stroke-width="22"
                fill="none"
                opacity="0.35"
              />
              <path
                d="M -20 220 C 200 180, 280 320, 480 280 S 700 360, 840 320"
                stroke="#8a6a4a"
                stroke-width="2"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M 0 460 L 800 420"
                stroke="#58504a"
                stroke-width="1.2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 0 540 L 800 510"
                stroke="#58504a"
                stroke-width="0.8"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M 380 0 L 480 640"
                stroke="#58504a"
                stroke-width="1.2"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M 220 0 L 280 640"
                stroke="#58504a"
                stroke-width="0.8"
                fill="none"
                opacity="0.35"
              />
              <path
                d="M 600 0 L 660 640"
                stroke="#58504a"
                stroke-width="0.8"
                fill="none"
                opacity="0.35"
              />
              <g
                opacity="0.16"
                fill="#8a6a4a"
              >
                <rect
                  x="60"
                  y="80"
                  width="120"
                  height="80"
                  rx="2"
                />
                <rect
                  x="220"
                  y="60"
                  width="100"
                  height="120"
                  rx="2"
                />
                <rect
                  x="540"
                  y="100"
                  width="60"
                  height="80"
                  rx="2"
                />
                <rect
                  x="100"
                  y="380"
                  width="100"
                  height="60"
                  rx="2"
                />
                <rect
                  x="540"
                  y="440"
                  width="80"
                  height="80"
                  rx="2"
                />
                <rect
                  x="660"
                  y="540"
                  width="100"
                  height="60"
                  rx="2"
                />
                <rect
                  x="240"
                  y="540"
                  width="120"
                  height="60"
                  rx="2"
                />
              </g>
              <text
                x="40"
                y="30"
                font-family="JetBrains Mono, monospace"
                font-size="11"
                fill="#58504a"
                letter-spacing="2"
              >KOMATSU · 小松市</text>
              <text
                x="700"
                y="630"
                text-anchor="end"
                font-family="JetBrains Mono, monospace"
                font-size="10"
                fill="#58504a"
                letter-spacing="2"
                opacity="0.6"
              >36.40°N  136.45°E</text>
              <text
                x="180"
                y="240"
                font-family="Cormorant Garamond, serif"
                font-style="italic"
                font-size="14"
                fill="#8a6a4a"
              >Kakehashi River</text>
              <text
                x="350"
                y="445"
                font-family="JetBrains Mono, monospace"
                font-size="9"
                fill="#58504a"
                letter-spacing="2"
                opacity="0.7"
              >YOKOMACHI ROAD</text>
            </svg>
            <div class="map-pin">
              <span class="pin-dot" />
              <span class="pin-label">Ukigumo</span>
            </div>
          </div>
          <dl class="info-block">
            <div class="info-row reveal">
              <dt>住所</dt>
              <dd>石川県小松市横町3-14-7<br><small>小松駅から徒歩15分</small></dd>
            </div>
            <div class="info-row reveal">
              <dt>営業時間</dt>
              <dd>月・水〜日 &nbsp; 07:30 — 18:00<br><span class="closed">火曜定休</span></dd>
            </div>
            <div class="info-row reveal">
              <dt>カフェ席</dt>
              <dd>ラストオーダー 17:00<br><small>10席・ご来店歓迎。</small></dd>
            </div>
            <div class="info-row reveal">
              <dt>お問い合わせ</dt>
              <dd>0761-00-0000<br><small>hello@ukigumo.jp</small></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- ───── INSTAGRAM ───── -->
    <section class="insta">
      <div class="wrap">
        <div class="insta-head">
          <h3 class="reveal">
            日々のひとこま <em>· @bakery_ukigmo</em>
          </h3>
          <a
            href="#"
            class="hero-cta reveal"
            style="color:var(--char);border-color:var(--line)"
          >
            <span>Follow</span><span class="arrow" />
          </a>
        </div>
        <div class="insta-grid">
          <div class="ph reveal">
            <div class="label">
              <span>Steam · oven door</span>
            </div>
          </div>
          <div
            class="ph reveal"
            style="--reveal-delay:80ms"
          >
            <div class="label">
              <span>Linen · crumb</span>
            </div>
          </div>
          <div
            class="ph reveal"
            style="--reveal-delay:160ms"
          >
            <div class="label">
              <span>Hands · dough</span>
            </div>
          </div>
          <div
            class="ph reveal"
            style="--reveal-delay:240ms"
          >
            <div class="label">
              <span>Window · cup</span>
            </div>
          </div>
          <div
            class="ph reveal"
            style="--reveal-delay:320ms"
          >
            <div class="label">
              <span>Garden · moss</span>
            </div>
          </div>
          <div
            class="ph reveal"
            style="--reveal-delay:400ms"
          >
            <div class="label">
              <span>Strawberry · rye</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ───── FOOTER ───── -->
    <footer class="site">
      <div class="wrap">
        <div class="foot-top">
          <div class="brand-large display">
            Bakery<br><em>Ukigumo</em>
            <span class="jp">浮 雲</span>
          </div>
          <div class="foot-col">
            <h4>アクセス</h4>
            <ul>
              <li><a href="#access">場所</a></li>
              <li><a href="#access">営業時間</a></li>
              <li><a href="#access">お問い合わせ</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h4>ベーカリー</h4>
            <ul>
              <li><a href="#story">ストーリー</a></li>
              <li><a href="#breads">パン</a></li>
              <li><a href="#seasonal">季節</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h4>その他</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">ジャーナル</a></li>
              <li><a href="#">ニュースレター</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <span>© 2026 Bakery Ukigumo</span>
          <span>石川県小松市横町3-14-7</span>
        </div>
      </div>
    </footer>

    <!-- ───── TWEAKS PANEL ───── -->
    <div
      id="tweaks"
      role="dialog"
      aria-label="Tweaks"
      :class="{ on: tweaksPanelOpen }"
    >
      <h5>
        <span>Tweaks</span>
        <button
          aria-label="Close"
          @click="tweaksPanelOpen = false"
        >
          ×
        </button>
      </h5>
      <div class="grp">
        <div class="lbl">
          Theme
        </div>
        <div class="seg">
          <button
            :class="{ active: tweaks.theme === 'cream' }"
            @click="setTweak({ theme: 'cream' })"
          >
            Cream
          </button>
          <button
            :class="{ active: tweaks.theme === 'paper' }"
            @click="setTweak({ theme: 'paper' })"
          >
            Paper
          </button>
          <button
            :class="{ active: tweaks.theme === 'toasted' }"
            @click="setTweak({ theme: 'toasted' })"
          >
            Toasted
          </button>
        </div>
      </div>
      <div class="grp">
        <div class="lbl">
          Display font
        </div>
        <div class="seg">
          <button
            :class="{ active: tweaks.display_font === 'cormorant' }"
            @click="setTweak({ display_font: 'cormorant' })"
          >
            Cormorant
          </button>
          <button
            :class="{ active: tweaks.display_font === 'playfair' }"
            @click="setTweak({ display_font: 'playfair' })"
          >
            Playfair
          </button>
        </div>
      </div>
      <div class="grp">
        <div class="lbl">
          Tagline alignment
        </div>
        <div class="seg">
          <button
            :class="{ active: tweaks.tagline_alignment === 'left' }"
            @click="setTweak({ tagline_alignment: 'left' })"
          >
            Left
          </button>
          <button
            :class="{ active: tweaks.tagline_alignment === 'center' }"
            @click="setTweak({ tagline_alignment: 'center' })"
          >
            Center
          </button>
        </div>
      </div>
      <div class="grp toggle">
        <span>Paper grain</span>
        <span
          class="switch"
          :class="{ on: tweaks.show_grain }"
          @click="setTweak({ show_grain: !tweaks.show_grain })"
        />
      </div>
    </div>
  </div>
</template>

<style>
/* Global resets scoped to this demo page */
.ukigumo-page, .ukigumo-page *, .ukigumo-page *::before, .ukigumo-page *::after {
  box-sizing: border-box;
}
.ukigumo-page a { color: inherit; text-decoration: none; }
.ukigumo-page img { display: block; max-width: 100%; }
.ukigumo-page ::selection { background: #8a6a4a; color: #fdfaf3; }
</style>

<style scoped>
/* ─────────────────────────────────────────────────────────────
   Tokens — Bakery Ukigumo
   ───────────────────────────────────────────────────────────── */
.ukigumo-page {
  --paper:      #fdfaf3;
  --cream:      #f6f1e8;
  --cream-2:    #ece3d2;
  --beige:      #d9c9b0;
  --toast:      #b8956a;
  --toast-deep: #8a6a4a;
  --char:       #2b2622;
  --char-soft:  #58504a;
  --line:       rgba(43,38,34,0.12);
  --line-soft:  rgba(43,38,34,0.06);

  --serif: "Cormorant Garamond", "Noto Serif JP", Georgia, serif;
  --jp:    "Noto Serif JP", "Cormorant Garamond", serif;
  --sans:  "Manrope", -apple-system, BlinkMacSystemFont, sans-serif;
  --mono:  "JetBrains Mono", ui-monospace, monospace;

  --maxw:   1440px;
  --gutter: clamp(20px, 4vw, 56px);
  --ease:   cubic-bezier(.22,.61,.36,1);

  background: var(--cream);
  color: var(--char);
  font-family: var(--sans);
  font-weight: 400;
  font-size: 15px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  min-height: 100vh;
  scroll-behavior: smooth;
}

/* Themes */
.ukigumo-page[data-theme="paper"]   { --cream: #fdfaf3; --cream-2: #f3ecdd; }
.ukigumo-page[data-theme="toasted"] { --cream: #efe4d0; --cream-2: #e2d2b6; --paper: #f6ecd8; }

/* Display fonts */
.ukigumo-page[data-display="playfair"]  { --serif: "Playfair Display", "Noto Serif JP", Georgia, serif; }
.ukigumo-page[data-display="cormorant"] { --serif: "Cormorant Garamond", "Noto Serif JP", Georgia, serif; }

/* Paper grain overlay */
.grain-overlay {
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.17  0 0 0 0 0.15  0 0 0 0 0.13  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.55;
  mix-blend-mode: multiply;
}
.ukigumo-page[data-grain="false"] .grain-overlay { display: none; }

/* ─── Type ───────────────────────────────────────────────────── */
.display {
  font-family: var(--serif);
  font-weight: 300;
  letter-spacing: -0.015em;
  line-height: 0.98;
}
.display em { font-style: italic; font-weight: 300; color: var(--toast-deep); }
.jp { font-family: var(--jp); font-weight: 300; letter-spacing: 0.04em; }
.eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--char-soft);
}
.num {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--toast-deep);
}
.body-large { font-size: 17px; line-height: 1.65; color: var(--char-soft); max-width: 52ch; }

/* ─── Layout ─────────────────────────────────────────────────── */
.wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--gutter); }
section { position: relative; }

/* ─── Header ─────────────────────────────────────────────────── */
header.site {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 22px var(--gutter);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  transition: background-color .5s var(--ease), backdrop-filter .5s var(--ease), border-color .5s var(--ease);
  border-bottom: 1px solid transparent;
}
header.site.scrolled {
  background: color-mix(in oklab, var(--cream) 78%, transparent);
  backdrop-filter: blur(14px) saturate(1.05);
  -webkit-backdrop-filter: blur(14px) saturate(1.05);
  border-bottom-color: var(--line-soft);
}
header.site .left, header.site .right { display: flex; gap: 28px; align-items: center; }
header.site .right { justify-content: flex-end; }
header.site nav.links { display: flex; gap: 28px; align-items: center; }
header.site nav a {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--char);
  position: relative;
  padding: 6px 0;
  transition: color .3s var(--ease);
}
header.site nav a::after {
  content: "";
  position: absolute;
  left: 0; right: 100%; bottom: 2px;
  height: 1px;
  background: currentColor;
  transition: right .35s var(--ease);
}
header.site nav a:hover::after { right: 0; }
.brand { text-align: center; line-height: 1; }
.brand .word { font-family: var(--serif); font-weight: 400; font-size: 22px; letter-spacing: 0.02em; }
.brand .word em { font-style: italic; color: var(--toast-deep); }
.brand .sub { font-family: var(--mono); font-size: 9px; letter-spacing: 0.32em; color: var(--char-soft); margin-top: 4px; text-transform: uppercase; }
.reserve-btn {
  display: inline-flex; align-items: center; gap: 10px;
  border: 1px solid var(--char);
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: all .35s var(--ease);
}
.reserve-btn:hover { background: var(--char); color: var(--paper); }
.reserve-btn .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--toast); display: inline-block; }
@media (max-width: 880px) {
  header.site { grid-template-columns: auto 1fr auto; gap: 16px; }
  header.site .left { display: none; }
  header.site .right .links { display: none; }
}

/* ─── Hero ───────────────────────────────────────────────────── */
.hero {
  height: 100vh; min-height: 720px; position: relative;
  overflow: hidden; background: var(--cream);
}
.hero .photo { position: absolute; inset: 0; }
.hero .photo::after {
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 30% 25%, rgba(253,250,243,0.45), transparent 55%),
    linear-gradient(180deg, rgba(43,38,34,0.05) 0%, rgba(43,38,34,0.30) 100%);
  pointer-events: none;
}
.hero-content {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding: 0 var(--gutter) 7vh;
}
.hero-tag { display: flex; align-items: center; gap: 14px; color: var(--paper); margin-bottom: 28px; }
.hero-tag .line { width: 56px; height: 1px; background: rgba(253,250,243,0.6); }
.hero-tag .text { font-family: var(--mono); font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; }
.hero h1 {
  margin: 0; color: var(--paper);
  font-size: clamp(44px, 7.6vw, 124px);
  max-width: 16em;
  text-shadow: 0 2px 30px rgba(43,38,34,0.18);
}
.hero h1 .jp-overlay {
  display: block; font-family: var(--jp); font-size: 0.18em;
  letter-spacing: 0.5em; color: rgba(253,250,243,0.78); margin-bottom: 18px;
}
.hero-bottom {
  margin-top: 44px;
  display: flex; justify-content: space-between; align-items: flex-end;
  flex-wrap: wrap; gap: 24px; color: var(--paper);
}
.hero-cta {
  display: inline-flex; align-items: center; gap: 14px;
  color: var(--paper); border-bottom: 1px solid rgba(253,250,243,0.7);
  padding: 6px 0; font-family: var(--mono); font-size: 12px;
  letter-spacing: 0.2em; text-transform: uppercase;
  transition: gap .35s var(--ease), border-color .35s var(--ease);
}
.hero-cta:hover { gap: 22px; border-color: var(--paper); }
.hero-cta .arrow { width: 28px; height: 1px; background: currentColor; position: relative; }
.hero-cta .arrow::after {
  content: ""; position: absolute; right: 0; top: -3px;
  width: 7px; height: 7px;
  border-right: 1px solid currentColor; border-top: 1px solid currentColor;
  transform: rotate(45deg);
}
.hero-meta {
  font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.22em;
  text-transform: uppercase; color: rgba(253,250,243,0.78); line-height: 1.8;
}
.hero-meta b { color: var(--paper); font-weight: 400; }
.scroll-hint {
  position: absolute; right: var(--gutter); top: 50%;
  transform: translateY(-50%) rotate(90deg); transform-origin: right center;
  color: rgba(253,250,243,0.7); font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.32em; text-transform: uppercase;
  display: flex; align-items: center; gap: 12px;
}
.scroll-hint .bar { width: 40px; height: 1px; background: currentColor; animation: scrollLine 2.4s var(--ease) infinite; }
@keyframes scrollLine {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.4); opacity: 0.4; }
}

/* ─── Section header ─────────────────────────────────────────── */
.sec-head {
  display: grid; grid-template-columns: 1fr 2fr;
  gap: clamp(32px, 6vw, 96px); align-items: end;
  padding: clamp(80px, 12vh, 160px) 0 clamp(40px, 6vh, 80px);
}
.sec-head .meta { display: flex; flex-direction: column; gap: 18px; }
.sec-head .meta .num-row { display: flex; align-items: center; gap: 14px; }
.sec-head .meta .num-row .line { flex: 1; height: 1px; background: var(--line); max-width: 80px; }
.sec-head h2 { margin: 0; font-size: clamp(40px, 5.2vw, 78px); max-width: 14ch; }
.sec-head h2 em { color: var(--toast-deep); }
@media (max-width: 760px) { .sec-head { grid-template-columns: 1fr; gap: 28px; align-items: start; } }

/* ─── Story ──────────────────────────────────────────────────── */
.story { padding-bottom: clamp(80px, 12vh, 160px); }
.story-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: clamp(20px, 2.4vw, 36px); align-items: start; }
.story-grid .ph-1 { grid-column: 1 / span 5; aspect-ratio: 4/5; }
.story-grid .copy { grid-column: 7 / span 5; padding-top: 12vh; display: flex; flex-direction: column; gap: 28px; }
.story-grid .ph-2 { grid-column: 8 / span 5; aspect-ratio: 16/11; margin-top: -4vh; }
.story-grid .ph-3 { grid-column: 2 / span 4; aspect-ratio: 1/1.2; margin-top: -8vh; }
.story-pull { grid-column: 7 / span 5; margin-top: 6vh; }
.story-pull blockquote {
  margin: 0; font-family: var(--serif); font-style: italic; font-weight: 300;
  font-size: clamp(24px, 2.4vw, 34px); line-height: 1.35; color: var(--char);
  max-width: 22ch; position: relative; padding-left: 28px;
}
.story-pull blockquote::before {
  content: ""; position: absolute; left: 0; top: 14px; width: 16px; height: 1px; background: var(--toast-deep);
}
.story-pull cite {
  display: block; margin-top: 18px; font-family: var(--mono); font-size: 11px;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--char-soft); font-style: normal;
}
@media (max-width: 880px) {
  .story-grid { display: flex; flex-direction: column; gap: 32px; }
  .story-grid .ph-1, .story-grid .ph-2, .story-grid .ph-3,
  .story-grid .copy, .story-pull { grid-column: 1 / -1; margin-top: 0; padding-top: 0; }
}

/* ─── Image placeholder ──────────────────────────────────────── */
.ph {
  position: relative; width: 100%;
  background: var(--cream-2); overflow: hidden; border-radius: 2px;
}
.ph::before {
  content: ""; position: absolute; inset: 0;
  background-image:
    repeating-linear-gradient(45deg, transparent 0 14px, rgba(184,149,106,0.10) 14px 15px),
    linear-gradient(180deg, rgba(253,250,243,0.55), transparent 60%);
  pointer-events: none;
}
.ph .label {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 8px;
  color: var(--toast-deep); font-family: var(--mono); font-size: 10.5px;
  letter-spacing: 0.18em; text-transform: uppercase; text-align: center;
  padding: 24px; opacity: 0.85;
}
.ph .label .tick { width: 18px; height: 1px; background: currentColor; }
.ph .label small { font-size: 9.5px; opacity: 0.7; max-width: 22ch; letter-spacing: 0.14em; line-height: 1.5; }
.ph.hero-ph { background: linear-gradient(160deg, #4a3a2a 0%, #2b2622 50%, #1c1815 100%); }
.ph.hero-ph::before {
  background-image:
    repeating-linear-gradient(60deg, transparent 0 18px, rgba(184,149,106,0.10) 18px 19px),
    radial-gradient(ellipse at 30% 30%, rgba(217,201,176,0.18), transparent 60%);
}
.ph.hero-ph .label { color: rgba(217,201,176,0.55); }

/* ─── Signature breads ───────────────────────────────────────── */
.signature { background: var(--paper); padding-bottom: clamp(80px, 12vh, 160px); }
.breads-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: clamp(28px, 3vw, 48px) clamp(20px, 2.4vw, 36px);
}
@media (max-width: 880px) { .breads-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .breads-grid { grid-template-columns: 1fr; } }
.bread { display: flex; flex-direction: column; gap: 18px; cursor: pointer; }
.bread .ph { aspect-ratio: 4/5; transition: transform .8s var(--ease); }
.bread:hover .ph { transform: scale(1.012); }
.bread .meta { display: grid; grid-template-columns: 1fr auto; gap: 12px 24px; align-items: baseline; }
.bread .name { font-family: var(--serif); font-size: 26px; font-weight: 400; line-height: 1.15; }
.bread .name em { color: var(--toast-deep); }
.bread .price { font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em; color: var(--char); white-space: nowrap; }
.bread .desc { grid-column: 1 / -1; font-size: 13.5px; line-height: 1.6; color: var(--char-soft); max-width: 36ch; }
.bread .tag-row { grid-column: 1 / -1; display: flex; gap: 14px; margin-top: 4px; }
.bread .tag {
  font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--toast-deep);
  padding-right: 14px; border-right: 1px solid var(--line);
}
.bread .tag:last-child { border-right: 0; padding-right: 0; }
.bread.offset-up { transform: translateY(-32px); }
@media (max-width: 880px) { .bread.offset-up { transform: none; } }

/* ─── Café ───────────────────────────────────────────────────── */
.cafe { padding-bottom: clamp(80px, 12vh, 160px); background: var(--cream); }
.cafe-hero { position: relative; width: 100%; aspect-ratio: 21/10; }
.cafe-cap { margin-top: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 64px); align-items: end; }
.cafe-cap .left { color: var(--char); }
.cafe-cap h3 { font-family: var(--serif); font-weight: 300; font-size: clamp(28px, 3vw, 42px); margin: 0 0 12px; max-width: 16ch; }
.cafe-cap h3 em { color: var(--toast-deep); }
.cafe-cap .right p { margin: 0; }
@media (max-width: 760px) { .cafe-cap { grid-template-columns: 1fr; } }
.cafe-strip { margin-top: clamp(40px, 5vh, 64px); display: grid; grid-template-columns: 2fr 1fr 1.4fr; gap: clamp(18px, 2vw, 28px); }
.cafe-strip .ph { aspect-ratio: 3/4; }
.cafe-strip .ph:nth-child(1) { aspect-ratio: 4/5; }
.cafe-strip .ph:nth-child(3) { aspect-ratio: 4/5; margin-top: 32px; }
@media (max-width: 760px) {
  .cafe-strip { grid-template-columns: 1fr 1fr; }
  .cafe-strip .ph:nth-child(3) { display: none; }
}

/* ─── Marquee ────────────────────────────────────────────────── */
.marquee { overflow: hidden; border-block: 1px solid var(--line); padding: 26px 0; background: var(--paper); }
.marquee-track {
  display: flex; gap: 64px; white-space: nowrap;
  animation: marquee 40s linear infinite; will-change: transform;
}
.marquee-track span {
  font-family: var(--serif); font-style: italic; font-weight: 300;
  font-size: clamp(28px, 3.4vw, 52px); color: var(--toast-deep);
  display: inline-flex; align-items: center; gap: 64px;
}
.marquee-track span::after { content: "✻"; font-size: 0.6em; font-style: normal; color: var(--beige); }
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ─── Seasonal ───────────────────────────────────────────────── */
.seasonal { background: var(--char); color: var(--paper); padding: clamp(80px, 12vh, 160px) 0; overflow: hidden; }
.seasonal .eyebrow { color: rgba(253,250,243,0.6); }
.seasonal .num { color: var(--toast); }
.seasonal-grid { display: grid; grid-template-columns: 5fr 6fr; gap: clamp(40px, 5vw, 80px); align-items: center; }
.seasonal-text { display: flex; flex-direction: column; gap: 28px; padding-right: 4vw; }
.seasonal-text h2 {
  font-family: var(--serif); font-weight: 300; font-size: clamp(40px, 5vw, 76px);
  line-height: 1; margin: 0; color: var(--paper); max-width: 12ch;
}
.seasonal-text h2 em { color: var(--toast); }
.seasonal-text .body-large { color: rgba(253,250,243,0.78); }
.seasonal-detail { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 32px; margin-top: 8px; }
.seasonal-detail dt { font-family: var(--mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--toast); margin-bottom: 6px; }
.seasonal-detail dd { margin: 0; font-family: var(--serif); font-size: 18px; color: var(--paper); line-height: 1.4; }
.seasonal .ph { aspect-ratio: 4/5; background: #1c1815; }
.seasonal .ph::before {
  background-image:
    repeating-linear-gradient(45deg, transparent 0 16px, rgba(184,149,106,0.14) 16px 17px),
    radial-gradient(ellipse at 70% 30%, rgba(184,149,106,0.18), transparent 60%);
}
.seasonal .ph .label { color: rgba(217,201,176,0.6); }
.seasonal-cta {
  margin-top: 36px; display: inline-flex; align-items: center; gap: 14px;
  color: var(--paper); font-family: var(--mono); font-size: 12px;
  letter-spacing: 0.2em; text-transform: uppercase;
  border-bottom: 1px solid rgba(253,250,243,0.4); padding-bottom: 6px;
  width: fit-content; transition: gap .35s var(--ease), border-color .35s var(--ease);
}
.seasonal-cta:hover { gap: 22px; border-color: var(--toast); }
.seasonal-cta .arrow { width: 28px; height: 1px; background: currentColor; position: relative; }
.seasonal-cta .arrow::after {
  content: ""; position: absolute; right: 0; top: -3px;
  width: 7px; height: 7px;
  border-right: 1px solid currentColor; border-top: 1px solid currentColor;
  transform: rotate(45deg);
}
@media (max-width: 880px) { .seasonal-grid { grid-template-columns: 1fr; } .seasonal-text { padding-right: 0; } }

/* ─── Access ─────────────────────────────────────────────────── */
.access { padding-bottom: clamp(60px, 10vh, 120px); background: var(--cream); }
.access-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(40px, 5vw, 80px); align-items: start; }
.map-card { aspect-ratio: 5/4; background: var(--cream-2); position: relative; overflow: hidden; border-radius: 2px; }
.map-card svg { display: block; width: 100%; height: 100%; }
.map-pin { position: absolute; left: 58%; top: 47%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; gap: 6px; }
.map-pin .pin-dot {
  width: 12px; height: 12px; border-radius: 50%; background: var(--char);
  box-shadow: 0 0 0 6px rgba(43,38,34,0.08), 0 0 0 14px rgba(43,38,34,0.04);
  animation: pulse 2.4s ease-out infinite;
}
@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(43,38,34,0.25), 0 0 0 0 rgba(43,38,34,0.15); }
  100% { box-shadow: 0 0 0 14px rgba(43,38,34,0), 0 0 0 28px rgba(43,38,34,0); }
}
.map-pin .pin-label {
  font-family: var(--mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  background: var(--paper); padding: 5px 10px; border: 1px solid var(--line); color: var(--char);
}
.info-block { display: flex; flex-direction: column; gap: 36px; }
.info-row { display: grid; grid-template-columns: 110px 1fr; gap: 24px; align-items: start; padding-top: 22px; border-top: 1px solid var(--line); }
.info-row:first-child { border-top: 1px solid var(--char); padding-top: 24px; }
.info-row dt { font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--char-soft); padding-top: 4px; }
.info-row dd { margin: 0; font-family: var(--serif); font-size: 19px; line-height: 1.5; color: var(--char); }
.info-row dd small { display: block; font-family: var(--sans); font-size: 12px; color: var(--char-soft); margin-top: 4px; }
.info-row dd .closed { font-family: var(--mono); font-size: 11px; color: var(--toast-deep); letter-spacing: 0.16em; text-transform: uppercase; }
.reserve-cta {
  margin-top: 12px; display: inline-flex; align-items: center; gap: 16px;
  background: var(--char); color: var(--paper); padding: 18px 28px; border-radius: 999px;
  font-family: var(--mono); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  transition: background .35s var(--ease), gap .35s var(--ease); width: fit-content;
}
.reserve-cta:hover { background: var(--toast-deep); gap: 24px; }
.reserve-cta .arrow { width: 28px; height: 1px; background: currentColor; position: relative; }
.reserve-cta .arrow::after {
  content: ""; position: absolute; right: 0; top: -3px; width: 7px; height: 7px;
  border-right: 1px solid currentColor; border-top: 1px solid currentColor; transform: rotate(45deg);
}
@media (max-width: 880px) { .access-grid { grid-template-columns: 1fr; } }

/* ─── Instagram ──────────────────────────────────────────────── */
.insta { padding: clamp(60px, 10vh, 120px) 0; background: var(--paper); }
.insta-head { display: flex; justify-content: space-between; align-items: end; gap: 24px; margin-bottom: 32px; flex-wrap: wrap; }
.insta-head h3 { font-family: var(--serif); font-weight: 300; font-size: clamp(28px, 3vw, 44px); margin: 0; }
.insta-head h3 em { color: var(--toast-deep); }
.insta-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
.insta-grid .ph { aspect-ratio: 1/1; }
@media (max-width: 880px) { .insta-grid { grid-template-columns: repeat(3, 1fr); } }

/* ─── Footer ─────────────────────────────────────────────────── */
footer.site { background: var(--char); color: var(--paper); padding: clamp(80px, 10vh, 120px) 0 32px; }
.foot-top {
  display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: clamp(28px, 3vw, 56px); padding-bottom: 80px;
  border-bottom: 1px solid rgba(253,250,243,0.12);
}
.foot-top .brand-large { font-family: var(--serif); font-weight: 300; font-size: clamp(40px, 4.6vw, 72px); line-height: 0.95; color: var(--paper); }
.foot-top .brand-large em { color: var(--toast); }
.foot-top .brand-large .jp { display: block; font-size: 0.28em; letter-spacing: 0.4em; margin-top: 14px; color: rgba(253,250,243,0.6); }
.foot-col h4 { margin: 0 0 18px; font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(253,250,243,0.6); font-weight: 400; }
.foot-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.foot-col a { font-family: var(--serif); font-size: 19px; color: var(--paper); transition: color .25s var(--ease); }
.foot-col a:hover { color: var(--toast); }
.foot-bottom {
  margin-top: 28px; display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 16px; font-family: var(--mono); font-size: 10.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: rgba(253,250,243,0.5);
}
@media (max-width: 880px) { .foot-top { grid-template-columns: 1fr 1fr; } .foot-top .brand-large { grid-column: 1 / -1; } }

/* ─── Reveal animation ───────────────────────────────────────── */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity 1.1s var(--ease), transform 1.1s var(--ease);
  transition-delay: var(--reveal-delay, 0ms);
}
.reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .marquee-track { animation: none; }
}

/* ─── Tweaks panel ───────────────────────────────────────────── */
#tweaks {
  position: fixed; right: 24px; bottom: 24px; z-index: 200;
  width: 280px; background: var(--paper); border: 1px solid var(--line);
  border-radius: 6px; padding: 18px 18px 16px;
  box-shadow: 0 24px 60px -20px rgba(43,38,34,0.25);
  display: none; font-family: var(--sans);
}
#tweaks.on { display: block; }
#tweaks h5 {
  margin: 0 0 14px; font-family: var(--mono); font-size: 10.5px;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--char-soft);
  display: flex; justify-content: space-between; align-items: center;
}
#tweaks h5 button { background: none; border: 0; cursor: pointer; color: var(--char-soft); font-size: 18px; line-height: 1; padding: 0; }
#tweaks .grp { margin-bottom: 14px; }
#tweaks .lbl { font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--char-soft); margin-bottom: 8px; }
#tweaks .seg {
  display: grid; gap: 4px; grid-auto-flow: column; grid-auto-columns: 1fr;
  background: var(--cream-2); padding: 3px; border-radius: 4px;
}
#tweaks .seg button {
  background: transparent; border: 0; cursor: pointer; padding: 7px 8px;
  font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--char-soft); border-radius: 3px;
  transition: all .25s var(--ease);
}
#tweaks .seg button.active { background: var(--char); color: var(--paper); }
#tweaks .toggle { display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--char); }
#tweaks .switch {
  width: 34px; height: 20px; background: var(--cream-2); border-radius: 999px;
  position: relative; cursor: pointer; transition: background .3s var(--ease);
}
#tweaks .switch::after {
  content: ""; position: absolute; width: 14px; height: 14px; border-radius: 50%;
  background: var(--paper); top: 3px; left: 3px;
  transition: transform .3s var(--ease); box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}
#tweaks .switch.on { background: var(--char); }
#tweaks .switch.on::after { transform: translateX(14px); }
</style>
