// スクロール時に要素をふわっと表示させる（フェードイン）
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ヘッダーのスクロール演出
window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(10, 11, 30, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(10, 11, 30, 0.8)';
    }
});

// スマホ用メニュー（簡易版）
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        alert('スマホ用メニューは制作中です。'); 
        // ここにメニュー開閉の処理を追加できます
    });
}