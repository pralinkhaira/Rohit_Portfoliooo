/** Components for Portfolio*/

// Get the Navbar HTML
function getNavbar() {
    return `
    <header class="navbar-header">
        <nav class="navbar-nav">
            <a href="index.html" class="navbar-logo">
                <img src="images/logos/rj-logo.png" alt="Rohit Jangir" class="navbar-logo-img">
            </a>

            <ul class="navbar-links">
                <li><a href="about.html">About</a></li>
                <li><a href="ventures.html">Ventures</a></li>
                <li><a href="pitch.html">Pitch</a></li>
                <li class="navbar-dropdown">
                    <a href="javascript:void(0)">Services</a>
                    <ul class="navbar-dropdown-menu">
                        <!-- <li><a href="resource.html">Resources</a></li> -->
                        <li><a href="mentorship.html">Mentorship</a></li>
                        <!-- <li><a href="media.html">Media</a></li> -->
                    </ul>
                </li>
            </ul>

            <button type="button" onclick="openModal()" class="navbar-btn">Connect</button>

            <!-- Mobile Hamburger Menu Button -->
            <button type="button" class="navbar-hamburger" aria-label="Toggle mobile navigation" onclick="toggleMobileNav()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>

    <!-- Mobile Navigation Overlay -->
    <div class="navbar-overlay" onclick="closeMobileNav()"></div>

    <!-- Mobile Navigation Menu -->
    <nav class="navbar-mobile">
        <ul class="navbar-mobile-links">
            <li><a href="about.html">About</a></li>
            <li><a href="ventures.html">Ventures</a></li>
            <li><a href="pitch.html">Pitch</a></li>
            <li class="navbar-mobile-dropdown">
                <button class="navbar-mobile-toggle" onclick="toggleMobileDropdown(this)">Services ▾</button>
                <div class="navbar-mobile-menu">
                    <a href="mentorship.html">Mentorship</a>
                </div>
            </li>
            <li>
                <a href="javascript:void(0)" onclick="openModal(); closeMobileNav();">Connect</a>
            </li>
        </ul>
    </nav>
    `;
}

// Get the Sub-Brand Navbar HTML (simplified - logo + back button only)
function getSubBrandNavbar(logoSrc, logoAlt) {
    return `
    <header class="navbar-header navbar-subbrand">
        <nav class="navbar-nav">
            <a href="index.html" class="navbar-logo navbar-subbrand-logo">
                <img src="${logoSrc}" alt="${logoAlt}" class="navbar-subbrand-logo-img">
            </a>
            <a href="ventures.html" class="navbar-subbrand-back">← Back</a>
        </nav>
    </header>
    `;
}
// BRAND-SPECIFIC NAVBARS

// JFAM Navbar 
function getJFAMNavbar() {
    return `
    <header class="navbar-header navbar-jfam navbar-subbrand-simple">
        <nav class="navbar-nav">
            <a href="index.html" class="navbar-logo navbar-jfam-logo">
                <img src="images/ventures/jfam.png" alt="JFAM" class="navbar-subbrand-logo-img navbar-jfam-logo-img">
            </a>
            <a href="ventures.html" class="navbar-subbrand-back navbar-jfam-back">← Back</a>
        </nav>
    </header>
    `;
}

// AARU Care Navbar 
function getAARUCareNavbar() {
    return `
    <header class="navbar-header navbar-aarucare navbar-subbrand-simple">
        <nav class="navbar-nav">
            <a href="index.html" class="navbar-logo navbar-aarucare-logo">
                <img src="images/ventures/aaru-care.png" alt="AARU CARE" class="navbar-subbrand-logo-img navbar-aarucare-logo-img">
            </a>
            <a href="ventures.html" class="navbar-subbrand-back navbar-aarucare-back">← Back</a>
        </nav>
    </header>
    `;
}

// AARU Developers Navbar
function getAARUDevelopersNavbar() {
    return `
    <header class="navbar-header navbar-aarudev navbar-subbrand-simple">
        <nav class="navbar-nav">
            <a href="index.html" class="navbar-logo navbar-aarudev-logo">
                <img src="images/ventures/aaru.png" alt="AARU Developers" class="navbar-subbrand-logo-img navbar-aarudev-logo-img">
            </a>
            <a href="ventures.html" class="navbar-subbrand-back navbar-aarudev-back">← Back</a>
        </nav>
    </header>
    `;
}

// AARU Mobility Navbar
function getAARUMobilityNavbar() {
    return `
    <header class="navbar-header navbar-aaru navbar-subbrand-simple">
        <nav class="navbar-nav">
            <a href="index.html" class="navbar-logo navbar-aaru-logo">
                <img src="images/ventures/aaru-mobility.png" alt="AARU Mobility" class="navbar-subbrand-logo-img navbar-aaru-logo-img">
            </a>
            <a href="ventures.html" class="navbar-subbrand-back navbar-aaru-back">← Back</a>
        </nav>
    </header>
    `;
}

// Aronix Navbar
function getAronixNavbar() {
    return `
    <header class="navbar-header navbar-aronix navbar-subbrand-simple">
        <nav class="navbar-nav">
            <a href="index.html" class="navbar-logo navbar-aronix-logo">
                <img src="images/aronix/Aronix.svg" alt="ARONIX" class="navbar-subbrand-logo-img navbar-aronix-logo-img">
            </a>
            <a href="ventures.html" class="navbar-subbrand-back navbar-aronix-back">← Back</a>
        </nav>
    </header>
    `;
}

// Get the Footer HTML
function getFooter() {
    return `
    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <h4>Rohit Jangir</h4>
                <p>Building Businesses,<br>Empowering Entrepreneurs.</p>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <p>
                    <a href="about.html">About</a>
                    <a href="ventures.html">Ventures</a>
                    <a href="pitch.html">Pitch</a>
                </p>
            </div>
            <div class="footer-col">
                <h4>Opportunities</h4>
                <p>
                    <a href="pitch.html">Pitch Your Ideas</a>
                    <a href="https://calendly.com/" target="_blank">Book Consultation</a>
                   <!-- <a href="mailto:connect@rohitjangir.in">Collaborate</a>-->
                </p>
            </div>
            <div class="footer-col">
                <h4>Connect</h4>
                <p>connect@rohitjangir.com</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/people/Rohit-Jangir/100047800952815/?rdid=6P9KHfQlHbcJ87iF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F185iFf6CRa%2F%3Fref%3D1" target="_blank"><img src="images/logos/Facebook.png" alt="Facebook"></a>
                    <a href="https://x.com/RohitJa50047844" target="_blank"><img src="images/logos/Twitter.png" alt="Twitter"></a>
                    <a href="https://www.instagram.com/offical_rohitjangir?igsh=Z3JnZm9lc3RlcjE2" target="_blank"><img src="images/logos/Instagram.png" alt="Instagram"></a>
                    <a href="https://www.linkedin.com/in/rohit-kumar-733707129/" target="_blank"><img src="images/logos/LinkedIn.png" alt="LinkedIn"></a>
                </div>
        </div>
    </footer>
    `;
}

// Get the CTA Section HTML
function getCTA() {
    return `
    <section class="cta-section">
        <h2>Ready to Transform Your Vision?</h2>
        <p>
            Whether you're looking for investment, mentorship, or collaboration,
            let's explore how we can create something extraordinary together.
        </p>

        <div class="cta-buttons">
            <a href="pitch.html" class="btn-primary">Pitch Your Idea</a>
            <a href="https://calendly.com/" target="_blank" class="btn-outline">Book Mentorship</a>
        </div>
    </section>
    `;
}

// Get the Sub-Brand Footer HTML (flexible component)
function getSubBrandFooter(options) {
    const {
        logoSrc = "images/ventures/jfam.png",
        logoAlt = "Brand",
        description = "Description of the brand.",
        bgColor = "#0B1C3F", // Default background color - customizable per brand
        quickLinks = [
            { name: "About Us", href: "#" },
            { name: "Our Services", href: "#" },
            { name: "Contact", href: "#" }
        ],
        services = null,
        contactEmail = "info@example.com",
        contactAddress = "Location",
        phone = null,
        socialLinks = [
            { name: "Facebook", href: "#", icon: "images/logos/Facebook.png" },
            { name: "Twitter", href: "#", icon: "images/logos/Twitter.png" },
            { name: "Instagram", href: "#", icon: "images/logos/Instagram.png" },
            { name: "LinkedIn", href: "#", icon: "images/logos/LinkedIn.png" }
        ]
    } = options;

    // Build quick links HTML
    const quickLinksHtml = quickLinks.map(link =>
        `<a href="${link.href}">${link.name}</a>`
    ).join('');

    // Build services HTML (if provided)
    const servicesHtml = services ? `
        <div class="footer-col">
            <h4>Our Services</h4>
            <p>
                ${services.map(service =>
        `<a href="${service.href}">${service.name}</a>`
    ).join('')}
            </p>
        </div>
    ` : '';

    // Build social links HTML
    const socialLinksHtml = socialLinks.map(social =>
        `<a href="${social.href}" target="_blank"><img src="${social.icon}" alt="${social.name}"></a>`
    ).join('');

    // Build phone HTML (if provided)
    const phoneHtml = phone ? `<p>${phone}</p>` : '';

    // Determine if background is light or dark
    const isLightBg = (color) => {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 155;
    };

    const themeClass = isLightBg(bgColor) ? 'light-theme' : 'dark-theme';

    return `
    <footer style="background: ${bgColor};" class="${themeClass}">
        <div class="footer-grid">
            <div class="footer-col footer-brand-col">
                <a href="index.html" class="footer-logo">
                    <img src="${logoSrc}" alt="${logoAlt}">
                </a>
                <p>${description}</p>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <p>
                    ${quickLinksHtml}
                </p>
            </div>
            ${servicesHtml}
            <div class="footer-col">
                <h4>Contact Us</h4>
                <p>${contactEmail}</p>
                ${phoneHtml}
                <p>${contactAddress}</p>
                <div class="social-links">
                    ${socialLinksHtml}
                </div>
            </div>
        </div>
    </footer>
    `;
}

// Pre-configured footer for JFAM
function getJFAMFooter() {
    return getSubBrandFooter({
        logoSrc: "images/ventures/jfam.png",
        logoAlt: "JFAM",
        description: "JFAM is an interior design and architecture company specializing in innovative, functional spaces with quality craftsmanship and client-focused solutions.",
        bgColor: "#9A765C", // Warm brown for JFAM
        quickLinks: [
            { name: "About", href: "#" },
            { name: "Projects", href: "#" },
            { name: "Testimonials", href: "#" }
        ],
        services: [
            { name: "Architecture", href: "#" },
            { name: "Interior Design", href: "#" },
            { name: "Construction", href: "#" }
        ],
        contactEmail: "info@jfamco.in",
        contactAddress: "New Delhi, India",
        socialLinks: [
            { name: "Facebook", href: "#", icon: "images/logos/Facebook.png" },
            { name: "Twitter", href: "#", icon: "images/logos/Twitter.png" },
            { name: "Instagram", href: "#", icon: "images/logos/Instagram.png" },
            { name: "LinkedIn", href: "#", icon: "images/logos/LinkedIn.png" }
        ]
    });
}

// Pre-configured footer for AARU Care
function getAARUCareFooter() {
    return getSubBrandFooter({
        logoSrc: "images/ventures/aaru-care.png",
        logoAlt: "AARU CARE",
        description: "Dedicated to transforming lives through education, empowerment, and compassionate care.",
        bgColor: "#D5D5D5", // Light gray for AARU Care
        quickLinks: [
            { name: "About Us", href: "#" },
            { name: "Our Programs", href: "#" },
            { name: "Impact", href: "#" },
            { name: "Get Involved", href: "#" }
        ],
        services: [
            { name: "Child Education", href: "#" },
            { name: "Women Empowerment", href: "#" },
            { name: "Kid Orphanage", href: "#" }
        ],
        contactEmail: "info@aarucare.org",
        contactAddress: "Dwarka 23",
        socialLinks: [
            { name: "Facebook", href: "#", icon: "images/logos/Facebook.png" },
            { name: "Twitter", href: "#", icon: "images/logos/Twitter.png" },
            { name: "Instagram", href: "#", icon: "images/logos/Instagram.png" },
            { name: "LinkedIn", href: "#", icon: "images/logos/LinkedIn.png" }
        ]
    });
}

// Pre-configured footer for AARU Developers
function getAARUDevelopersFooter() {
    return getSubBrandFooter({
        logoSrc: "images/aaru-developers/aaru.png",
        logoAlt: "AARU Developers",
        description: "AARU Developers is a real estate and infrastructure company focused on quality construction and sustainable development.",
        bgColor: "#111111", // Dark black for AARU Developers
        quickLinks: [
            { name: "About Us", href: "#" },
            { name: "Our Programs", href: "#" },
            { name: "Sponsors", href: "#" },
            { name: "Our Testimonial", href: "#" }
        ],
        contactEmail: "info@aarudevelopers.com",
        contactAddress: "Dwarka, Delhi",
        socialLinks: [
            { name: "Facebook", href: "#", icon: "images/logos/Facebook.png" },
            { name: "Twitter", href: "#", icon: "images/logos/Twitter.png" },
            { name: "Instagram", href: "#", icon: "images/logos/Instagram.png" },
            { name: "LinkedIn", href: "#", icon: "images/logos/LinkedIn.png" }
        ]
    });
}

// Pre-configured footer for AARU Mobility
function getAARUMobilityFooter() {
    return getSubBrandFooter({
        logoSrc: "images/ventures/aaru-mobility.png",
        logoAlt: "AARU Mobility",
        description: "Reliable & sustainable transportation solutions.",
        bgColor: "#F5F5F5", // Light gray for AARU Mobility
        quickLinks: [
            { name: "About Us", href: "#" },
            { name: "How it works", href: "#" },
            { name: "Browse Fleet", href: "#" }
        ],
        contactEmail: "info@aaruobility.com",
        phone: "+91 98765 43210",
        socialLinks: [
            { name: "Facebook", href: "#", icon: "images/logos/Facebook.png" },
            { name: "Twitter", href: "#", icon: "images/logos/Twitter.png" },
            { name: "Instagram", href: "#", icon: "images/logos/Instagram.png" },
            { name: "LinkedIn", href: "#", icon: "images/logos/LinkedIn.png" }
        ]
    });
}

// Pre-configured footer for ARONIX
function getAronixFooter() {
    return getSubBrandFooter({
        logoSrc: "images/aronix/Aronix.svg",
        logoAlt: "ARONIX",
        description: "Aronix Technologies is a technology-driven company providing innovative digital solutions.",
        bgColor: "#111111", // Dark black for ARONIX (tech)
        quickLinks: [
            { name: "About Us", href: "#" },
            { name: "Our Programs", href: "#" },
            { name: "Sponsors", href: "#" }
        ],
        contactEmail: "info@aarudevelopers.com",
        contactAddress: "Dwarka, Delhi",
        socialLinks: [
            { name: "Facebook", href: "#", icon: "images/logos/Facebook.png" },
            { name: "Twitter", href: "#", icon: "images/logos/Twitter.png" },
            { name: "Instagram", href: "#", icon: "images/logos/Instagram.png" },
            { name: "LinkedIn", href: "#", icon: "images/logos/LinkedIn.png" }
        ]
    });
}


// Get the Connect Modal HTML
function getModal() {
    return `
    <div class="modal-overlay" id="connectModal">
        <div class="connect-card">
            <span class="close-btn" onclick="closeModal()">×</span>
            <h2>Connect with us</h2>
            <p class="subtitle">Stay up to date with all the latest from us.</p>
            <form class="connect-form" id="connect-form">
                <label>Name*</label>
                <input type="text" id="connect-name" name="name" required>
                <label>Email*</label>
                <input type="email" id="connect-email" name="email" required>
                <label>Purpose*</label>
                <input type="text" id="connect-purpose" name="purpose" required>
                <label>Message*</label>
                <textarea id="connect-message" name="message" rows="3" required></textarea>
                <button type="submit">SEND MESSAGE</button>
                <div class="form-message" id="connect-form-message" style="margin-top: 10px;"></div>
            </form>
        </div>
    `;
}
