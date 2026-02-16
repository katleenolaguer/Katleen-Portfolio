const projects = [
    {
        title: "Rumini - Promotional Website",
        description: "The Rumini Promotional Website highlights the purpose of the system, its benefits for students, and how it supports the counseling process. It provides an accessible overview of the app, showcases its features, and directs users to explore or download the application through a simple and clean interface.",
        features: [
            "App overview and feature highlights",
            "App preview sections",
            "Download the mobile application",
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        images: [
            "assets/rumini-web1.png",
            "assets/rumini-web2.png",
            "assets/rumini-web3.png"
        ],
        demoUrl: "https://katleenolaguer.github.io/Rumini-Web/"
    },
    {
        title: "Rumini - Admin/Counselors Side",
        description: "The Rumini Admin Side gives counselors and staff a secure platform for managing student information, monitoring mood submissions, organizing counseling logs, and generating reports.",
        features: [
            "Secure login",
            "Report generation",
            "Dashboard with summaries",
            "Student management",
            "Counseling logs"
        ],
        tech: ["Flutter", "Dart", "Firebase"],
        images: [
            "assets/rumini1.png",
            "assets/rumini2.png",
            "assets/rumini3.png",
            "assets/rumini4.png"
        ],
        demoUrl: "https://capstone1-a12a5.web.app/"
    },
    {
        title: "Rumini - App",
        description: "The Rumini Mobile Application is an Android-based tool designed to help students track their emotional well-being and access counseling support conveniently. The app allows students to record their moods daily, view emotion history, and receive guidance or recommendations based on their inputs. It also integrates with the admin system so that counselors can monitor trends and prepare for sessions more effectively.",
        features: [
            "Daily mood tracking",
            "Emotion logging with categories and notes",
            "Notifications and reminders",
            "Secure login and account management"
        ],
        tech: ["Flutter", "Dart", "Firebase"],
        images: [
            "assets/app-ss1.png",
            "assets/app-ss2.png",
            "assets/app-ss3.png"
        ],
        demoUrl: "https://capstone1-a12a5.web.app/"
    },
    {
        title: "Hidden Aquablitz",
        description: "The Hidden Aquablitz is a web-based resort booking platform that allows users to check availability, make reservations, and manage their bookings online. The system provides a smooth and simple reservation experience for guests. It also includes an admin side where resort staff can view requests, approve or decline bookings, update schedules, and manage customer records.",
        features: [
            "Online booking and reservation",
            "Real-time availability checking",
            "Customer account management",
            "Admin panel for handling bookings"
        ],
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        images: [
            "assets/aquablitz1.png",
            "assets/aquablitz2.png",
            "assets/aquablitz3.png",
            "assets/aquablitz4.png",
            "assets/aquablitz5.png"
        ],
        demoUrl: "#"
    },
    {
        title: "GJC Hub",
        description: "GJC Hub is a dynamic web platform that showcases the business's products and services while allowing customers to upload designs, place orders, and track their printing progress in real time. With intuitive navigation and responsive design, the website ensures a smooth and efficient experience for users browsing merchandise, managing orders, or finding store locations.",
        features: [
            "Product showcase and brand promotion",
            "Online design upload and order placement",
            "Real-time order tracking"
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        images: [
            "assets/gjc1.png",
            "assets/gjc2.png",
            "assets/gjc3.png",
            "assets/gjc4.png"
        ],
        demoUrl: "#"
    },
    {
        title: "TaraGala",
        description: "TaraGala is a web platform designed to guide travelers in exploring the Philippines, highlighting both well-known attractions and hidden gems. It provides travel tips, destination guides, user-generated stories, and practical information on accommodations and local culture.",
        features: [
            "Destination guides and travel tips",
            "Hidden and popular travel spots",
            "User-generated content and reviews"
        ],
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        images: [
            "assets/taragala1.png",
            "assets/taragala2.png"
        ],
        demoUrl: "#"
    },
    {
        title: "Computer System",
        description: "Computer System is a Figma-based prototype application designed to educate users about computer components, including hardware, software, and input/output devices. It features an interactive quiz game where users unlock levels progressively, reinforcing learning through engagement and gamification.",
        features: [
            "Detailed sections on hardware, software, and I/O devices",
            "Interactive quiz game with level progression"
        ],
        tech: ["Figma"],
        images: [
            "assets/figma1.png",
            "assets/figma2.png",
            "assets/figma3.png",
            "assets/figma4.png",
            "assets/figma5.png"
        ],
        demoUrl: "https://www.figma.com/proto/ifVMWgvDtd59J2vEtj4Ac4/Computer?node-id=14-177&starting-point-node-id=14%3A177"
    },
    {
        title: "Stay Focus",
        description: "Stay Focus is a Figma-based app prototype designed to help users concentrate on their studies by restricting access to other applications. It includes a timer and stopwatch, allowing users to set dedicated study periods and track their progress.",
        features: [
            "App restriction to minimize distractions",
            "Timer for scheduled study sessions",
            "Stopwatch to track study duration"
        ],
        tech: ["Figma"],
        images: [
            "assets/focus1.png",
            "assets/focus2.png",
            "assets/focus3.png"
        ],
        demoUrl: "https://www.figma.com/proto/ynulLNalFfRIbqiU8QyiXU/HCI---Stay-Focus?node-id=1-2&starting-point-node-id=1%3A2&t=7yT77j5nclfLhl1P-1"
    },
    {
        title: "studentinfoapp",
        description: "Figma-based prototype designed for PLV students to conveniently manage their academic and school-related information. The app allows users to track grade records, view class schedules, monitor school balances, and receive announcements and event updates.",
        features: [
            "Grade tracking and academic records",
            "Class schedules overview",
            "Event and announcement updates"
        ],
        tech: ["Figma"],
        images: [
            "assets/plv1.png",
            "assets/plv2.png",
            "assets/plv3.png"
        ],
        demoUrl: "https://www.figma.com/proto/kIPjiHLFfm2hWinOkTbuUC/IT-era?node-id=4-5&p=f&t=TkGdRpeRL2kB6Afd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A5&show-proto-sidebar=1"
    }
];

let currentProject = 0;
let currentImageIndex = 0;

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger-menu');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger-menu');
    menu.classList.remove('active');
    burger.classList.remove('active');
}

function openModal(projectIndex) {
    currentProject = projectIndex;
    currentImageIndex = 0;
    const project = projects[projectIndex];
    const modal = document.getElementById('projectModal');

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
        featuresList.appendChild(li);
    });

    const techTags = document.getElementById('techTags');
    techTags.innerHTML = '';
    project.tech.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        techTags.appendChild(span);
    });

    document.getElementById('modalImg1').src = project.images[0];
    document.getElementById('modalImg2').src = project.images[1] || '';
    document.getElementById('modalImg3').src = project.images[2] || '';
    document.getElementById('modalImg4').src = project.images[3] || '';
    document.getElementById('modalImg5').src = project.images[4] || '';

    document.querySelectorAll('.modal-image').forEach((img, index) => {
        img.classList.toggle('active', index === 0);
    });

    document.getElementById('currentImage').textContent = '1';
    document.getElementById('totalImages').textContent = project.images.length;

    const demoBtn = document.getElementById('demoBtn');

    if (project.demoUrl && project.demoUrl !== "#") {
        demoBtn.href = project.demoUrl;
        demoBtn.style.display = "inline-flex";
    } else {
        demoBtn.style.display = "none";
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    const project = projects[currentProject];
    const images = document.querySelectorAll('.modal-image');

    images[currentImageIndex].classList.remove('active');

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = project.images.length - 1;
    } else if (currentImageIndex >= project.images.length) {
        currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add('active');
    document.getElementById('currentImage').textContent = currentImageIndex + 1;
}

window.onclick = function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});


