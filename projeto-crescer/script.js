// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});


// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Fecha todos
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abre o clicado (se não estava ativo)
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});


// ===== HEADER SCROLL =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});


// ===== FORM SUBMIT =====
const form = document.getElementById('cadastroForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Pegar dados do formulário
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validar idade
    const idade = parseInt(data.idade);
    if (idade < 13 || idade > 21) {
        alert('A idade deve ser entre 13 e 21 anos.');
        return;
    }
    
    // Aqui você pode enviar para onde quiser
    // Por enquanto, vamos mostrar mensagem de sucesso
    
    // Criar mensagem de sucesso
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
        <div style="
            background: #d1fae5;
            border: 1px solid #059669;
            border-radius: 8px;
            padding: 24px;
            text-align: center;
            margin-top: 20px;
        ">
            <span style="font-size: 3rem;">✅</span>
            <h3 style="color: #047857; margin: 16px 0 8px;">Pré-cadastro enviado!</h3>
            <p style="color: #065f46;">
                Recebemos os dados de <strong>${data.nomeJovem}</strong>.<br>
                Entraremos em contato pelo WhatsApp <strong>${data.telefone}</strong><br>
                em até 5 dias úteis com a senha de comparecimento.
            </p>
        </div>
    `;
    
    // Substituir form pela mensagem
    form.style.display = 'none';
    form.parentElement.appendChild(successMessage);
    
    // Scroll suave até a mensagem
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    console.log('Dados do formulário:', data);
    
    // TODO: Enviar dados para email/WhatsApp/planilha
    // Opções gratuitas:
    // 1. Formspree.io (envia para email)
    // 2. Google Apps Script (envia para Google Sheets)
    // 3. EmailJS (envia email direto do JS)
});


// ===== MÁSCARA TELEFONE =====
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 10) {
            value = `${value.slice(0, 10)}-${value.slice(10)}`;
        }
    }
    
    e.target.value = value;
});


// ===== ANIMAÇÃO AO SCROLL (opcional) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.step, .diferencial, .depoimento, .unidade').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});