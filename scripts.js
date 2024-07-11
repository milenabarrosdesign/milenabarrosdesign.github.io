document.addEventListener('DOMContentLoaded', (event) => {
    const bannerContainer = document.querySelector('.banner-container');
    const banners = bannerContainer.querySelectorAll('img');
    let currentIndex = 0;
    const totalBanners = banners.length;
    const bannerInterval = 4000; // 4 seconds

    function showNextBanner() {
        banners[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % totalBanners;
        banners[currentIndex].style.display = 'block';
    }

    // Initialize banner display
    banners.forEach((banner, index) => {
        banner.style.display = index === 0 ? 'block' : 'none';
    });

    setInterval(showNextBanner, bannerInterval);
});
