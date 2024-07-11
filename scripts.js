document.addEventListener('DOMContentLoaded', (event) => {
    const banners = document.querySelectorAll('.banner-container img');
    let currentIndex = 0;
    const totalBanners = banners.length;
    const bannerInterval = 4000; // 4 seconds

    function showNextBanner() {
        banners[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalBanners;
        banners[currentIndex].classList.add('active');
    }

    // Initialize banner display
    banners.forEach((banner, index) => {
        banner.classList.toggle('active', index === 0);
    });

    setInterval(showNextBanner, bannerInterval);
});
