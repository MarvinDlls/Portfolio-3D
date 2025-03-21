import { meta, shopify, starbucks, tesla, hero } from "../assets/images";
import meridien from '../assets/meridien.png';
import tache from '../assets/tache.svg';
import globe from '../assets/globe.svg';
import angular from '../assets/angular.png';
import ecole from '../assets/ecole.png';
import ia from '../assets/images/ai.png';
import message from '../assets/images/message.svg';
import php from '../assets/icons/php.svg';
import symfony from '../assets/symfony.png';
import java from '../assets/java.png';
import spring from '../assets/spring.png';
import sql from '../assets/sql.png';
import {
    contact,
    github,
    javascript,
    linkedin,
    motion,
    mui,
    react,
    redux,
    snapgram,
    summiz,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "Php",
        type: "Backend",
    },
    {
        imageUrl: symfony,
        name: "Symfony",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "Sql",
        type: "Backend",
    },
];

export const experiences = [

    {
        title: "Technicien Informatique",
        company_name: "Le Méridien Étoile",
        icon: meridien,
        iconBg: "#54B4B1",
        date: "Mai 2024 - Juin 2024",
        points: [
            "Installation de logiciels comme OPERA (PMS).",
            "Configuration du système d'exploitation.",
        ],
    },
    {
        title: "Préparateur de commande",
        company_name: "Amazon",
        icon: tesla,
        iconBg: "#F4EACC",
        date: "Sept 2023 - Dec 2023",
        points: [
            "Réception de marchandises.",
            "Mise en cartons de produits.",
            "Étiquetage des colis.",
        ],
    },
    {
        title: "Employé Polyvalent",
        company_name: "Paul Boulangerie",
        icon: starbucks,
        iconBg: "#000000",
        date: "Juil 2023 - Août 2023",
        points: [
            "Encaissement.",
            "Préparation de boissons chaudes.",
            "Décongélation des produits.",
            "Mise en rayon des produits.",
        ],
    },
    {
        title: "Employé Polyvalent",
        company_name: "KFC",
        icon: meta,
        iconBg: "#FFEDF1",
        date: "Sept 2021 - Sept 2022",
        points: [
            "Encaissement.",
            "Préparation des commandes pour les clients.",
            "Nettoyage de la salle et de la cuisine.",
            "Gestion de la qualité des produits.",
        ],
    },
    {
        title: "Jardinier",
        company_name: "Espaces Verts du Val-de-Marne",
        icon: shopify,
        iconBg: "#CCF6FF",
        date: "Juil 2021 - Août 2021",
        points: [
            "Désherbage.",
            "Tontes de pelouse.",
            "Nettoyage des matériaux.",
            "Conduite d'un camion pour paysagiste.",
        ],
    },
    {
        title: "Magasinier",
        company_name: "Bibliothèque Nationale de France - Tolbiac",
        icon: hero,
        iconBg: "#303030",
        date: "Juil 2019 - Août 2019",
        points: [
            "Attribution des places aux lecteurs.",
            "Gestion des documents historiques.",
            "Gestion de la réserve.",
            "Testeur assurance qualité sur les jeux-vidéos.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/MarvinDlls',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/marvin-dillenseger',
    }
];

export const projects = [
    {
        iconUrl: message,
        theme: 'btn-back-green',
        name: 'Application de messagerie',
        description: 'Création d’une application de messagerie pour ajouter des amis et discuter avec. Développée avec Angular, PostgreSQL et TypeScript',
        link: 'https://chat-app-kappa-six-47.vercel.app/',
    },
    {
        iconUrl: ecole,
        theme: 'btn-back-pink',
        name: 'Site de recette de cuisine',
        description: 'Création d’un site de recette de cuisine du style de Marmiton avec React, NodeJS et Express',
        link: 'https://projet-ecf-marvin.vercel.app/',
    },
    {
        iconUrl: ia,
        theme: 'btn-back-yellow',
        name: "Application de Machine Learning",
        description: "Application web capable de détecter et reconnaître des objets ou des humains dans des images avec React et Tensorflow", 
        link: 'https://ia-reconnaissance-image.vercel.app/'
    },
    {
        iconUrl: globe,
        theme: 'btn-back-orange',
        name: 'Landing Page 3D',
        description: 'Création d’une landing page en 3D avec React et ThreeJS',
        link: 'https://landing-page-3-d-seven.vercel.app/',
    },
    {
        iconUrl: redux,
        theme: 'btn-back-black',
        name: 'To-do list App',
        description: 'Création d’une liste de tâches avec Html, Css et JavaScript',
        link: 'https://marvindlls.github.io/to-do-list-v2',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'Application météo',
        description: ' Développement avec Html, Css, JavaScript et l’API de Weather APP ',
        link: 'https://marvindlls.github.io/app-meteo',
    },
    {
        iconUrl: mui,
        theme: 'btn-back-blue',
        name: 'Site de réservation de chambres d’hôtel.',
        description: 'Conception avec Html, Css, JavaScript ainsi que du PHP, MySQL, Bootstrap5.0 et SwiperJS ',
        link: 'https://concept-hotel.000webhostapp.com',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'Site de restauration gastronomique ',
        description: 'Conception du site avec Html, Css et JavaScript',
        link: 'https://marvindlls.github.io/restau-concept/',
    },
    {
        iconUrl: tache,
        theme: 'btn-back-red',
        name: 'Todo App v2',
        description: "Développement d'une todo app avec Next.js, TypeScript et React.js",
        link: 'https://todo-next-two-delta.vercel.app/',
    },
    { 
        iconUrl: motion,
        theme: 'btn-back-yellow',
        name: 'Mon Portfolio',
        description: 'Création de mon tout premier projet, mon Portfolio avec Html, Css et JavaScript.',
        link: 'https://marvindlls.github.io/mon-portfolio/',
    }
];