document.addEventListener('DOMContentLoaded', () => {
    console.log("Matrix Market Dragon Edition Loaded!");
    
    // إضافة تأثير دخان خفيف عند حركة الماوس (اختياري)
    document.addEventListener('mousemove', (e) => {
        const dragon = document.querySelector('.main-dragon');
        let moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        let moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        dragon.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

