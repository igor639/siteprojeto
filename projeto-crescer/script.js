/* ===== RESET ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --blue: #0b2f5b;
    --blue-2: #123f75;
    --teal: #17b6b0;
    --green: #8ccf4f;
    --yellow: #f6a700;
    --orange: #ff8a00;
    --purple: #7d2a8c;

    --text: #28415d;
    --text-light: #5f7289;
    --bg: #fffdf8;
    --bg-soft: #f7f9fc;
    --white: #ffffff;
    --border: #e6edf5;

    --shadow: 0 12px 30px rgba(11, 47, 91, 0.10);
    --shadow-lg: 0 22px 50px rgba(11, 47, 91, 0.16);

    --radius: 20px;
    --radius-md: 14px;
    --radius-sm: 10px;

    --grad-main: linear-gradient(135deg, var(--blue) 0%, var(--blue-2) 45%, var(--teal) 100%);
    --grad-soft: linear-gradient(135deg, #f5fbff 0%, #fef9ee 100%);
    --grad-warm: linear-gradient(135deg, var(--yellow) 0%, var(--orange) 100%);
    --grad-green: linear-gradient(135deg, var(--teal) 0%, var(--green) 100%);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text);
    background:
        radial-gradient(circle at top left, rgba(125, 42, 140, 0.07), transparent 18%),
        radial-gradient(circle at top right, rgba(246, 167, 0, 0.08), transparent 18%),
        radial-gradient(circle at bottom left, rgba(23, 182, 176, 0.08), transparent 18%),
        var(--bg);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 24px;
}

img {
    max-width: 100%;
    display: block;
}

/* ===== FORMAS GLOBAIS ===== */
.bg-shape {
    position: fixed;
    z-index: -1;
    filter: blur(4px);
    opacity: 0.6;
    pointer-events: none;
}

.bg-shape-1 {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(23,182,176,0.25), transparent 70%);
    top: 10%;
    left: -80px;
}

.bg-shape-2 {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(246,167,0,0.18), transparent 70%);
    top: 45%;
    right: -100px;
}

.bg-shape-3 {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(125,42,140,0.16), transparent 70%);
    bottom: 5%;
    left: 10%;
}

/* ===== HEADER ===== */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 253, 248, 0.84);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(11, 47, 91, 0.08);
    transition: box-shadow 0.3s ease, background 0.3s ease;
}

.header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 84px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    color: var(--blue);
}

.logo-img {
    width: 58px;
    height: 58px;
    object-fit: contain;
    filter: drop-shadow(0 6px 14px rgba(11, 47, 91, 0.18));
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
}

.logo-text strong {
    font-size: 1.15rem;
    color: var(--blue);
}

.logo-text span {
    font-size: 0.82rem;
    color: var(--text-light);
    font-weight: 600;
}

.nav {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav a {
    text-decoration: none;
    color: var(--text);
    font-weight: 600;
    transition: 0.25s ease;
}

.nav a:hover {
    color: var(--teal);
}

.btn-nav {
    background: var(--grad-main);
    color: var(--white) !important;
    padding: 12px 18px;
    border-radius: 999px;
    box-shadow: var(--shadow);
}

.btn-nav:hover {
    transform: translateY(-2px);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    border: none;
    background: none;
    cursor: pointer;
}

.menu-toggle span {
    width: 26px;
    height: 2px;
    background: var(--blue);
    border-radius: 999px;
    transition: 0.3s;
}

/* ===== BOTÕES ===== */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 26px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 700;
    transition: 0.25s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: var(--grad-main);
    color: var(--white);
    box-shadow: 0 14px 30px rgba(11, 47, 91, 0.18);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 35px rgba(11, 47, 91, 0.24);
}

.btn-secondary {
    background: rgba(255,255,255,0.85);
    color: var(--blue);
    border: 1px solid rgba(11,47,91,0.1);
    backdrop-filter: blur(6px);
}

.btn-secondary:hover {
    transform: translateY(-2px);
    border-color: rgba(23,182,176,0.4);
}

/* ===== HERO ===== */
.hero {
    position: relative;
    padding: 150px 0 90px;
    overflow: hidden;
    background:
        linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.7)),
        var(--grad-soft);
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(
        90deg,
        var(--purple) 0%,
        #3a74b9 25%,
        var(--green) 50%,
        var(--yellow) 75%,
        var(--orange) 100%
    );
}

.hero .container {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 56px;
    align-items: center;
}

.badge {
    display: inline-block;
    padding: 10px 18px;
    border-radius: 999px;
    background: rgba(255,255,255,0.8);
    border: 1px solid rgba(11,47,91,0.08);
    color: var(--blue);
    font-weight: 700;
    margin-bottom: 24px;
    box-shadow: var(--shadow);
}

.hero h1 {
    font-size: 3.25rem;
    line-height: 1.12;
    color: var(--blue);
    font-weight: 900;
    margin-bottom: 22px;
    max-width: 720px;
}

.highlight {
    background: linear-gradient(90deg, var(--teal), var(--green), var(--yellow), var(--orange));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.14rem;
    color: var(--text-light);
    max-width: 640px;
    margin-bottom: 32px;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 42px;
}

.hero-trust {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
}

.trust-item {
    min-width: 140px;
    background: rgba(255,255,255,0.75);
    border: 1px solid rgba(11,47,91,0.08);
    border-radius: 18px;
    padding: 16px 18px;
    box-shadow: var(--shadow);
}

.trust-number {
    display: block;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--blue);
}

.trust-label {
    display: block;
    font-size: 0.88rem;
    color: var(--text-light);
}

.hero-visual {
    position: relative;
}

.hero-card {
    position: relative;
    min-height: 520px;
    border-radius: 34px;
    padding: 32px;
    background:
        linear-gradient(145deg, rgba(255,255,255,0.96), rgba(245,249,255,0.9));
    border: 1px solid rgba(11,47,91,0.08);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    isolation: isolate;
}

.hero-card::before {
    content: "";
    position: absolute;
    inset: 18px;
    border-radius: 28px;
    border: 1px dashed rgba(23,182,176,0.25);
    z-index: -1;
}

.hero-card-glow {
    position: absolute;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(23,182,176,0.22), rgba(246,167,0,0.12), transparent 72%);
    z-index: -1;
    animation: pulseGlow 4s ease-in-out infinite;
}

.hero-logo-main {
    width: min(360px, 85%);
    animation: floatLogo 4.5s ease-in-out infinite;
    filter: drop-shadow(0 16px 34px rgba(11, 47, 91, 0.16));
}

.hero-star {
    position: absolute;
    top: 58px;
    right: 80px;
    font-size: 3rem;
    color: var(--yellow);
    text-shadow: 0 8px 24px rgba(246,167,0,0.35);
    animation: starSpin 6s linear infinite;
}

.hero-bars {
    position: absolute;
    bottom: 70px;
    right: 48px;
    display: flex;
    align-items: end;
    gap: 12px;
}

.bar {
    display: block;
    width: 48px;
    border-radius: 16px 16px 8px 8px;
    box-shadow: 0 10px 25px rgba(11,47,91,0.12);
}

.bar-1 {
    height: 90px;
    background: linear-gradient(180deg, #1db8c7, #1784a5);
}

.bar-2 {
    height: 140px;
    background: linear-gradient(180deg, #93d552, #2fa6a2);
}

.bar-3 {
    height: 190px;
    background: linear-gradient(180deg, #ffc234, #f6a700);
}

.hero-mini-badges {
    position: absolute;
    left: 24px;
    bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 70%;
}

.hero-mini-badges span {
    padding: 10px 14px;
    border-radius: 999px;
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(11,47,91,0.08);
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--blue);
    box-shadow: var(--shadow);
}

.hero-particles .particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.4;
    pointer-events: none;
    animation: floatParticle 7s ease-in-out infinite;
}

.p1 {
    width: 18px;
    height: 18px;
    background: var(--teal);
    top: 18%;
    left: 8%;
}
.p2 {
    width: 14px;
    height: 14px;
    background: var(--yellow);
    top: 28%;
    right: 14%;
    animation-delay: 1s;
}
.p3 {
    width: 12px;
    height: 12px;
    background: var(--purple);
    top: 65%;
    left: 42%;
    animation-delay: 2s;
}
.p4 {
    width: 20px;
    height: 20px;
    background: var(--green);
    bottom: 14%;
    right: 12%;
    animation-delay: 1.5s;
}
.p5 {
    width: 10px;
    height: 10px;
    background: var(--orange);
    bottom: 28%;
    left: 12%;
    animation-delay: 2.5s;
}

/* ===== SEÇÕES ===== */
section {
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-badge {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(23,182,176,0.12);
    color: var(--teal);
    font-weight: 800;
    font-size: 0.82rem;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
}

.section-header h2 {
    font-size: 2.35rem;
    color: var(--blue);
    line-height: 1.15;
    margin-bottom: 12px;
    font-weight: 900;
}

.section-header p {
    color: var(--text-light);
    max-width: 760px;
    margin: 0 auto;
    font-size: 1.06rem;
}

/* ===== NOTICE ===== */
.notice {
    padding: 34px 0 10px;
}

.notice-box {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    padding: 26px 30px;
    background: linear-gradient(135deg, #fff7db 0%, #fff3ca 100%);
    border: 1px solid rgba(246,167,0,0.35);
    border-radius: 24px;
    box-shadow: var(--shadow);
}

.notice-icon {
    font-size: 2rem;
}

.notice-content strong {
    display: block;
    color: #9c5d00;
    margin-bottom: 6px;
}

.notice-content p {
    color: #8a5b0b;
}

/* ===== COMO FUNCIONA ===== */
.como-funciona {
    padding: 100px 0;
    background: linear-gradient(180deg, rgba(247,249,252,0.8), rgba(255,255,255,0.65));
}

.steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.step {
    position: relative;
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(11,47,91,0.08);
    border-radius: 24px;
    padding: 30px;
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: 0.3s ease;
}

.step::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 6px;
    background: linear-gradient(180deg, var(--teal), var(--green), var(--yellow));
}

.step:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}

.step-number {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--grad-main);
    color: var(--white);
    font-weight: 800;
    box-shadow: var(--shadow);
}

.step-icon {
    font-size: 2.5rem;
    margin-bottom: 14px;
}

.step h3 {
    color: var(--blue);
    font-size: 1.18rem;
    margin-bottom: 12px;
    font-weight: 800;
}

.step p {
    color: var(--text-light);
    font-size: 0.96rem;
    margin-bottom: 16px;
}

.step-tag {
    display: inline-block;
    padding: 7px 12px;
    border-radius: 999px;
    background: rgba(23,182,176,0.1);
    color: var(--teal);
    font-size: 0.78rem;
    font-weight: 700;
}

/* ===== SOBRE ===== */
.sobre {
    padding: 100px 0;
}

.diferenciais {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.diferencial {
    background: rgba(255,255,255,0.78);
    border: 1px solid rgba(11,47,91,0.08);
    border-radius: 24px;
    padding: 30px 26px;
    box-shadow: var(--shadow);
    transition: 0.3s ease;
    text-align: center;
}

.diferencial:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}

.diferencial-icon {
    display: inline-grid;
    place-items: center;
    width: 72px;
    height: 72px;
    margin: 0 auto 18px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(23,182,176,0.16), rgba(246,167,0,0.16));
    font-size: 2rem;
}

.diferencial h3 {
    color: var(--blue);
    font-size: 1.18rem;
    margin-bottom: 12px;
    font-weight: 800;
}

.diferencial p {
    color: var(--text-light);
}

/* ===== DOCUMENTOS ===== */
.documentos {
    padding: 70px 0;
}

.docs-box {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 26px;
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(11,47,91,0.08);
    border-radius: 28px;
    padding: 34px;
    box-shadow: var(--shadow);
}

.docs-content h2 {
    color: var(--blue);
    margin-bottom: 12px;
    font-size: 1.55rem;
}

.docs-content p {
    color: var(--text-light);
}

.docs-content ul {
    list-style: none;
    margin-top: 18px;
}

.docs-content li {
    padding: 8px 0;
    color: var(--text);
    font-weight: 500;
}

.docs-note {
    border-radius: 22px;
    padding: 24px;
    background: linear-gradient(135deg, rgba(23,182,176,0.12), rgba(140,207,79,0.18));
    border: 1px solid rgba(23,182,176,0.14);
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.docs-note span {
    font-size: 1.4rem;
}

.docs-note p {
    color: var(--blue);
}

/* ===== DEPOIMENTOS ===== */
.depoimentos {
    padding: 100px 0;
}

.depoimentos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.depoimento {
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(11,47,91,0.08);
    border-radius: 24px;
    padding: 30px;
    box-shadow: var(--shadow);
    transition: 0.3s ease;
}

.depoimento:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
}

.depoimento-content {
    margin-bottom: 22px;
}

.depoimento-content p {
    color: var(--text);
    font-style: italic;
    line-height: 1.75;
}

.depoimento-author {
    display: flex;
    align-items: center;
    gap: 12px;
}

.author-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--grad-main);
    color: var(--white);
    font-weight: 800;
    box-shadow: var(--shadow);
}

.author-info strong {
    display: block;
    color: var(--blue);
}

.author-info span {
    color: var(--text-light);
    font-size: 0.9rem;
}

/* ===== FAQ ===== */
.faq {
    padding: 100px 0;
    background: linear-gradient(180deg, rgba(247,249,252,0.9), rgba(255,255,255,0.7));
}

.faq-list {
    max-width: 880px;
    margin: 0 auto;
}

.faq-item {
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(11,47,91,0.08);
    border-radius: 18px;
    margin-bottom: 14px;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.faq-question {
    width: 100%;
    border: none;
    background: transparent;
    padding: 22px 24px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    font-size: 1rem;
    font-weight: 800;
    color: var(--blue);
    cursor: pointer;
}

.faq-icon {
    color: var(--teal);
    font-size: 1.6rem;
    transition: 0.3s ease;
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
}

.faq-answer p {
    padding: 0 24px 22px;
    color: var(--text-light);
}

.faq-item.active .faq-answer {
    max-height: 240px;
}

.faq-item.active .faq-icon {
    transform: rotate(45deg);
}

/* ===== CTA FINAL ===== */
.cta-final {
    padding: 100px 0;
}

.cta-box {
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 70px 30px;
    border-radius: 34px;
    background: var(--grad-main);
    color: var(--white);
    box-shadow: var(--shadow-lg);
}

.cta-box::before,
.cta-box::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
}

.cta-box::before {
    width: 220px;
    height: 220px;
    top: -80px;
    left: -60px;
}

.cta-box::after {
    width: 280px;
    height: 280px;
    right: -100px;
    bottom: -120px;
}

.cta-star {
    font-size: 3rem;
    color: #ffd35d;
    margin-bottom: 14px;
}

.cta-box h2 {
    font-size: 2.3rem;
    margin-bottom: 14px;
    font-weight: 900;
}

.cta-box p {
    max-width: 760px;
    margin: 0 auto 24px;
    color: rgba(255,255,255,0.92);
}

.cta-box .btn-primary {
    background: var(--white);
    color: var(--blue);
}

/* ===== FOOTER ===== */
.footer {
    position: relative;
    background: #082447;
    color: var(--white);
    padding: 0 0 30px;
    overflow: hidden;
}

.footer-paint {
    height: 10px;
    background: linear-gradient(
        90deg,
        var(--purple) 0%,
        #3a74b9 25%,
        var(--green) 50%,
        var(--yellow) 75%,
        var(--orange) 100%
    );
}

.footer .container {
    padding-top: 44px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 34px;
}

.footer-logo {
    display: flex;
    gap: 14px;
    align-items: flex-start;
}

.footer-logo-img {
    width: 68px;
    height: 68px;
    object-fit: contain;
    background: rgba(255,255,255,0.08);
    border-radius: 18px;
    padding: 6px;
}

.footer-logo strong {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 6px;
}

.footer-logo p {
    color: rgba(255,255,255,0.72);
    max-width: 420px;
}

.footer-links {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
    align-content: flex-start;
}

.footer-links a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s ease;
}

.footer-links a:hover {
    color: #ffd35d;
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 24px;
    text-align: center;
}

.footer-bottom p {
    color: rgba(255,255,255,0.6);
    font-size: 0.9rem;
    margin: 4px 0;
}

/* ===== ANIMAÇÕES ===== */
@keyframes floatLogo {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
}

@keyframes pulseGlow {
    0%, 100% { transform: scale(1); opacity: 0.95; }
    50% { transform: scale(1.08); opacity: 0.7; }
}

@keyframes starSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes floatParticle {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-14px) translateX(8px); }
}

/* ===== RESPONSIVO ===== */
@media (max-width: 1100px) {
    .hero .container,
    .docs-box {
        grid-template-columns: 1fr;
    }

    .steps,
    .diferenciais,
    .depoimentos-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-visual {
        max-width: 640px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .header .container {
        height: 78px;
    }

    .nav {
        position: fixed;
        top: 78px;
        left: 0;
        right: 0;
        background: rgba(255,255,255,0.98);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(11,47,91,0.08);
        display: none;
        flex-direction: column;
        align-items: flex-start;
        padding: 22px 24px 28px;
        gap: 18px;
        box-shadow: var(--shadow);
    }

    .nav.active {
        display: flex;
    }

    .menu-toggle {
        display: flex;
    }

    .hero {
        padding-top: 130px;
    }

    .hero h1 {
        font-size: 2.3rem;
    }

    .hero .container,
    .steps,
    .diferenciais,
    .depoimentos-grid {
        grid-template-columns: 1fr;
    }

    .hero-trust {
        gap: 14px;
    }

    .hero-card {
        min-height: 430px;
        padding: 24px;
    }

    .hero-star {
        top: 30px;
        right: 30px;
        font-size: 2.4rem;
    }

    .hero-bars {
        right: 24px;
        bottom: 60px;
        gap: 8px;
    }

    .bar {
        width: 34px;
    }

    .bar-1 { height: 70px; }
    .bar-2 { height: 110px; }
    .bar-3 { height: 150px; }

    .hero-mini-badges {
        max-width: 100%;
        position: static;
        margin-top: 18px;
        justify-content: center;
    }

    .section-header h2,
    .cta-box h2 {
        font-size: 1.9rem;
    }

    .footer-content {
        flex-direction: column;
    }

    .notice-box {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 18px;
    }

    .hero h1 {
        font-size: 1.95rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .trust-item {
        width: 100%;
    }

    .cta-box {
        padding: 54px 22px;
    }
}
