document.addEventListener('DOMContentLoaded', function () {
  // Reset gallery state
  const galleryContainer = document.querySelector('.masonry-gallery');
  if (galleryContainer) {
    // Keep only the first 10 static images
    const staticImages = galleryContainer.querySelectorAll('.gallery-item');
    staticImages.forEach((item, index) => {
      if (index >= 10) {
        item.remove();
      }
    });
  }

  // Add error handling for images
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    img.addEventListener('error', function () {
      console.error('Failed to load image:', this.src);
      console.error('Image path:', this.src);
      console.error('Image element:', this);
      this.style.border = '2px solid red';
      this.alt = 'Failed to load image';
    });
    img.addEventListener('load', function () {
      console.log('Successfully loaded image:', this.src);
      this.classList.add('loaded');
    });
  });

  // Carousel functionality
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  let currentIndex = 0;
  let autoSlideInterval;
  const slideWidth = track.getBoundingClientRect().width;

  // Create indicators
  slides.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = Array.from(indicatorsContainer.children);

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateIndicators();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  }

  // Event listeners for carousel
  nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  // Touch events for carousel
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
    resetAutoSlide();
  }

  // Auto slide functionality
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Pause auto slide on hover
  track.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  track.addEventListener('mouseleave', startAutoSlide);

  // Start auto slide
  startAutoSlide();

  // Infinite Scroll Gallery functionality
  let currentPage = 1;
  const imagesPerPage = 9;
  let isLoading = false;
  let hasMoreImages = true;

  // Function to create a gallery item
  function createGalleryItem(imagePath, index) {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `Gallery Image ${index}`;
    img.loading = 'lazy';

    // Add error handling for each gallery image
    img.addEventListener('error', function () {
      console.error('Failed to load gallery image:', this.src);
      console.error('Image path:', this.src);
      console.error('Image element:', this);
      this.style.border = '2px solid red';
      this.alt = 'Failed to load image';
    });

    img.addEventListener('load', function () {
      console.log('Successfully loaded gallery image:', this.src);
      this.classList.add('loaded');
    });

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = `Gallery Image ${index}`;

    div.appendChild(img);
    div.appendChild(caption);
    return div;
  }

  // Function to load more images
  function loadMoreImages() {
    if (isLoading || !hasMoreImages) return;

    isLoading = true;
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    // Array of available images
    const availableImages = [
      'image.72.jpg', 'image.12.png', 'image.13.jpg', 'image.14.png',
      'image.15.jpg', 'image.16.jpg', 'image.17.jpg', 'image.18.jpg',
      'image.19.jpeg', 'image.20.png', 'image.21.png', 'image.22.jpg',
      'image.23.webp', 'image.24.jpg', 'image.25.jpg', 'image.26.jpg',
      'image.27.png', 'image.28.jpg', 'image.29.jpg', 'image.30.jpg',
      'image.31.jpg', 'image.32.jpg', 'image.33.jpg', 'image.34.jpg',
      'image.35.jpg', 'image.36.jpg', 'image.37.jpg', 'image.38.jpg',
      'image.39.jpg', 'image.40.jpg', 'image.41.jpg', 'image.42.webp',
      'image.43.jpg', 'image.44.jpg', 'image.45.jpg', 'image.46.jpg',
      'image.47.webp', 'image.48.jpg', 'image.49.jpg', 'image.50.jpg',
      'image.51.jpg', 'image.52.png', 'image.53.jpg', 'image.54.jpg',
      'image.55.jpg', 'image.56.jpg', 'image.57.jpeg', 'image.58.jpg',
      'image.59.jpg', 'image.60.jpg', 'image.61.jpg', 'image.62.jpg',
      'image.63.jpg', 'image.64.jpg', 'image.65.jpg', 'image.66.jpg',
      'image.67.jpg', 'image.68.jpg', 'image.69.png', 'image.70.jpg',
      'image.71.jpg', 'image.73.jpg', 'image.75.jpg', 'image.76.jpg',
      'image.77.jpg', 'image.78.png', 'image.79.jpg', 'image.80.webp'
    ];

    // Check if we have more images to load
    if (startIndex >= availableImages.length) {
      hasMoreImages = false;
      isLoading = false;
      return;
    }

    // Load images for current page
    for (let i = startIndex; i < Math.min(endIndex, availableImages.length); i++) {
      const imagePath = `images/Gallery_Page_Images/${availableImages[i]}`;
      console.log('Attempting to load image:', imagePath);
      const galleryItem = createGalleryItem(imagePath, i + 1);
      galleryContainer.appendChild(galleryItem);
    }

    currentPage++;
    isLoading = false;
    adjustLayout();
  }

  // Intersection Observer for infinite scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && hasMoreImages) {
        loadMoreImages();
      }
    });
  }, {
    rootMargin: '100px 0px',
    threshold: 0.1
  });

  // Create and observe a sentinel element
  const sentinel = document.createElement('div');
  sentinel.style.height = '1px';
  galleryContainer.appendChild(sentinel);
  observer.observe(sentinel);

  // Dynamic layout adjustment
  function adjustLayout() {
    const container = document.querySelector('.masonry-gallery');
    if (!container) return;

    const containerWidth = container.offsetWidth;
    let columns;

    if (containerWidth < 768) columns = 1;
    else if (containerWidth < 1024) columns = 2;
    else if (containerWidth < 1440) columns = 3;
    else columns = 4;

    container.style.columns = columns;
  }

  // Initial layout adjustment
  adjustLayout();

  // Adjust layout on window resize with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustLayout, 250);
  });

  // Force layout recalculation after all images are loaded
  window.addEventListener('load', () => {
    adjustLayout();
  });
}); 
