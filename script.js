// Simple review rotator
document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review-card');
    let currentIndex = 0;

    if (reviews.length > 1) {
        // Hide all reviews except the first
        reviews.forEach((review, index) => {
            if (index !== 0) {
                review.style.display = 'none';
            }
        });

        // Cycle through reviews every 5 seconds
        setInterval(() => {
            reviews[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % reviews.length;
            reviews[currentIndex].style.display = 'block';
        }, 5000);
    }
});