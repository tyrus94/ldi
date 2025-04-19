document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader immediately
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            // Prevent body scrolling when menu is open
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Auto image slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Change slide every 5 seconds

    // Ensure first slide zoom starts immediately
    function initializeFirstSlide() {
        if (slides.length > 0) {
            slides[0].classList.add('active');
            
            // Force browser to recognize the element is active before applying animation
            setTimeout(() => {
                const firstSlideImg = slides[0].querySelector('img');
                if (firstSlideImg) {
                    firstSlideImg.style.transform = 'scale(1)';
                }
            }, 10);
        }
    }

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Initialize the auto image slider
    if (slides.length > 0) {
        initializeFirstSlide();
        setInterval(nextSlide, 6000);
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    
    function handleNavbarScroll() {
        if (window.scrollY > hero.offsetHeight - 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Initialize on page load
    handleNavbarScroll();

    // Intersection Observer for about section animation
    const aboutObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Portrait container animation
                const portraitContainer = document.querySelector('.portrait-container');
                if (portraitContainer) {
                    portraitContainer.classList.add('visible');
                }
                
                // About text animation
                const aboutRight = document.querySelector('.about-right');
                if (aboutRight) {
                    aboutRight.classList.add('visible');
                }
                
                // Philosophy title underline animation
                const philosophyTitle = document.querySelector('.philosophy-title');
                if (philosophyTitle) {
                    setTimeout(() => {
                        philosophyTitle.classList.add('visible');
                    }, 800);
                }
                
                // Once animations are triggered, we don't need to observe anymore
                observer.unobserve(entry.target);
            }
        });
    }, aboutObserverOptions);

    // Observe the about section
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }

    // GSAP Animations for Philosophy Section
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate the headline with letter spacing
        const philosophyHeadline = document.getElementById('philosophy-headline');
        if (philosophyHeadline) {
            gsap.set(philosophyHeadline, { opacity: 1, letterSpacing: "0px" });
            
            gsap.to(philosophyHeadline, {
                duration: 1.2,
                letterSpacing: "2px",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".philosophy-section",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }
        
        // Animate the philosophy cards
        const philosophyCards = document.querySelectorAll('.philosophy-card');
        if (philosophyCards.length) {
            philosophyCards.forEach((card, index) => {
                gsap.set(card, { opacity: 0, y: 50 });
                
                gsap.to(card, {
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    ease: "back.out(1.5)",
                    delay: 0.2 * index,
                    scrollTrigger: {
                        trigger: ".philosophy-cards",
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
            });
        }
        
        // Animate the quote with fade-in
        const philosophyQuote = document.querySelector('.philosophy-quote');
        if (philosophyQuote) {
            gsap.set(philosophyQuote, { opacity: 0 });
            
            gsap.to(philosophyQuote, {
                duration: 1,
                opacity: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".philosophy-quote",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }
        
        // Animate the background shapes
        const shapes = document.querySelectorAll('.shape');
        if (shapes.length) {
            shapes.forEach((shape, index) => {
                const direction = index % 2 === 0 ? 1 : -1;
                
                gsap.to(shape, {
                    y: `${direction * 30}px`,
                    rotation: direction * 10,
                    duration: 3,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                    delay: index * 0.2
                });
            });
        }
        
        // Add 3D rotation effect to cards on mouse move
        const cardsContainer = document.querySelector('.philosophy-cards');
        if (cardsContainer) {
            const cards = cardsContainer.querySelectorAll('.philosophy-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', handleCardMouseMove);
                card.addEventListener('mouseleave', handleCardMouseLeave);
            });
            
            function handleCardMouseMove(e) {
                const card = this;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation based on mouse position
                const xRotation = ((y - rect.height / 2) / rect.height) * 10;
                const yRotation = ((rect.width / 2 - x) / rect.width) * 10;
                
                // Apply rotation transform
                card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            }
            
            function handleCardMouseLeave() {
                // Reset card rotation
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            }
        }
        
        // Add 360 spin animation for cards on smaller screens
        function setupMobileCardAnimations() {
            if (window.innerWidth <= 768) {
                const cards = document.querySelectorAll('.philosophy-card');
                
                cards.forEach((card, index) => {
                    gsap.to(card, {
                        rotationY: 360,
                        duration: 1.5,
                        ease: "power1.inOut",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 70%",
                            toggleActions: "play none none none"
                        },
                        delay: index * 0.2
                    });
                });
            }
        }
        
        // Run mobile animations setup
        setupMobileCardAnimations();
        
        // Re-run on resize
        window.addEventListener('resize', setupMobileCardAnimations);
    }

    // Projects filtering and animation
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Initialize projects - show all items with staggered animation
    function initProjects() {
        projectItems.forEach((item, index) => {
            // Apply staggered delay based on index
            setTimeout(() => {
                item.classList.add('show');
            }, 100 * index);
        });
    }
    
    // Filter projects based on category
    function filterProjects(category) {
        // Hide all projects first
        projectItems.forEach(item => {
            item.classList.remove('show');
        });
        
        // Show projects that match the selected filter
        const filteredItems = category === 'all' 
            ? projectItems 
            : document.querySelectorAll(`.project-item[data-category="${category}"]`);
        
        // Apply staggered animation to filtered items
        filteredItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, 100 * index);
        });
    }
    
    // Event listeners for filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Get filter category from data-filter attribute
            const category = btn.getAttribute('data-filter');
            // Filter projects
            filterProjects(category);
        });
    });
    
    // Initialize Masonry layout with staggered animation on load
    initProjects();
    
    // Touch event handling for mobile devices
    projectItems.forEach(item => {
        // Add touch events for mobile
        item.addEventListener('touchstart', handleTouchStart, false);
        item.addEventListener('touchmove', handleTouchMove, false);
        item.addEventListener('touchend', handleTouchEnd, false);
        
        let touchStartX, touchStartY;
        let touchTimeout;
        
        function handleTouchStart(e) {
            touchStartX = e.changedTouches[0].clientX;
            touchStartY = e.changedTouches[0].clientY;
            
            // Add a subtle "pressed" effect
            item.style.transform = 'scale(0.98)';
            
            // Clear any existing timeout
            if (touchTimeout) clearTimeout(touchTimeout);
        }
        
        function handleTouchMove(e) {
            // Reset the transform if the user moves too much (indicating a scroll rather than a tap)
            const touchX = e.changedTouches[0].clientX;
            const touchY = e.changedTouches[0].clientY;
            
            const diffX = Math.abs(touchX - touchStartX);
            const diffY = Math.abs(touchY - touchStartY);
            
            if (diffX > 10 || diffY > 10) {
                item.style.transform = '';
            }
        }
        
        function handleTouchEnd() {
            // Reset the transform with a slight delay to give feedback
            touchTimeout = setTimeout(() => {
                item.style.transform = '';
            }, 100);
        }
    });

    // Contact Section Animations
    const contactObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const contactObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Form animation
                const contactForm = document.querySelector('.contact-form');
                if (contactForm) {
                    contactForm.classList.add('visible');
                }
                
                // Contact info animation
                const contactInfo = document.querySelector('.contact-info');
                if (contactInfo) {
                    setTimeout(() => {
                        contactInfo.classList.add('visible');
                    }, 300);
                }
                
                // Once animations are triggered, we don't need to observe anymore
                observer.unobserve(entry.target);
            }
        });
    }, contactObserverOptions);

    // Observe the contact section
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        contactObserver.observe(contactSection);
    }
    
    // Form Input Animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Make sure empty inputs don't have the label floating up initially
        if (input.value.trim() !== '') {
            input.classList.add('has-value');
        }
        
        // Handle focus and blur events
        input.addEventListener('focus', () => {
            input.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.classList.remove('focused');
            if (input.value.trim() !== '') {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
        
        // Handle input event
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create formData object
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            
            // Send data to FormSpree
            fetch('https://formspree.io/f/irunguinteriors@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    alert('Message sent successfully!');
                    // Reset form
                    contactForm.reset();
                    // Remove has-value class from all inputs
                    formInputs.forEach(input => {
                        input.classList.remove('has-value');
                    });
                } else {
                    alert('There was an error sending your message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later.');
            });
        });
    }

    // Sticky Contact Menu
    const stickyContact = document.querySelector('.sticky-contact');
    const stickyToggle = document.querySelector('.sticky-toggle');
    
    stickyToggle.addEventListener('click', function() {
        stickyContact.classList.toggle('active');
    });
    
    // Close the menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!stickyContact.contains(event.target) && stickyContact.classList.contains('active')) {
            stickyContact.classList.remove('active');
        }
    });
}); 