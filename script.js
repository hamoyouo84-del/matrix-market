Enterdocument.addEventListener('DOMContentLoaded', () => {
    
    // تأثير ظهور النص تدريجياً عند التحميل
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
    }, 500);

    // تغيير شكل الهيدر عند التمرير
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = '#000000';
            header.style.height = '70px';
        } else {
            header.style.background = '#111111';
            header.style.height = '90px';
        }
    });

    // إضافة صوت بسيط عند الضغط على الأزرار (اختياري)
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Button Clicked! Navigation to Matrix Market Section...');
        });
    });
});
