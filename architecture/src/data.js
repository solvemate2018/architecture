import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

export const AboutUs = {
    title: 'За нас',
    subtitle: 'Най-добрата архитектурна рамка за хората',
    text: 'Вярваме, че чрез силен екипен дух, споделяне на знания и добро сътрудничество, можем да създадем и развием нова модел за българска архитектура. Ние се запознаваме с мястото, съобразяваме се с нуждите на обществото и потдържаме постоянен диалог с клиента, потребителя и нашите партньори. Ние работим отвъд поставените граници и взаимно ползваме компетенциите си, за да създадем съвместно изпълними, функционални устойчиви и естетични проекти, които създават стойност за клиента и потребителите.',
    imgUrl: '/aboutUsPic.png',
}

export const TeamData = {
    title: 'Екип',
    subtitle: 'Като новопоявили се на хоризонта на бизнеса екипа ни се състои от 2ма души но работим с много подизпълнители и аутсорсинга.',
    members: [
        {
            name: 'Арх. Кристиан Димитров',
            imgUrl: '/ProfileMale.jpg',
            description: [
            'Магистратура:',
            'НБУ 2023г',
            'Бакалавър:',
            'VIA University Collage', 
            'Орхус, Дания 2018г.'],
        },
        {
            name: 'Арх. Никол Павлова',
            imgUrl: '/ProfileFemale.jpg',
            description: ['Магистратура:',
            'НБУ 2023г',],
        }
    ]
}

export const ProjectsData = {
    title: 'Последните ни проекти',
    subtitle: 'Разгледайте нашето портфолио с проекти, които сме осъществили. Там ще намерите доказателства за нашата способност да съчетаем изкуство с практичност във всяка една сграда, която създаваме.',
    projects: [
        {
            title: 'Заснемане на сгради',
            imgUrls: ['/draftProject/pic1.jpg', '/draftProject/pic2.jpg', '/draftProject/pic3.jpg', '/draftProject/pic4.jpg'],
        },
        {
            title: 'Интериорен дизайн',
            imgUrls: ['/indoorProject/pic1.jpg', '/indoorProject/pic2.jpg', '/indoorProject/pic3.png', '/indoorProject/pic4.png', '/indoorProject/pic5.png'],
        },
        {
            title: 'Жилищни сгради',
            imgUrls: ['/outdoorProject/pic1.jpg', '/outdoorProject/pic2.jpg', '/outdoorProject/pic3.jpg', '/outdoorProject/pic4.jpg'],
        },
    ]
}

export const ServicesData = {
    title: 'С какво можем да сме ви полезни?',
    subtitle: 'Специализирали сме се в широк спектър от услуги в сферата на архитектурата и градоустройството. Като предлагаме проектиране на сгради във всички фази, голям набор от специалисти по всички инженерни специалности.',
    services: [
        {
            title: 'АНАЛИЗ И ПОДГОТОВКА',
            description: [
                'Икономическа рентабилност',
                'Разположени на обекта спрямо всички фактори',
                'Конструктивни обследвания',
                'Технологични проучвания',
                'Подготовка на докумнетация'
            ]
        },
        {
            title: 'ПРОЕКТИРАНЕ',
            description: [
                'Изготвяне на идейни разпределения', 
                'Изготвяне на 3д визуализации',
                'Съгласуване и координация с инженери по необходимите специалности',
                'Изготвяне на Технически или Работен Проект',
                'Изработка на интериорни визуализации',
                'Авторски надзор',
            ]
        },
        {
            title: '',
            description: [],
        },
    ]
}

export const Contacts = {
    title: 'Контакти',
    subtitle: 'Искате да започнете нов проект или имате въпроси? Свържете се с нас днес, и ние ще се радваме да обсъдим как можем да помогнем на вашите архитектурни и строителни изисквания.',
    text: 'Искате да започнете нов проект или имате въпроси? Свържете се с нас днес, и ние ще се радваме да обсъдим как можем да помогнем на вашите архитектурни и строителни изисквания.',
}

export const sections = [
    {
        id: 'About',
        name: 'За нас',
        imgUrl: '/navigation/aboutus.png',
    },
    {
        id: 'Team',
        name: 'Екип',
        imgUrl: '/navigation/team.jpg',
    },
    {
        id: 'Projects',
        name: 'Проекти',
        imgUrl: '/navigation/projects.png',
    },
    {
        id: 'Services',
        name: 'Услуги',
        imgUrl: '/navigation/services.jpg',
    },
    {
        id: 'Contacts',
        name: 'Контакти',
        imgUrl: '/navigation/contacts.png',
    }
]

export const socials = [
    {
        icon: BsFacebook,
        url: ''
    },
    {
        icon: BsInstagram,
        url: 'https://www.instagram.com/pd_designconcept/'
    },
    {
        icon: BsLinkedin,
        url: ''
    }
]