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


// ===== FORM SUBMIT - GOOGLE SHEETS =====
const form = document.getElementById('cadastroForm');

// URL do Google Apps Script
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwT7tBCqhK0hqZs3q5LaC5TAiyRUyvmOuCwjdANYWD5NNs_LxKu9UPGWJWezvGiF_0Q/exec';

form.addEventListener('submit', async (e) => {
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
    
    // Desabilitar botão enquanto envia
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    try {
        // Enviar para o Google Sheets
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
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
        
    } catch (error) {
        alert('Erro ao enviar. Por favor, tente novamente.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
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


// ===== ANIMAÇÃO AO SCROLL =====
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
