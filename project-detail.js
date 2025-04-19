document.addEventListener('DOMContentLoaded', function() {
    // Add console logs for debugging
    console.log('Project detail script loaded');
    
    try {
        // Project data object with all project information
        const projectsData = {
            'la-bravo-restaurant': {
                title: 'La Bravo Restaurant',
                category: 'Commercial Design',
                folder: 'La bravo',
                images: [
                    'La bravo/44.jpg',
                    'La bravo/45.jpg',
                    'La bravo/43.jpg',
                    'La bravo/42.jpg',
                    'La bravo/41.jpg',
                    'La bravo/40.jpg',
                    'La bravo/39.jpg',
                    'La bravo/38.jpg',
                    'La bravo/37.jpg',
                    'La bravo/36.jpg',
                    'La bravo/35.jpg',
                    'La bravo/34.jpg',
                    'La bravo/33.jpg',
                    'La bravo/3.jpg',
                    'La bravo/2.jpg',
                    'La bravo/80.jpg'
                ],
                description: 'La Bravo Restaurant is a contemporary dining space that blends rustic elegance with modern design elements. The project focused on creating an inviting atmosphere that complements the culinary experience. Natural materials like wood and stone were used alongside industrial accents to achieve a warm yet sophisticated ambiance.',
                client: 'La Bravo Holdings Ltd.',
                location: 'Nairobi, Kenya',
                year: '2023',
                services: ['Interior Design', 'Furniture Selection', 'Lighting Design', 'Custom Fixtures']
            },
            'boba-tea-lounge': {
                title: 'Boba Tea Lounge',
                category: 'Commercial Design',
                folder: 'Boba',
                images: [
                    'Boba/103.jpg',
                    'Boba/107.jpg',
                    'Boba/106.jpg',
                    'Boba/105.jpg',
                    'Boba/104.jpg',
                    'Boba/108.jpg',
                    'Boba/102.jpg'
                ],
                description: 'Boba Tea Lounge is a vibrant and modern space designed to appeal to the younger demographic. The design incorporates playful elements, bold colors, and comfortable seating arrangements that encourage social interaction. Special attention was given to lighting and acoustics to create the perfect ambiance for both busy periods and quieter moments.',
                client: 'Boba Enterprises',
                location: 'Nairobi, Kenya',
                year: '2023',
                services: ['Space Planning', 'Interior Design', 'Custom Furniture', 'Branding Integration']
            },
            '3rd-park-hospital': {
                title: '3rd Park Hospital',
                category: 'Healthcare Design',
                folder: '3rd Park Hospital',
                images: [
                    '3rd Park Hospital/6.jpg',
                    '3rd Park Hospital/21.jpg',
                    '3rd Park Hospital/20.jpg',
                    '3rd Park Hospital/19.jpg',
                    '3rd Park Hospital/18.jpg',
                    '3rd Park Hospital/17.jpg',
                    '3rd Park Hospital/16.jpg',
                    '3rd Park Hospital/15.jpg',
                    '3rd Park Hospital/14.jpg',
                    '3rd Park Hospital/13.jpg',
                    '3rd Park Hospital/12.jpg',
                    '3rd Park Hospital/11.jpg',
                    '3rd Park Hospital/10.jpg',
                    '3rd Park Hospital/9.jpg',
                    '3rd Park Hospital/8.jpg',
                    '3rd Park Hospital/7.jpg',
                    '3rd Park Hospital/22.jpg'
                ],
                description: 'The 3rd Park Hospital project aimed to create a healing-centered healthcare environment that breaks away from traditional clinical designs. Our approach focused on combining functionality with comfort, using natural elements and calming color schemes to reduce patient anxiety and promote recovery. The design includes ample natural light, biophilic elements, and carefully selected materials that are both practical and aesthetically pleasing.',
                client: '3rd Park Medical Center',
                location: 'Nairobi, Kenya',
                year: '2022',
                services: ['Healthcare Design', 'Space Planning', 'Furniture Selection', 'Lighting Design', 'Material Specification']
            },
            'kenyatta-rd-residence': {
                title: 'Kenyatta Rd Residence',
                category: 'Residential Design',
                folder: 'Kenyatta road',
                images: [
                    'Kenyatta road/79.jpg',
                    'Kenyatta road/86.jpg',
                    'Kenyatta road/85.jpg',
                    'Kenyatta road/84.jpg',
                    'Kenyatta road/81.jpg',
                    'Kenyatta road/83.jpg',
                    'Kenyatta road/82.jpg',
                    'Kenyatta road/87.jpg',
                    'Kenyatta road/78.jpg'
                ],
                description: 'Kenyatta Rd Residence is a luxurious family home that balances grandeur with comfort. The design emphasizes open floor plans, seamless indoor-outdoor connections, and carefully curated spaces for both entertaining and private family moments. High-quality materials and finishes were selected to ensure durability while maintaining an elegant aesthetic that reflects the clients\' sophisticated taste.',
                client: 'Private Residence',
                location: 'Kenyatta Road, Kenya',
                year: '2023',
                services: ['Architectural Design', 'Interior Design', 'Custom Furniture', 'Landscape Coordination']
            },
            'kiambu': {
                title: 'Kiambu',
                category: 'Residential Design',
                folder: 'Kiambu',
                images: [
                    'Kiambu/94.jpg',
                    'Kiambu/92.jpg',
                    'Kiambu/91.jpg',
                    'Kiambu/90.jpg',
                    'Kiambu/89.jpg',
                    'Kiambu/88.jpg'
                ],
                description: 'Kiambu is an elegant family residence that seamlessly blends traditional and modern design elements. The project focused on creating warm, inviting spaces while incorporating contemporary amenities and finishes. Special attention was given to natural materials, texture variations, and thoughtful spatial layout to accommodate both daily family life and entertainment.',
                client: 'Private Residence',
                location: 'Kiambu, Kenya',
                year: '2022',
                services: ['Interior Design', 'Space Planning', 'Material Selection', 'Custom Millwork']
            },
            'runda': {
                title: 'Runda',
                category: 'Residential Design',
                folder: 'Runda',
                images: [
                    'Runda/101.jpg',
                    'Runda/100.jpg',
                    'Runda/99.jpg',
                    'Runda/98.jpg',
                    'Runda/97.jpg',
                    'Runda/96.jpg',
                    'Runda/95.jpg'
                ],
                description: 'Runda is a sophisticated residential project that showcases attention to fine details and textures. The design embraces clean lines and a neutral palette enhanced with subtle accents of color and texture. Every element from flooring to light fixtures was carefully selected to create a cohesive, refined living environment that balances luxury with practicality.',
                client: 'Private Residence',
                location: 'Runda, Nairobi, Kenya',
                year: '2023',
                services: ['Full Interior Design', 'Custom Furniture Design', 'Art Consultation', 'Styling']
            },
            'pulsaris-designs': {
                title: 'Pulsaris Designs',
                category: 'Commercial Design',
                folder: 'Pulssaris',
                images: [
                    'Pulssaris/69.jpg',
                    'Pulssaris/68.jpg',
                    'Pulssaris/67.jpg',
                    'Pulssaris/66.jpg'
                ],
                description: 'Pulsaris Designs is a creative workspace designed to foster innovation and collaboration. The office layout breaks from traditional configurations, featuring dynamic communal areas, flexible workstations, and thoughtfully designed quiet zones. The design incorporates brand colors and philosophy while ensuring functionality and employee wellbeing remain at the forefront.',
                client: 'Pulsaris Design Studio',
                location: 'Nairobi, Kenya',
                year: '2022',
                services: ['Workplace Design', 'Space Planning', 'Furniture Selection', 'Brand Integration']
            },
            'the-conclave': {
                title: 'The Conclave',
                category: 'Commercial Design',
                folder: 'conclave',
                images: [
                    'conclave/62.jpg',
                    'conclave/64.jpg',
                    'conclave/63.jpg',
                    'conclave/65.jpg',
                    'conclave/61.jpg',
                    'conclave/60.jpg',
                    'conclave/59.jpg',
                    'conclave/58.jpg',
                    'conclave/57.jpg',
                    'conclave/56.jpg',
                    'conclave/55.jpg',
                    'conclave/54.jpg',
                    'conclave/53.jpg',
                    'conclave/52.jpg',
                    'conclave/51.jpg',
                    'conclave/50.jpg',
                    'conclave/49.jpg',
                    'conclave/48.jpg',
                    'conclave/47.jpg',
                    'conclave/46.jpg'
                ],
                description: 'The Conclave is a modern conference facility designed to balance productivity and comfort. The space includes versatile meeting rooms, state-of-the-art presentation areas, and comfortable breakout spaces. Special attention was given to acoustics, lighting, and technology integration to ensure an optimal environment for professional gatherings of all sizes.',
                client: 'The Conclave Group',
                location: 'Nairobi, Kenya',
                year: '2023',
                services: ['Commercial Design', 'Space Planning', 'Acoustic Design', 'Lighting Design', 'Technology Integration']
            },
            'kieni-get-away': {
                title: 'Kieni Get-Away – Nyeri',
                category: 'Hospitality Design',
                folder: 'Kieni',
                images: [
                    'Kieni/122.jpg',
                    'Kieni/121.jpg',
                    'Kieni/120.jpg',
                    'Kieni/119.jpg',
                    'Kieni/118.jpg',
                    'Kieni/117.jpg',
                    'Kieni/115.jpg',
                    'Kieni/114.jpg',
                    'Kieni/113.jpg',
                    'Kieni/112.jpg',
                    'Kieni/111.jpg',
                    'Kieni/110.jpg',
                    'Kieni/109.jpg'
                ],
                description: 'Kieni Get-Away is a tranquil retreat designed to connect guests with nature. The design emphasizes sustainable materials, panoramic views, and a seamless flow between indoor and outdoor spaces. Each accommodation unit was carefully positioned to maximize privacy while offering stunning views of the natural surroundings. Interiors feature local craftsmanship and materials to create an authentic yet luxurious experience.',
                client: 'Kieni Retreats Ltd.',
                location: 'Nyeri, Kenya',
                year: '2022',
                services: ['Hospitality Design', 'Sustainable Design', 'Interior Design', 'Outdoor Space Planning']
            },
            'kikuyu-wc': {
                title: 'Kikuyu W/C',
                category: 'Residential Design',
                folder: 'Kikuyu Wc',
                images: [
                    'Kikuyu Wc/27.jpg',
                    'Kikuyu Wc/26.jpg',
                    'Kikuyu Wc/25.jpg',
                    'Kikuyu Wc/24.jpg',
                    'Kikuyu Wc/23.jpg'
                ],
                description: 'Kikuyu W/C is a contemporary commercial space that balances functionality and aesthetics. The project involved transforming a standard commercial unit into an inviting space that reflects the brand identity while providing practical solutions for daily operations. The design includes custom storage systems, versatile display areas, and a welcoming client interaction zone.',
                client: 'Kikuyu Enterprises',
                location: 'Kikuyu, Kenya',
                year: '2023',
                services: ['Commercial Design', 'Space Planning', 'Custom Fixtures', 'Branding Integration']
            },
            'membley-kitchen': {
                title: 'Membley Kitchen',
                category: 'Residential Design',
                folder: 'Membley kitchen',
                images: [
                    'Membley kitchen/73.jpg',
                    'Membley kitchen/70.jpg',
                    'Membley kitchen/77.jpg',
                    'Membley kitchen/75.jpg',
                    'Membley kitchen/74.jpg',
                    'Membley kitchen/76.jpg', 
                    'Membley kitchen/72.jpg',
                    'Membley kitchen/71.jpg'
                ],
                description: 'The Membley Kitchen project is a modern residential kitchen renovation that transforms a traditional cooking space into a contemporary culinary haven. The design focuses on optimizing functionality while creating an aesthetically pleasing environment for family gatherings and entertaining. The kitchen features sleek cabinetry, premium finishes, and thoughtful space planning that maximizes storage while maintaining an open, airy feel.',
                client: 'Private Residence',
                location: 'Membley Estate, Nairobi, Kenya',
                year: '2023',
                services: ['Kitchen Design', 'Space Planning', 'Custom Cabinetry', 'Material Selection', 'Lighting Design']
            },
            'renders': {
                title: 'Design Renders',
                category: 'Commercial Design',
                folder: 'Renders',
                images: [
                    'Renders/31.jpg',
                    'Renders/30.jpg',
                    'Renders/27.jpg',
                    'Renders/28.jpg',
                    'Renders/32.jpg'
                ],
                description: 'These high-quality design renders showcase our creative vision for upcoming residential projects. Each render demonstrates our commitment to elegant, functional spaces that blend contemporary aesthetics with practical living solutions. These visualizations help clients understand spatial relationships, material selections, and design concepts before implementation.',
                client: 'Various Private Residences',
                location: 'Nairobi, Kenya',
                year: '2024',
                services: ['3D Visualization', 'Interior Design', 'Space Planning', 'Material Selection', 'Lighting Design']
            }
        };
        
        console.log('Project data initialized');
        
        // Get project ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        console.log('Project ID from URL:', projectId);
        
        // If no project ID provided, redirect to a default project or show error
        let currentProject;
        if (projectId && projectsData[projectId]) {
            currentProject = projectsData[projectId];
            console.log('Selected project:', currentProject.title);
        } else {
            // Use the first project as default
            currentProject = projectsData['la-bravo-restaurant'];
            console.log('Using default project:', currentProject.title);
        }
        
        // Check if all required DOM elements exist
        const projectTitle = document.getElementById('project-title');
        const projectCategory = document.getElementById('project-category');
        const projectHero = document.querySelector('.project-hero');
        const galleryGrid = document.getElementById('gallery-grid');
        const projectDescription = document.getElementById('project-description');
        const projectClient = document.getElementById('project-client');
        const projectLocation = document.getElementById('project-location');
        const projectYear = document.getElementById('project-year');
        const servicesContainer = document.getElementById('project-services');
        const relatedGrid = document.getElementById('related-grid');
        
        // Verify all elements exist
        if (!projectTitle) console.error('Element #project-title not found');
        if (!projectCategory) console.error('Element #project-category not found');
        if (!projectHero) console.error('Element .project-hero not found');
        if (!galleryGrid) console.error('Element #gallery-grid not found');
        if (!projectDescription) console.error('Element #project-description not found');
        if (!projectClient) console.error('Element #project-client not found');
        if (!projectLocation) console.error('Element #project-location not found');
        if (!projectYear) console.error('Element #project-year not found');
        if (!servicesContainer) console.error('Element #project-services not found');
        if (!relatedGrid) console.error('Element #related-grid not found');
        
        // Continue only if all required elements exist
        if (projectTitle && projectCategory && projectHero && galleryGrid && 
            projectDescription && projectClient && projectLocation && 
            projectYear && servicesContainer && relatedGrid) {
            
            console.log('All required DOM elements found');
            
            // Update page title
            document.title = currentProject.title + ' | LDinteriors';
            
            // Update hero section
            projectTitle.textContent = currentProject.title;
            projectCategory.textContent = currentProject.category;
            
            // Set hero background image (first image in the array)
            projectHero.style.backgroundImage = `url('${currentProject.images[0]}')`;
            console.log('Hero image set:', currentProject.images[0]);
            
            // Populate gallery
            galleryGrid.innerHTML = ''; // Clear existing content
            
            currentProject.images.forEach((image, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = index === 0 ? 'gallery-item featured' : 'gallery-item';
                galleryItem.innerHTML = `<img src="${image}" alt="${currentProject.title} - Image ${index + 1}">`;
                
                // Add click event for lightbox
                galleryItem.addEventListener('click', () => {
                    openLightbox(image, index);
                });
                
                galleryGrid.appendChild(galleryItem);
            });
            console.log(`Added ${currentProject.images.length} images to gallery`);
            
            // Update project information
            projectDescription.textContent = currentProject.description;
            projectClient.textContent = currentProject.client;
            projectLocation.textContent = currentProject.location;
            projectYear.textContent = currentProject.year;
            
            // Add services list
            servicesContainer.innerHTML = ''; // Clear existing content
            currentProject.services.forEach(service => {
                const serviceItem = document.createElement('li');
                serviceItem.textContent = service;
                servicesContainer.appendChild(serviceItem);
            });
            console.log(`Added ${currentProject.services.length} services`);
            
            // Populate related projects (3 random projects excluding current)
            relatedGrid.innerHTML = ''; // Clear existing content
            
            // Get array of project IDs excluding current
            const projectIds = Object.keys(projectsData).filter(id => id !== projectId);
            
            // Randomly select 3 projects (or fewer if not enough)
            const relatedProjectCount = Math.min(3, projectIds.length);
            const shuffledProjects = projectIds.sort(() => 0.5 - Math.random());
            
            for (let i = 0; i < relatedProjectCount; i++) {
                const relatedId = shuffledProjects[i];
                const relatedProject = projectsData[relatedId];
                
                const relatedItem = document.createElement('div');
                relatedItem.className = 'related-item';
                relatedItem.innerHTML = `
                    <div class="related-image">
                        <img src="${relatedProject.images[0]}" alt="${relatedProject.title}">
                    </div>
                    <div class="related-info">
                        <h3>${relatedProject.title}</h3>
                        <p>${relatedProject.category}</p>
                    </div>
                `;
                
                // Add click event to navigate to the related project
                relatedItem.addEventListener('click', () => {
                    window.location.href = `project-detail.html?id=${relatedId}`;
                });
                
                relatedGrid.appendChild(relatedItem);
            }
            console.log(`Added ${relatedProjectCount} related projects`);
            
            // Create lightbox
            createLightbox();
            console.log('Lightbox created');
        } else {
            console.error('Not all required DOM elements were found. Project details could not be fully loaded.');
        }
        
        // Mobile menu toggle
        const menuToggle = document.querySelector('#mobile-menu');
        const navMenu = document.querySelector('.nav-menu');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            console.log('Mobile menu initialized');
        } else {
            console.warn('Mobile menu elements not found');
        }
        
        // Sticky Contact menu
        const stickyContact = document.querySelector('.sticky-contact');
        const stickyToggle = document.querySelector('.sticky-toggle');
        
        if (stickyToggle && stickyContact) {
            // Enhanced animation for sticky contact menu
            stickyToggle.addEventListener('click', function() {
                stickyContact.classList.toggle('active');
                
                // Animate the menu items with staggered delay
                const menuItems = stickyContact.querySelectorAll('.sticky-item');
                if (stickyContact.classList.contains('active')) {
                    menuItems.forEach((item, index) => {
                        item.style.transitionDelay = `${index * 0.1}s`;
                        item.style.transform = 'translateY(0)';
                        item.style.opacity = '1';
                    });
                    // Add pulse animation to toggle button
                    stickyToggle.classList.add('pulse');
                } else {
                    menuItems.forEach((item, index) => {
                        item.style.transitionDelay = `${(menuItems.length - index - 1) * 0.05}s`;
                        item.style.transform = 'translateY(20px)';
                        item.style.opacity = '0';
                    });
                    // Remove pulse animation
                    stickyToggle.classList.remove('pulse');
                }
            });
            
            // Initialize menu items in hidden state
            const menuItems = stickyContact.querySelectorAll('.sticky-item');
            menuItems.forEach(item => {
                item.style.transform = 'translateY(20px)';
                item.style.opacity = '0';
                item.style.transition = 'all 0.3s ease-in-out';
            });
            
            // Close the menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!stickyContact.contains(event.target) && !stickyToggle.contains(event.target) && stickyContact.classList.contains('active')) {
                    stickyContact.classList.remove('active');
                    
                    // Animate items out
                    const menuItems = stickyContact.querySelectorAll('.sticky-item');
                    menuItems.forEach((item, index) => {
                        item.style.transitionDelay = `${(menuItems.length - index - 1) * 0.05}s`;
                        item.style.transform = 'translateY(20px)';
                        item.style.opacity = '0';
                    });
                    
                    // Remove pulse animation
                    stickyToggle.classList.remove('pulse');
                }
            });
            console.log('Sticky contact menu initialized with animations');
        } else {
            console.warn('Sticky contact menu elements not found');
        }
    } catch (error) {
        console.error('Error initializing project detail page:', error);
    }
});

// Create lightbox elements
function createLightbox() {
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    // Create lightbox content
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="" alt="Gallery Image" class="lightbox-img">
            <div class="lightbox-close">
                <svg viewBox="0 0 24 24">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="currentColor"/>
                </svg>
            </div>
            <div class="lightbox-prev lightbox-nav">
                <svg viewBox="0 0 24 24">
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" fill="currentColor"/>
                </svg>
            </div>
            <div class="lightbox-next lightbox-nav">
                <svg viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    `;
    
    // Append to body
    document.body.appendChild(lightbox);
    
    // Get URL params to identify current project
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // Add event listeners
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox('prev');
        } else if (e.key === 'ArrowRight') {
            navigateLightbox('next');
        }
    });
    
    // Click navigation
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
        navigateLightbox('prev');
    });
    
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
        navigateLightbox('next');
    });
}

// Global variables for lightbox
let currentImageIndex = 0;
let projectImages = [];

// Open lightbox with specific image
function openLightbox(imageSrc, index) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    
    // Get URL params to identify current project
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // Get all gallery images
    const galleryItems = document.querySelectorAll('.gallery-item img');
    projectImages = Array.from(galleryItems).map(img => img.src);
    
    // Set current image index
    currentImageIndex = index;
    
    // Set image source
    lightboxImg.src = imageSrc;
    
    // Show lightbox
    lightbox.classList.add('active');
}

// Navigate between lightbox images
function navigateLightbox(direction) {
    if (projectImages.length <= 1) return;
    
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
    } else {
        currentImageIndex = (currentImageIndex + 1) % projectImages.length;
    }
    
    const lightboxImg = document.querySelector('.lightbox-img');
    lightboxImg.src = projectImages[currentImageIndex];
} 
