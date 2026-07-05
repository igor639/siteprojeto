/* ===== RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #2f7d32;
    --primary-dark: #1f5f25;
    --primary-light: #e8f5e9;
    --primary-soft: #f3fbf4;
    --secondary: #0f172a;
    --text: #334155;
    --text-light: #64748b;
    --background: #ffffff;
    --background-alt: #f8fafc;
    --border: #e2e8f0;
    --white: #ffffff;
    --accent: #f4b400;
    --accent-soft: #fff7dd;
    --shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
    --shadow-lg: 0 20px 40px rgba(15, 23, 42, 0.12);
    --radius: 18px;
    --radius-sm: 12px;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--text);
    line-height: 1.6;
    background: var(--background);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* ===== HEADER ===== */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(14px);
    z-index: 1000;
    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
    transition: box-shadow 0.3s ease, background 0.3s ease;
}

.header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 78px;
}

.logo {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
}

.logo-img {
    height: 54px;
    width: auto;
    display: block;
    object-fit: contain;
}

.nav {
    display: flex;
    align-items: center;
    gap: 32px;
}

.nav a {
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    position: relative;
    transition: color 0.25s ease;
}

.nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.25s ease;
}

.nav a:hover {
    color: var(--primary);
}

.nav a:hover::after {
    width: 100%;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.menu-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--secondary);
    transition: 0.3s;
}

/* ===== BUTTONS ===== */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 999px;
    transition: all 0.25s ease;
    cursor: pointer;
    border: none;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white);
    box-shadow: var(--shadow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background: var(--white);
    color: var(--secondary);
    border: 1px solid var(--border);
}

.btn-secondary:hover {
    background: var(--background-alt);
    transform: translateY(-2px);
}

/* ===== HERO ===== */
.hero {
    position: relative;
    overflow: hidden;
    padding: 150px 0 90px;
    background:
        radial-gradient(circle at top left, rgba(47, 125, 50, 0.12), transparent 35%),
        radial-gradient(circle at bottom right, rgba(244, 180, 0, 0.12), transparent 30%),
        linear-gradient(135deg, #ffffff 0%, #f5fbf5 100%);
}

.hero-bg-shape {
    position: absolute;
    border-radius: 999px;
    filter: blur(10px);
    pointer-events: none;
    opacity: 0.55;
}

.hero-shape-1 {
    width: 260px;
    height: 260px;
    background: rgba(47, 125, 50, 0.12);
    top: 90px;
    right: -70px;
}

.hero-shape-2 {
    width: 220px;
    height: 220px;
    background: rgba(244, 180, 0, 0.14);
    left: -70px;
    bottom: 20px;
}

.hero .container {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 60px;
    align-items: center;
}

.hero-brand {
    margin-bottom: 18px;
}

.hero-logo-main {
    max-width: 280px;
    width: 100%;
    height: auto;
    display: block;
}

.badge {
    display: inline-block;
    background: var(--primary-light);
    color: var(--primary-dark);
    padding: 8px 16px;
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 24px;
}

.hero h1 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--secondary);
    line-height: 1.15;
    margin-bottom: 24px;
}

.highlight {
    color: var(--primary);
}

.hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-light);
    margin-bottom: 32px;
    max-width: 560px;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 42px;
    flex-wrap: wrap;
}

.hero-trust {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.trust-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.trust-number {
    font-size: 2rem;
    font-weight: 800;
    color: var(--secondary);
}

.trust-label {
    font-size: 0.9rem;
    color: var(--text-light);
}

.hero-image-frame {
    position: relative;
    background: linear-gradient(135deg, rgba(47, 125, 50, 0.12), rgba(244, 180, 0, 0.12));
    padding: 14px;
    border-radius: 28px;
    box-shadow: var(--shadow-lg);
}

.hero-img {
    width: 100%;
    max-width: 500px;
    display: block;
    margin: 0 auto;
    border-radius: 22px;
    object-fit: cover;
}

/* ===== NOTICE ===== */
.notice {
    padding: 40px 0;
    background: var(--background);
}

.notice-box {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    background: var(--accent-soft);
    border: 1px solid #f5d76e;
    border-radius: var(--radius);
    padding: 24px 32px;
    box-shadow: var(--shadow);
}

.notice-icon {
    font-size: 2rem;
    flex-shrink: 0;
}

.notice-content strong {
    display: block;
    color: #7a5a00;
    margin-bottom: 4px;
}

.notice-content p {
    color: #7a5a00;
    margin: 0;
}

/* ===== SECTIONS ===== */
.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-badge {
    display: inline-block;
    background: var(--primary-light);
    color: var(--primary-dark);
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.section-header h2 {
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--secondary);
    margin-bottom: 12px;
}

.section-header p {
    font-size: 1.08rem;
    color: var(--text-light);
    max-width: 650px;
    margin: 0 auto;
}

/* ===== COMO FUNCIONA ===== */
.como-funciona {
    padding: 100px 0;
    background: var(--background-alt);
}

.steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.step {
    background: var(--white);
    border-radius: var(--radius);
    padding: 32px;
    position: relative;
    border: 1px solid var(--border);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    box-shadow: var(--shadow);
}

.step:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
}

.step-number {
    position: absolute;
    top: -14px;
    left: 24px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 0.95rem;
    box-shadow: var(--shadow);
}

.step-icon {
    font-size: 2.4rem;
    margin-bottom: 16px;
}

.step h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--secondary);
    margin-bottom: 12px;
}

.step p {
    color: var(--text-light);
    font-size: 0.95rem;
    margin-bottom: 16px;
}

.step-tag {
    display: inline-block;
    background: var(--primary-soft);
    color: var(--primary-dark);
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
}

/* ===== SOBRE ===== */
.sobre {
    padding: 100px 0;
    background: var(--background);
}

.diferenciais {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}

.diferencial {
    background: var(--white);
    text-align: center;
    padding: 30px 24px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.diferencial:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
}

.diferencial-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 20px;
}

.diferencial h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--secondary);
    margin-bottom: 12px;
}

.diferencial p {
    color: var(--text-light);
    font-size: 0.95rem;
}

/* ===== DOCUMENTOS ===== */
.documentos {
    padding: 60px 0;
    background: var(--background-alt);
}

.docs-box {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    background: var(--white);
    border-radius: var(--radius);
    padding: 40px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
}

.docs-content h2 {
    font-size: 1.5rem;
    color: var(--secondary);
    margin-bottom: 16px;
}

.docs-content ul {
    list-style: none;
    margin-top: 16px;
}

.docs-content li {
    padding: 8px 0;
    color: var(--text);
}

.docs-note {
    background: var(--primary-light);
    padding: 24px;
    border-radius: var(--radius-sm);
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.docs-note span {
    font-size: 1.5rem;
}

.docs-note p {
    color: var(--primary-dark);
    font-size: 0.92rem;
    margin: 0;
}

/* ===== DEPOIMENTOS ===== */
.depoimentos {
    padding: 100px 0;
    background: var(--background);
}

.depoimentos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.depoimento {
    background: var(--background-alt);
    border-radius: var(--radius);
    padding: 32px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.depoimento:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
}

.depoimento-content {
    margin-bottom: 24px;
}

.depoimento-content p {
    font-size: 1rem;
    color: var(--text);
    font-style: italic;
    line-height: 1.7;
}

.depoimento-author {
    display: flex;
    align-items: center;
    gap: 12px;
}

.author-avatar {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
}

.author-info {
    display: flex;
    flex-direction: column;
}

.author-info strong {
    color: var(--secondary);
    font-size: 0.95rem;
}

.author-info span {
    color: var(--text-light);
    font-size: 0.85rem;
}

/* ===== FAQ ===== */
.faq {
    padding: 100px 0;
    background: var(--background-alt);
}

.faq-list {
    max-width: 860px;
    margin: 0 auto;
}

.faq-item {
    background: var(--white);
    border-radius: var(--radius-sm);
    margin-bottom: 14px;
    border: 1px solid var(--border);
    overflow: hidden;
    box-shadow: var(--shadow);
}

.faq-question {
    width: 100%;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    color: var(--secondary);
    text-align: left;
    transition: background 0.2s ease;
}

.faq-question:hover {
    background: #f8fafc;
}

.faq-icon {
    font-size: 1.5rem;
    color: var(--primary);
    transition: transform 0.3s;
    flex-shrink: 0;
}

.faq-item.active .faq-icon {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
}

.faq-answer p {
    padding: 0 24px 20px;
    color: var(--text-light);
}

.faq-item.active .faq-answer {
    max-height: 240px;
}

/* ===== FOOTER ===== */
.footer {
    background: linear-gradient(135deg, #122617 0%, #1d3a24 100%);
    color: var(--white);
    padding: 60px 0 30px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 32px;
    margin-bottom: 40px;
}

.footer-logo {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex-wrap: wrap;
    max-width: 420px;
}

.footer-logo-img {
    width: 170px;
    max-width: 100%;
    height: auto;
    display: block;
}

.footer-logo p {
    width: 100%;
    font-size: 0.95rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.78);
    margin-top: 6px;
}

.footer-links {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.78);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
}

.footer-links a:hover {
    color: var(--white);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 24px;
    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.875rem;
    margin: 4px 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .hero .container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-subtitle {
        margin: 0 auto 32px;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-trust {
        justify-content: center;
    }

    .hero-image {
        order: -1;
    }

    .hero-logo-main {
        margin: 0 auto;
    }

    .steps {
        grid-template-columns: repeat(2, 1fr);
    }

    .diferenciais {
        grid-template-columns: repeat(2, 1fr);
    }

    .depoimentos-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .docs-box {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .header .container {
        height: 74px;
    }

    .logo-img {
        height: 46px;
    }

    .nav {
        position: fixed;
        top: 74px;
        left: 0;
        right: 0;
        background: var(--white);
        flex-direction: column;
        padding: 24px;
        gap: 18px;
        border-bottom: 1px solid var(--border);
        display: none;
        box-shadow: var(--shadow);
    }

    .nav.active {
        display: flex;
    }

    .menu-toggle {
        display: flex;
    }

    .hero {
        padding: 130px 0 80px;
    }

    .hero h1 {
        font-size: 2.15rem;
    }

    .steps,
    .diferenciais,
    .depoimentos-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        flex-direction: column;
        gap: 32px;
    }

    .footer-links {
        gap: 16px;
    }

    .notice-box {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 18px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .hero-trust {
        flex-direction: column;
        gap: 16px;
    }

    .section-header h2 {
        font-size: 1.75rem;
    }

    .step,
    .depoimento,
    .docs-box,
    .diferencial {
        padding-left: 22px;
        padding-right: 22px;
    }

    .faq-question {
        font-size: 0.95rem;
    }
}
