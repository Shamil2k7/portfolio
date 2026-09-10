export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type?: "ai";
  image: string;
  github: string;
  demo: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  features?: string[];
  tech: string[];
  year?: string;
  role?: string;
  client?: string;
  duration?: string;
  status?: string;
  color?: string;
  results?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
{
  slug: "maison-kin-interior-designs",
  title: "Maison Kin — Interior Architecture",
  subtitle: "AI-Enhanced Spatial Design & Architectural Concept Studio",
  type: "ai",
  image: "/image3.png",
  github: "https://github.com/Shamil2k7/interior-designs",
  demo: "https://interior-designs-iota.vercel.app/",
  overview:
    "Maison Kin is an editorial interior architecture and spatial design studio platform that merges architectural precision with generative conceptualization. Featuring full architectural case studies, multi-phase design methodology workflows, interactive project carousels, an editorial journal on architectural philosophy, and client consultation bookings.",
  challenge:
    "Developing a luxury, high-performance interior architecture portfolio with dynamic hero slider transitions, bespoke loading animations, detailed case study routing, and responsive multi-device navigation while honoring quiet luxury aesthetics and refined typography.",
  solution:
    "Engineered with modern React, JavaScript, Vite, Tailwind CSS, and Framer Motion. Built interactive architectural project showcases, dynamic category filters (Residential, Penthouse, Commercial), a five-phase design journey methodology, and an integrated commission inquiry pipeline.",
  features: [
    "Interactive Hero Slide Showcase with Spatial Categories",
    "Comprehensive Project Case Studies with Architectural Specs",
    "Five-Phase Design Journey Methodology Walkthrough",
    "Specialized Practice & Design Services Breakdown",
    "Curated Editorial Architecture Journal with Reading Times",
    "Direct Commission Inquiry & Consultation Booking Flow",
    "Fluid Framer Motion Page & Loading Screen Transitions",
    "High-Resolution Imagery with Aspect-Ratio Optimization",
    "Responsive Mobile Navigation Drawer & Studio Aesthetics"
  ],
  tech: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide Icons",
    "Vite",
    "REST API"
  ],
  year: "2026",
  role: "Frontend / Creative Developer",
  client: "Maison Kin Studio",
  duration: "3 Weeks",
  status: "Completed",
  color: "#8B7355",
  results: [
    "Luxury editorial web experience with international architectural styling",
    "Smooth 60fps animations and fluid slider transitions",
    "Clear five-phase client consultation and onboarding funnel",
    "Seamless responsive display across desktop, tablet, and mobile"
  ]
},
  {
  slug: "akm-lms-learning-platform",

  title: "AKM LMS — Learning Platform",

  subtitle: "Modern Learning Management System for Structured, Self-Paced Courses",
  type: "ai",
  image: "/image1.png",

  github: "https://github.com/Shamil2k7/akm-lms",

  demo: "https://i-tceh-computer-center.vercel.app/",

  overview:
    "AKM LMS is a full-featured, modern learning management system engineered for structured, self-paced education. The platform enables students to explore handpicked featured courses, track lesson completion automatically, browse instructor curriculums, and interact with course materials across desktop and mobile devices. Built with dark/light mode theming, streamlined student registration, and interactive learning progress dashboards.",

  challenge:
    "Architecting an intuitive and responsive e-learning platform capable of dynamic course catalog browsing, automated student progress tracking, smooth theme switching, and seamless authentication states while maintaining high performance and accessibility.",

  solution:
    "Developed using Next.js App Router, React, TypeScript, and Tailwind CSS with TanStack Query for optimal server state management. Engineered responsive course showcase grids, an automated lesson tracker, testimonial reviews, dynamic FAQ accordions, and an integrated student contact pipeline.",

  features: [
    "Course Catalog & Categorization (Featured, Popular, Latest)",
    "Automated Lesson & Course Progress Tracking (01/12 Tracker)",
    "Student Authentication & Account Registration Flow",
    "Light & Dark Theme Toggle System",
    "Curriculum & Instructor Team Showcase",
    "Student Testimonials & Review Section",
    "Interactive FAQ Accordion",
    "Direct Student Enquiry & Contact Form",
    "TanStack Query Data Fetching & Caching",
    "Mobile-Optimized Responsive Layout"
  ],

  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "TanStack Query",
    "Lucide Icons",
    "REST API"
  ],

  year: "2026",

  role: "Full Stack Developer",

  client: "AKM Learning Systems",

  duration: "1 Month",

  status: "Completed",

  color: "#2563EB",

  results: [
    "Production-deployed LMS platform with self-paced course exploration",
    "Automatic lesson completion and progress visualization",
    "Optimized server-side rendering and client caching using TanStack Query",
    "Smooth dark/light mode responsive user interface"
  ]
},

{
  slug: "ideal-weddings",
  title: "Ideal Weddings",
  subtitle: "Cinematic Wedding Photography & Film Production Platform",
  image: "/image2.png",
  github: "https://github.com/Shamil2k7/ideal-wedding",
  demo: "https://ideal-wedding.vercel.app/",
  overview:
    "Ideal Weddings is a cinematic wedding photography and film production platform crafted for luxury destination weddings and editorial storytelling. The platform showcases destination portfolios across Kerala, Santorini, and Udaipur, interactive masonry galleries, curated wedding stories, tiered package pricing, client testimonials, and consultation booking.",
  challenge:
    "Designing a high-performance visual portfolio capable of presenting high-resolution photography and cinematic video showcases with fluid masonry layouts, dark/light editorial theming, smooth scroll animations, and fast loading speeds without compromising imagery fidelity.",
  solution:
    "Engineered using Next.js App Router, React, TypeScript, and Tailwind CSS with custom smooth animations and dark mode support via localStorage. Built an interactive categorized portfolio grid, client story showcases, transparent pricing calculators, and a consultation contact flow.",
  features: [
    "Cinematic Photography & Film Showcase",
    "Interactive Filterable Portfolio Masonry Gallery",
    "Real Wedding Stories & Narrative Storytelling",
    "Editorial Dark & Light Mode Theme Toggle",
    "Package Pricing Matrix (Essential, Premium, Luxury)",
    "Client Testimonials & Verified Star Reviews",
    "Destination Wedding & Travel Showcase",
    "Consultation Booking & Enquiry Pipeline",
    "Next.js Turbopack Performance Optimization",
    "Responsive Multi-Device Editorial Layout"
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide Icons",
    "Turbopack"
  ],
  year: "2026",
  role: "Frontend / Creative Developer",
  client: "Ideal Weddings",
  duration: "3 Weeks",
  status: "Completed",
  color: "#D4AF37",
  results: [
    "High-impact luxury visual design with editorial typography",
    "Responsive masonry portfolio with smooth category filtering",
    "Seamless dark and light mode theme persistence",
    "Fast initial page load with optimized image preloading"
  ]
},
{
  slug: "hso-product-sales-stock-erp",
  title: "HSO Product Sales & Stock ERP",
  subtitle: "Production-Ready Inventory ERP & Sales POS Management System",
  type: "ai",
  image: "/hso.png",
  github: "https://github.com/Shamil2k7/HSO-system-.git",
  demo: "https://hso-system-s5jf.vercel.app/login",
  overview:
    "HSO (Home Shop) is a comprehensive enterprise resource planning (ERP) and point-of-sale (POS) platform built for managing inventory workflows, product sales, and real-time stock pipelines. Designed with role-based administration, automated ledger tracking, POS transactions, and intuitive analytics for retail operations.",
  challenge:
    "Developing a reliable, real-time inventory management engine that seamlessly synchronizes product stock levels, processes POS transactions, supports multi-user role authentication, and delivers instant sales insights while preventing stock discrepancies and latency.",
  solution:
    "Built a production-grade full-stack ERP using Next.js Turbopack, React, TypeScript, and Tailwind CSS. Implemented phone and password authentication with demo credential autofill, an integrated POS billing system, live inventory ledger tracking, dynamic toast alerts, and responsive metrics dashboards.",
  features: [
    "Inventory ERP & Stock Level Synchronization",
    "Point of Sale (POS) & Sales Pipeline Management",
    "Secure Phone & Password Authentication Flow",
    "Demo Credentials Autofill System",
    "Real-Time Stock Alerts & Discrepancy Tracking",
    "Product Catalog CRUD & Category Sorting",
    "Sales Performance Analytics & Ledger Reports",
    "Order Management & Invoice Generation",
    "Responsive Multi-Device Admin Dashboard",
    "Modular Toast Notification System"
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "REST API",
    "Lucide Icons",
    "Turbopack"
  ],
  year: "2026",
  role: "Full Stack Developer",
  client: "Home Shop (HSO)",
  duration: "3 Months",
  status: "Completed",
  color: "#4F46E5",
  results: [
    "End-to-end POS and stock pipeline synchronization",
    "Streamlined retail operations with automated inventory tracking",
    "Fast, responsive dashboard built with Next.js Turbopack",
    "Secure role-based authentication and demo access flow"
  ]
},
{
  slug: "kfc-clone-web-app",
  title: "KFC Online Ordering Clone",
  subtitle: "Fast-Food E-Commerce & Interactive Menu Ordering Platform",
  image: "/kfc.png",
  github: "https://github.com/Shamil2k7/KFC-clone.git",
  demo: "https://shamil2k7.github.io/KFC-clone/",
  overview:
    "A responsive web application replicating the KFC digital dining and online ordering experience. The platform features dynamic menu category browsing (Epic Buckets, Box Meals, Variety Buckets, Burgers, Snacks, and Beverages), promotional deal showcases with coupon discounts, interactive shopping cart management, and user registration.",
  challenge:
    "Accurately recreating KFC's signature responsive brand interface with smooth category tab transitions, interactive item quantity calculation, dynamic deal cards, and form validation using vanilla JavaScript without external UI frameworks.",
  solution:
    "Engineered using semantic HTML5, modern CSS3 with custom animations, and modular vanilla JavaScript (ES6+). Implemented dynamic menu category routing, real-time cart state management, promotional coupon logic, and responsive layouts across mobile and desktop devices.",
  features: [
    "Interactive Menu Categorization (Buckets, Box Meals, Burgers, Veg)",
    "Promotional Deals & Special Offer Voucher Showcase",
    "Real-Time Cart Counter & Price Calculation",
    "User Registration & Account Authentication Flow",
    "Epic Bucket of the Day & Golden Edition Features",
    "Responsive Mobile-First Fast-Food UI",
    "Smooth Scroll & Section Navigation",
    "Brand-Accurate Styling & High-Res Food Asset Showcase"
  ],
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Responsive Design",
    "DOM Manipulation",
    "Git & GitHub Pages"
  ],
  year: "2025",
  role: "Frontend Developer",
  client: "Personal Project",
  duration: "3 Weeks",
  status: "Completed",
  color: "#E4002B",
  results: [
    "Faithful replication of the iconic KFC digital ordering experience",
    "Lightweight, fast-loading vanilla JavaScript architecture",
    "Seamless multi-device responsiveness and mobile touch navigation",
    "Hosted live on GitHub Pages"
  ]
},

{
  slug: "ecommerce-platform",

  title: "E-Commerce Platform",

  subtitle: "Modern Full-Stack Online Shopping Application",

  image: "/image4.png",

  github: "https://github.com/Shamil2k7/ecommerce",

  demo: "https://ecommerce-frontend-mu-beryl.vercel.app/",

  overview:
    "A modern full-stack e-commerce platform built to deliver a seamless online shopping experience. The application enables customers to browse products, search and filter items, manage shopping carts, place secure orders, and track purchases. It also includes a comprehensive admin dashboard for managing products, categories, banners, customers, orders, and website content through an intuitive interface.",

  challenge:
    "The primary challenge was developing a scalable e-commerce solution capable of handling product management, secure authentication, shopping cart functionality, order processing, image uploads, and responsive user experiences while keeping the application fast, maintainable, and easy to extend.",

  solution:
    "The platform was developed using the MERN stack with a modular architecture. React provides a responsive frontend, Express and Node.js power REST APIs, MongoDB stores application data efficiently, JWT secures authentication, and Cloudinary manages optimized product images. The admin dashboard simplifies inventory, order, and customer management while ensuring a smooth experience across all devices.",

  features: [
    "JWT Authentication & Authorization",
    "Responsive User Interface",
    "Advanced Product Search",
    "Category Filtering",
    "Shopping Cart",
    "Wishlist",
    "Product Details Page",
    "Order Management",
    "Customer Dashboard",
    "Admin Dashboard",
    "Product CRUD Operations",
    "Category Management",
    "Banner Management",
    "Coupon Management",
    "User Management",
    "Cloudinary Image Upload",
    "REST API Integration",
    "Secure Login System",
    "Mobile Friendly Design"
  ],

  tech: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Cloudinary",
    "Axios",
    "CSS",
    "REST API"
  ],

  year: "2026",

  role: "Full Stack Developer",

  client: "Personal Project",

  duration: "4 Months",

  status: "Completed",

  color: "#0F172A",

  results: [
    "Complete MERN Stack Architecture",
    "Responsive Shopping Experience",
    "Admin Dashboard with CRUD Operations",
    "Secure User Authentication",
    "Optimized Image Management using Cloudinary",
    "Scalable RESTful API Design",
    "Improved Performance and User Experience"
  ],

  gallery: [
    "/projects/ecommerce/1.png",
    "/projects/ecommerce/2.png",
    "/projects/ecommerce/3.png",
    "/projects/ecommerce/4.png",
    "/projects/ecommerce/5.png"
  ]
},
{
  slug: "zelord-travels",
  title: "Zelord Travel",
  subtitle: "Premium Bus Charter & Intercity Travel Booking Platform",
  image: "/zedlord.png",
  github: "https://github.com/Shamil2k7/zelord-travels",
  demo: "https://zelord-travels.vercel.app/",
  overview:
    "Zelord Travel (Zedlord) is a luxury bus charter and intercity travel showcase platform crafted for premium passenger transit. The website presents luxury fleet specifications (45-seater coaches, full AC, sound systems, and 4K displays), scheduled day/night routes, embedded video reels of travel experiences, an image gallery, and instant WhatsApp booking integration.",
  challenge:
    "Building an engaging travel booking showcase with embedded short-form video reels, interactive fleet specification displays, seamless responsive navigation, and direct lead generation pipelines via WhatsApp and social channels without compromising page speed.",
  solution:
    "Engineered with Next.js App Router, React, JavaScript, and modern CSS styling. Implemented responsive video reel players, animated route showcases, direct WhatsApp booking CTA triggers, and mobile-friendly navigation.",
  features: [
    "Premium Bus Charter & Route Showcase",
    "Fleet Amenities Matrix (45 Luxury Seats, Full AC, 4K Displays)",
    "Embedded Travel Moments Video Gallery & Reels",
    "Curated Travel Moments Image Showcase",
    "Direct 1-Click WhatsApp Booking Integration",
    "Scheduled Day & Night European Intercity Routes",
    "Responsive Mobile Navigation Drawer",
    "Barlow & Barlow Condensed Custom Typography",
    "Social Media & Instagram Community Integration",
    "Optimized Asset Preloading for High-Speed Browsing"
  ],
  tech: [
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "CSS Modules",
    "HTML5 Video",
    "REST API"
  ],
  year: "2026",
  role: "Frontend Developer",
  client: "Zelord Travels",
  duration: "2 Weeks",
  status: "Completed",
  color: "#D4AF37",
  results: [
    "High-conversion travel charter landing experience",
    "Instant booking connection directly via WhatsApp API",
    "Smooth multi-device media playback with embedded reels",
    "Distinctive bold travel editorial typography and visual theme"
  ]
}
];