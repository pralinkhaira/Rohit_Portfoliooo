/* Smooth scrolling for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// TODO: maybe add some animation easing later if needed

/* Mobile Hamburger Menu Functions */
function toggleMobileNav() {
    const hamburger = document.querySelector('.navbar-hamburger');
    const mobileNav = document.querySelector('.navbar-mobile');
    const mobileNavOverlay = document.querySelector('.navbar-overlay');

    if (hamburger && mobileNav) {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');

        if (mobileNavOverlay) {
            mobileNavOverlay.classList.toggle('active');
        }

        // Prevent body scroll when mobile nav is open
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
}

function closeMobileNav() {
    const hamburger = document.querySelector('.navbar-hamburger');
    const mobileNav = document.querySelector('.navbar-mobile');
    const mobileNavOverlay = document.querySelector('.navbar-overlay');

    if (hamburger) hamburger.classList.remove('active');
    if (mobileNav) mobileNav.classList.remove('active');
    if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');

    // Restore body scroll
    document.body.style.overflow = '';
}

function toggleMobileDropdown(button) {
    const dropdownMenu = button.nextElementSibling;
    button.classList.toggle('active');

    if (dropdownMenu && dropdownMenu.classList.contains('navbar-mobile-menu')) {
        dropdownMenu.classList.toggle('open');
    }
}

/* Modal functions */
function openModal() {
    const modal = document.getElementById("connectModal");
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById("connectModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = '';
    }
}

/* Close modal on outside click */
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("connectModal");
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Connect form submission handler
    const connectForm = document.getElementById('connect-form');
    if (connectForm) {
        connectForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = connectForm.querySelector('button[type="submit"]');
            const formMessage = document.getElementById('connect-form-message');

            // Show loading state
            submitBtn.disabled = true;
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'SENDING...';

            try {
                // Collect form data
                const formData = {
                    name: document.getElementById('connect-name').value,
                    email: document.getElementById('connect-email').value,
                    purpose: document.getElementById('connect-purpose').value,
                    message: document.getElementById('connect-message').value,
                };

                // Submit to backend
                const result = await submitConnect(formData);

                if (result.success) {
                    formMessage.style.color = '#4CAF50';
                    formMessage.textContent = '✓ Message sent successfully!';
                    connectForm.reset();

                    // Close modal after 2 seconds
                    setTimeout(() => {
                        closeModal();
                        formMessage.textContent = '';
                    }, 2000);
                } else {
                    formMessage.style.color = '#f44336';
                    formMessage.textContent = '✗ Error sending message: ' + result.error;
                }
            } catch (error) {
                formMessage.style.color = '#f44336';
                formMessage.textContent = '✗ Error sending message. Please try again.';
                console.error('Error:', error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
});

const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}


/* Console log */
console.log("Portfolio loaded – January 2026");
console.log("Initializing pitch form..."); // debug

/* PITCH FORM FUNCTIONALITY*/

document.addEventListener('DOMContentLoaded', function () {
    const pitchForm = document.querySelector('.pitch-form');

    if (pitchForm) {
        initPitchForm(pitchForm);
        console.log("Pitch form initialized"); // debug
    } else {
        console.log("No pitch form found"); // debug
    }
});

function initPitchForm(form) {
    // Form elements
    const nameInput = document.getElementById('name');
    const companyInput = document.getElementById('company');
    const sectorInput = document.getElementById('sector');
    const investmentInput = document.getElementById('investment');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const pitchSummary = document.getElementById('pitch-summary');
    const uploadBox = document.getElementById('upload-box');
    const fileInput = document.getElementById('file-upload');
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');

    // Auto-resize textarea
    if (pitchSummary) {
        pitchSummary.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }

    // File upload handling
    if (uploadBox && fileInput) {
        // Click to upload
        uploadBox.addEventListener('click', function () {
            fileInput.click();
        });

        // File input change
        fileInput.addEventListener('change', function () {
            if (this.files && this.files[0]) {
                handleFileUpload(this.files[0]);
            }
        });

        // Drag and drop
        uploadBox.addEventListener('dragover', function (e) {
            e.preventDefault();
            this.classList.add('dragover');
        });

        uploadBox.addEventListener('dragleave', function (e) {
            e.preventDefault();
            this.classList.remove('dragover');
        });

        uploadBox.addEventListener('drop', function (e) {
            e.preventDefault();
            this.classList.remove('dragover');

            const files = e.dataTransfer.files;
            if (files && files[0]) {
                fileInput.files = files;
                handleFileUpload(files[0]);
            }
        });

        // Remove file
        const removeBtn = uploadBox.querySelector('.remove-file');
        if (removeBtn) {
            removeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                clearFileUpload();
            });
        }
    }

    function handleFileUpload(file) {
        const MAX_SIZE = 10 * 1024 * 1024; // 10MB
        const allowedTypes = [
            'application/pdf',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        // Validate file type
        if (!allowedTypes.includes(file.type)) {
            showUploadError('Invalid file type. Please upload PDF, PPT, or DOCX.');
            return;
        }

        // Validate file size
        if (file.size > MAX_SIZE) {
            showUploadError('File size exceeds 10MB limit.');
            return;
        }

        // Clear errors and show file
        uploadBox.classList.remove('error');
        uploadBox.querySelector('.upload-size-error')?.remove();
        uploadBox.classList.add('has-file');

        const uploadContent = uploadBox.querySelector('.upload-content');
        const fileInfo = uploadBox.querySelector('.file-info');
        const fileName = uploadBox.querySelector('.file-name');

        if (uploadContent) uploadContent.style.display = 'none';
        if (fileInfo) fileInfo.style.display = 'block';
        if (fileName) fileName.textContent = file.name;
    }

    function showUploadError(message) {
        uploadBox.classList.add('error');

        // Remove existing error
        const existingError = uploadBox.querySelector('.upload-size-error');
        if (existingError) existingError.remove();

        // Add new error
        const errorEl = document.createElement('small');
        errorEl.className = 'upload-size-error';
        errorEl.textContent = message;
        uploadBox.appendChild(errorEl);

        clearFileUpload();
    }

    function clearFileUpload() {
        fileInput.value = '';
        uploadBox.classList.remove('has-file', 'error');
        uploadBox.querySelector('.upload-size-error')?.remove();

        const uploadContent = uploadBox.querySelector('.upload-content');
        const fileInfo = uploadBox.querySelector('.file-info');

        if (uploadContent) uploadContent.style.display = 'block';
        if (fileInfo) fileInfo.style.display = 'none';
    }

    // Real-time validation
    const inputs = [nameInput, companyInput, sectorInput, investmentInput, emailInput, phoneInput];

    inputs.forEach(input => {
        if (input) {
            input.addEventListener('blur', function () {
                validateField(this);
            });

            input.addEventListener('input', function () {
                if (this.parentElement.classList.contains('error')) {
                    validateField(this);
                }
            });
        }
    });

    if (pitchSummary) {
        pitchSummary.addEventListener('blur', function () {
            validateField(this);
        });
    }

    // Form validation functions
    function validateField(field) {
        const fieldParent = field.parentElement;
        const errorMessage = fieldParent.querySelector('.error-message');
        let isValid = true;
        let message = '';

        // Remove existing classes
        fieldParent.classList.remove('valid', 'error');

        // Required validation
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            message = 'This field is required.';
        }
        // Email validation
        else if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                message = 'Please enter a valid email address.';
            }
        }
        // Phone validation
        else if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[0-9]{10,15}$/;
            if (!phoneRegex.test(field.value.replace(/\D/g, ''))) {
                isValid = false;
                message = 'Please enter a valid phone number (10-15 digits).';
            }
        }

        // Apply classes - this part could be cleaner but works
        if (field.value.trim() || field.type === 'tel' || field.type === 'email') {
            if (isValid) {
                fieldParent.classList.add('valid');
            } else {
                fieldParent.classList.add('error');
            }
        }

        // Show error message
        if (errorMessage) {
            errorMessage.textContent = message;
        }

        return isValid;
    }

    function validateForm() {
        let isFormValid = true;

        inputs.forEach(input => {
            if (input && !validateField(input)) {
                isFormValid = false;
            }
        });

        if (pitchSummary && !validateField(pitchSummary)) {
            isFormValid = false;
        }

        return isFormValid;
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Validate form
            if (!validateForm()) {
                showFormMessage('Please fill in all required fields correctly.', 'error');
                return;
            }

            // Show loading state
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoader = submitBtn.querySelector('.btn-loader');

            if (btnText) btnText.textContent = 'Submitting...';
            if (btnLoader) btnLoader.style.display = 'inline-block';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            try {
                await simulateSubmission();

                showFormMessage('Thank you for your pitch! We will review it and get back to you at connect@rohitjangir.in', 'success');
                form.reset();
                clearFileUpload();

                // Remove validation classes
                document.querySelectorAll('.form-field').forEach(el => {
                    el.classList.remove('valid', 'error');
                });

                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            } catch (error) {
                showFormMessage('An error occurred. Please try again or email us directly at connect@rohitjangir.in', 'error');
            } finally {
                // Reset button state
                if (btnText) btnText.textContent = 'Submit Pitch';
                if (btnLoader) btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }

    function simulateSubmission() {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }

    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = 'form-message ' + type;

            // Auto-hide after 8 seconds for success messages
            if (type === 'success') {
                setTimeout(() => {
                    formMessage.className = 'form-message';
                }, 8000);
            }
        }
    }
}


/* Aronix Map Scroll Functionality */
document.addEventListener("DOMContentLoaded", () => {
    const mapContainer = document.querySelector('.aronix-map');

    if (mapContainer) {
        // Add scroll functionality to map container
        let isScrolling = false;
        let startX;
        let startY;
        let scrollLeft;
        let scrollTop;

        mapContainer.style.cursor = 'grab';
        mapContainer.style.overflow = 'auto';

        mapContainer.addEventListener('mousedown', (e) => {
            isScrolling = true;
            mapContainer.style.cursor = 'grabbing';
            startX = e.pageX - mapContainer.offsetLeft;
            startY = e.pageY - mapContainer.offsetTop;
            scrollLeft = mapContainer.scrollLeft;
            scrollTop = mapContainer.scrollTop;
        });

        mapContainer.addEventListener('mouseleave', () => {
            isScrolling = false;
            mapContainer.style.cursor = 'grab';
        });

        mapContainer.addEventListener('mouseup', () => {
            isScrolling = false;
            mapContainer.style.cursor = 'grab';
        });

        mapContainer.addEventListener('mousemove', (e) => {
            if (!isScrolling) return;
            e.preventDefault();
            const x = e.pageX - mapContainer.offsetLeft;
            const y = e.pageY - mapContainer.offsetTop;
            const walkX = (x - startX) * 1.5;
            const walkY = (y - startY) * 1.5;
            mapContainer.scrollLeft = scrollLeft - walkX;
            mapContainer.scrollTop = scrollTop - walkY;
        });
    }
});

/* Aronix Starfield Particles */
document.addEventListener("DOMContentLoaded", () => {
    const starfield = document.querySelector('.aronix-body');

    if (starfield) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            starfield.appendChild(particle);
        }
    }
    // console.log("Particles added"); // commented out debug
});

/* STAR BACKGROUND GENERATOR*/
document.addEventListener("DOMContentLoaded", () => {
    const starryBackground = document.getElementById('starryBackground');

    if (starryBackground) {
        // Generate 100 stars with varying sizes and animations
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';

            // Random size (1-3px)
            const size = Math.random() * 2 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';

            // Random animation duration (3-8s)
            const duration = Math.random() * 5 + 3;
            star.style.setProperty('--duration', duration + 's');

            // Random minimum opacity (0.3-0.8)
            const minOpacity = Math.random() * 0.5 + 0.3;
            star.style.setProperty('--min-opacity', minOpacity);

            // Random animation delay
            star.style.setProperty('--delay', Math.random() * 8 + 's');

            starryBackground.appendChild(star);
        }
    }
});

/* PARTICLE RING GENERATOR*/
document.addEventListener("DOMContentLoaded", () => {
    const particleRing = document.getElementById('particleRing');

    if (particleRing) {
        const numParticles = 12;
        const radius = 190; // Half of 380px width

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const angle = (i / numParticles) * 360;
            const angleRad = (angle * Math.PI) / 180;

            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            particle.style.left = `calc(50% + ${x}px)`;
            particle.style.top = `calc(50% + ${y}px)`;

            // Vary particle sizes
            const size = Math.random() * 4 + 3;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            // Vary animation delays for twinkling effect
            particle.style.animationDelay = (Math.random() * 2) + 's';
            particle.style.animationDuration = (Math.random() * 2 + 1) + 's';

            particleRing.appendChild(particle);
        }
    }
});

/* =MOON POSITIONING (Responsive)*/
document.addEventListener("DOMContentLoaded", () => {
    const moon = document.querySelector('.moon');

    if (moon) {
        // Position moon in top-right corner with some offset
        moon.style.top = '8%';
        moon.style.right = '12%';
    }
});

/* SHOOTING STAR POSITIONS */
document.addEventListener("DOMContentLoaded", () => {
    const shootingStars = document.querySelectorAll('.shooting-star');

    shootingStars.forEach((star, index) => {
        if (!star.style.left) {
            star.style.left = (Math.random() * 60 + 20) + '%';
        }
    });
});


/* AARU Care Hero Slider */
document.addEventListener("DOMContentLoaded", () => {
    const heroSlider = document.querySelector('.aarucare-hero-slider');
    if (!heroSlider) return;

    const slides = heroSlider.querySelectorAll('.hero-slide');
    const indicators = heroSlider.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        stopSlideShow();
        slideInterval = setInterval(nextSlide, 3500); // Auto-slide every 3.5 seconds
    }

    function stopSlideShow() {
        if (slideInterval) clearInterval(slideInterval);
    }

    // Click handlers for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopSlideShow();
            currentSlide = index;
            showSlide(currentSlide);
            startSlideShow();
        });
    });

    // Pause on hover
    heroSlider.addEventListener('mouseenter', stopSlideShow);
    heroSlider.addEventListener('mouseleave', startSlideShow);

    // Initialize
    startSlideShow();
});

/* Ventures Infinite Scroll - True Marquee */
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("venturesTrack");
    if (!track) return;

    const items = track.querySelectorAll(".venture-logo");
    if (items.length === 0) return;

    // Calculate one set width
    let setWidth = 0;
    items.forEach(item => {
        setWidth += item.offsetWidth + 96;
    });

    // Create clones to fill the track
    const totalItems = 25;
    const currentCount = items.length;
    const needed = totalItems - currentCount;

    for (let i = 0; i < needed; i++) {
        items.forEach(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('cloned');
            track.appendChild(clone);
        });
    }

    let currentScroll = 0;
    let scrollSpeed = 1.5;

    function animate() {
        currentScroll += scrollSpeed;

        // Reset when we've scrolled past one complete set
        if (currentScroll <= -setWidth) {
            currentScroll = 0;
        }

        track.style.transform = `translateX(-${currentScroll}px)`;
        requestAnimationFrame(animate);
    }

    // Mouse drag
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    track.style.cursor = 'grab';

    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        scrollStart = currentScroll;
        track.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        currentScroll = scrollStart + dx;
        track.style.transform = `translateX(-${currentScroll}px)`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        track.style.cursor = 'grab';
    });

    animate();
});

/* AARU Developers Sponsor Infinite Scroll */
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("aarudevVenturesTrack");
    if (!track) return;

    const items = track.querySelectorAll(".aarudev-venture-logo");
    if (items.length === 0) return;

    // Calculate one set width
    let setWidth = 0;
    items.forEach(item => {
        setWidth += item.offsetWidth + 96;
    });

    // Create clones to fill the track
    const totalItems = 25;
    const currentCount = items.length;
    const needed = totalItems - currentCount;

    for (let i = 0; i < needed; i++) {
        items.forEach(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('cloned');
            track.appendChild(clone);
        });
    }

    let currentScroll = 0;
    let scrollSpeed = 1.5;

    function animate() {
        currentScroll += scrollSpeed;

        // Reset when we've scrolled past one complete set
        if (currentScroll <= -setWidth) {
            currentScroll = 0;
        }

        track.style.transform = `translateX(-${currentScroll}px)`;
        requestAnimationFrame(animate);
    }

    // Mouse drag
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    track.style.cursor = 'grab';

    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        scrollStart = currentScroll;
        track.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        currentScroll = scrollStart + dx;
        track.style.transform = `translateX(-${currentScroll}px)`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        track.style.cursor = 'grab';
    });

    animate();
});

/* Investment Process Scroll Reveal Animation */
document.addEventListener("DOMContentLoaded", () => {
    const processSteps = document.querySelectorAll('.process-step');

    if (processSteps.length === 0) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add visible class with staggered delay
                    entry.target.classList.add('visible');
                    // Stop observing once visible
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of element is visible
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before bottom
        }
    );

    // Observe each process step
    processSteps.forEach((step) => {
        observer.observe(step);
    });
});

/* SCROLL REVEAL ANIMATIONS */

document.addEventListener('DOMContentLoaded', function () {
    // Create Intersection Observer for scroll reveal animations
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add active class to trigger animation
                    entry.target.classList.add('active');

                    // Stop observing once animated
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before bottom
        }
    );

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .fade-in');
    revealElements.forEach((el) => {
        revealObserver.observe(el);
    });

    // Observe stagger children containers
    const staggerContainers = document.querySelectorAll('.stagger-children, .stagger-children-1, .stagger-children-2, .stagger-children-3, .stagger-children-4, .stagger-children-5');
    staggerContainers.forEach((container) => {
        const children = container.querySelectorAll('*');
        children.forEach((child, index) => {
            // Add staggered transition delay
            child.style.transitionDelay = `${index * 0.1}s`;
            revealObserver.observe(child);
        });
    });

    // Observe list items
    const checkLists = document.querySelectorAll('.check-list');
    checkLists.forEach((list) => {
        const items = list.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.15}s`;
            revealObserver.observe(item);
        });
    });
});

/* SMOOTH SCROLL FOR ANCHOR LINKS */

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

/* SCROLL PROGRESS BAR*/

document.addEventListener('DOMContentLoaded', function () {
    // Create scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
});

/* PARALLAX EFFECT (OPTIONAL)*/

document.addEventListener('DOMContentLoaded', function () {
    const parallaxElements = document.querySelectorAll('.parallax-slow');

    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY;

            parallaxElements.forEach((el) => {
                const speed = 0.1;
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    const yPos = (rect.top - window.innerHeight) * speed;
                    el.style.transform = `translateY(${yPos}px)`;
                }
            });
        });
    }
});

/* AARU Mobility Brands Infinite Scroll */
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("aaruBrandsTrack");
    if (!track) return;

    const items = track.querySelectorAll(".brand-logo");
    if (items.length === 0) return;

    // Calculate one set width
    let setWidth = 0;
    items.forEach(item => {
        setWidth += item.offsetWidth + 80;
    });

    // Create clones to fill the track
    const totalItems = 25;
    const currentCount = items.length;
    const needed = totalItems - currentCount;

    for (let i = 0; i < needed; i++) {
        items.forEach(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('cloned');
            track.appendChild(clone);
        });
    }

    let currentScroll = 0;
    let scrollSpeed = 1.5;

    function animate() {
        currentScroll += scrollSpeed;

        // Reset when we've scrolled past one complete set
        if (currentScroll <= -setWidth) {
            currentScroll = 0;
        }

        track.style.transform = `translateX(-${currentScroll}px)`;
        requestAnimationFrame(animate);
    }

    // Mouse drag
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    track.style.cursor = 'grab';

    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        scrollStart = currentScroll;
        track.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        currentScroll = scrollStart + dx;
        track.style.transform = `translateX(-${currentScroll}px)`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        track.style.cursor = 'grab';
    });

    animate();
});

// End of script - Enhanced with animations!
