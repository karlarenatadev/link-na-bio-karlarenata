// Adiciona um efeito de entrada suave nos botões
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        button.style.transition = `all 0.5s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 100);
    });
});