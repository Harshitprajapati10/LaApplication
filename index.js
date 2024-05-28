const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
    
        // Automatic slide every 3 seconds (adjust the interval as needed)
        const slideInterval = setInterval(() => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }, 3000);
    
        document.getElementById('next').addEventListener('click', () => {
            clearInterval(slideInterval);
            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });
    
        document.getElementById('prev').addEventListener('click', () => {
            clearInterval(slideInterval);
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.length - 1;
            }
            updateSlider();
        });
    
        function updateSlider() {
            const newTransformValue = -currentIndex * 100 + '%';
            slider.style.transform = `translateX(${newTransformValue})`;
        }