
// Thème

const themeToggles = document.querySelectorAll('.theme-controller');

themeToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        document.documentElement.classList.toggle('dark');
        // Synchronise les boutons desktop et mobile (Coche et décoche des deux côté)
        themeToggles.forEach(t => t.checked = e.target.checked);
    });
});

// --- LOGIQUE DU MENU BURGER ---
const burgerBtn = document.getElementById('burger-btn');
const burgerCheckbox = document.getElementById('burger-checkbox');
const mobileMenu = document.getElementById('mobile-menu');

window.toggleMenu = function () {
    const isHidden = mobileMenu.classList.toggle('hidden');

    // Si le menu est caché, on décoche la croix (devient burger)
    // Si le menu est affiché, on coche la croix
    if (burgerCheckbox) {
        burgerCheckbox.checked = !isHidden;
    }
};

burgerBtn.addEventListener('click', toggleMenu);

// Button scroll top

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('translate-y-20', 'opacity-0');
        backToTopButton.classList.add('translate-y-0', 'opacity-100');
    } else {
        backToTopButton.classList.add('translate-y-20', 'opacity-0');
        backToTopButton.classList.remove('translate-y-0', 'opacity-100');
    }
});

// Translation

const translations = {
    fr: {
        // Navigation
        'nav-about': 'A propos',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        // Mobile
        'mobile-theme': 'Thème',
        'mobile-lang': 'Langue',

        // Hero
        'hero-desc-mobile': 'Hello, moi c\'est Ursula!<br>\
                            Je donne vie à vos idées à travers des interfaces élégantes, intuitives et utiles.<br>\
Mon objectif ? Transformer la complexité en simplicité, en créant des expériences accessibles à tous, peu importe la langue ou le contexte.',
        'hero-desc-desktop': 'Hello, moi c\'est Ursula!<br>\
                            Je donne vie à vos idées à travers des interfaces élégantes, intuitives et utiles.<br>\
Mon objectif ? Transformer la complexité en simplicité, en créant des expériences accessibles à tous, peu importe la langue ou le contexte.',
        'hero-btn-projects': 'Voir mes projets',
        'hero-btn-contact': 'Me contacter',

        // About
        'about-title': 'À propos de moi',
        'about-heading': 'Développeuse Fullstack passionnée par l\'expérience utilisateur.',
        'about-first-desc': 'Je conçois des sites et des applications comme des outils au service d\’un besoin concret. Chaque projet est pensé pour répondre à une problématique précise ou améliorer un processus existant.',
        'about-second-desc': 'L\’expérience utilisateur guide chacune de mes décisions. L\’objectif n\’est pas uniquement de créer des interfaces esthétiques, mais de rendre la technologie simple, fluide et accessible.',
        // 'about-tech-stack': 'Compétences techniques',
        'tech-stack': 'Mes Outils',
        'lang': 'Langues',
        'lang-fr': 'Français',
        'lang-fr-desc': 'Natif',
        'lang-en': 'Anglais',
        'lang-en-desc': 'C1 (Technique)',
        'lang-es': 'Espagnol',
        'lang-es-desc': 'B1 (Conversation)',
        'lang-pt': 'Portugais',

        // Projets
        'projects-title': 'Mes projets',
        'status-done': 'Terminé',
        'status-experimental': 'Expérimental',
        'status-ongoing': 'En cours',
        'coffee-desc': 'Plateforme e-commerce élégante pour une boutique de café spécialisée, avec gestion du panier.',
        'wattpad-desc': 'Réplication pixel-perfect de la landing page Wattpad pour perfectionner l\'intégration responsive.',
        'hangman-desc': 'Jeu interactif avec gestion des scores et dictionnaire de mots dynamique.',
        'kintacos-desc': 'Application de commande en ligne pour un fast-food local.',
        'see-more': 'Visiter mon repo',

        // Form
        'contact-form-title': 'Envoyez-moi un message',
        'form-name': 'Nom complet',
        'form-email': 'Email',
        'form-subject-label': 'Pourquoi me contactez-vous ?',
        'form-subject-select': 'Choisissez une option',
        'form-opt-job': 'Offre d\'emploi (CDI/CDD)',
        'form-opt-free': 'Mission Freelance',
        'form-opt-collab': 'Collaboration Projet',
        'form-opt-other': 'Autre chose',
        'form-message': 'Message',
        'form-btn-send': 'Envoyer le message',

        // Contact & Footer
        'phone': 'Téléphone',
        'email': 'Email',
        'follow-me': 'Suivez-moi',
        'copyright-rights': 'Copyright © 2026 <span class="font-medium">Ursula Ngalubenge Nandoy</span> - Tous droits réservés.'
    },
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        // Mobile
        'mobile-theme': 'Theme',
        'mobile-lang': 'Language',

        // Hero
        'hero-desc-mobile': 'Hello, I’m Ursula.<br>\
                             I bring your ideas to life through elegant, intuitive, and useful interfaces.<br>\
                            My goal? To turn complexity into simplicity by creating experiences that are accessible to everyone, regardless of language or context.',
        'hero-desc-desktop': 'Hello, I’m Ursula.<br>\
                             I bring your ideas to life through elegant, intuitive, and useful interfaces.<br>\
                            My goal? To turn complexity into simplicity by creating experiences that are accessible to everyone, regardless of language or context.',
        'hero-btn-projects': 'See my projects',
        'hero-btn-contact': 'Contact me',

        // About
        'about-title': 'About Me',
        'about-heading': 'Fullstack Developer passionate about user experience.',
        'about-first-desc': 'I design websites and applications as tools serving a concrete need. Each project is thought to solve a specific problem or improve an existing process.',
        'about-second-desc': 'User experience guides my every decision. The goal is not just to create aesthetic interfaces, but to make technology simple, fluid, and accessible.',
        // 'about-tech-stack': 'Tech Stack',
        'tech-stack': 'Tech Stack',
        'lang': 'Languages',
        'lang-fr': 'French',
        'lang-fr-desc': 'Native',
        'lang-en': 'English',
        'lang-en-desc': 'C1 (Technical)',
        'lang-es': 'Spanish',
        'lang-es-desc': 'B1 (Conversational)',
        'lang-pt': 'Portuguese',

        // Projects
        'projects-title': 'My Projects',
        'status-done': 'Completed',
        'status-experimental': 'Experimental',
        'status-ongoing': 'In Progress',
        'coffee-desc': 'Elegant e-commerce platform for a specialty coffee shop, with cart management.',
        'wattpad-desc': 'Pixel-perfect replication of the Wattpad landing page to perfect responsive integration.',
        'hangman-desc': 'Interactive game with score management and dynamic word dictionary.',
        'kintacos-desc': 'Online ordering application for a local fast-food restaurant.',
        'see-more': 'Visit my repository',

        // Form
        'contact-form-title': 'Send me a message',
        'form-name': 'Full Name',
        'form-email': 'Email',
        'form-subject-label': 'Why are you contacting me?',
        'form-subject-select': 'Choose an option',
        'form-opt-job': 'Job Offer (Full-time)',
        'form-opt-free': 'Freelance Mission',
        'form-opt-collab': 'Project Collaboration',
        'form-opt-other': 'Other',
        'form-message': 'Message',
        'form-btn-send': 'Send message',

        // Contact & Footer
        'phone': 'Phone',
        'email': 'Email',
        'follow-me': 'Follow Me',
        'copyright-rights': 'Copyright © 2026 <span class="font-medium">Ursula Ngalubenge Nandoy</span> - All rights reserved.'
    }
};

let currentLang = 'fr';

// Language toggle

const langToggles = document.querySelectorAll('.lang-controller');

langToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        document.documentElement.lang = currentLang;

        // Synchronise tous les boutons (Desktop et Mobile)
        langToggles.forEach(t => t.checked = e.target.checked);

        updateTranslations();
    });
});

function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Update nav links
    const navLinks = document.querySelectorAll('.nav-link');
    const navTexts = currentLang === 'fr' ? ['CV', 'Projets', 'Contact'] : ['CV', 'Projects', 'Contact'];
    navLinks.forEach((link, i) => {
        link.textContent = navTexts[i];
    });
}

updateTranslations();