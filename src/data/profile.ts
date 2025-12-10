// Profile data for Saúl Rocha - MindOS Portfolio

export const profile = {
    name: "Saúl Rocha",
    title: "Product-Focused Developer",
    email: "saulrocharodriguez@gmail.com",
    phone: "+34 603 731 964",
    birthDate: "17/05/2004",
    location: "España",

    links: {
        linkedin: "https://www.linkedin.com/in/saaulrocha",
        github: "https://github.com/saaulrocha",
        portfolio: "https://saulrocha.com"
    },

    bio: `I build digital systems that feel like tools, not websites. My focus is turning business needs into structured and scalable software. I love designing products that feel alive, interactive, and technically solid.`,

    kernelVersion: "1.0.0",
    systemName: "MindOS",
};

export const experience = [
    {
        id: "rauros-2025",
        company: "GRUPO RAUROS",
        role: "Web Developer",
        period: "2025",
        status: "completed",
        description: "Building corporate web applications with Angular ecosystem",
        tasks: [
            "Developing web interfaces with Angular and TypeScript",
            "Implementing components with DevExtreme UI library",
            "API integration and backend collaboration"
        ],
        tech: ["Angular", "TypeScript", "DevExtreme", "REST APIs"]
    },
    {
        id: "teldat-2022",
        company: "TELDAT",
        role: "IT Support Technician",
        period: "2022",
        status: "completed",
        description: "Technical support and infrastructure maintenance",
        tasks: [
            "User support and hardware/software troubleshooting",
            "Network device configuration and maintenance"
        ],
        tech: ["Windows", "Networking", "Hardware"]
    }
];

export const education = [
    {
        id: "42-madrid",
        institution: "42 Madrid",
        subtitle: "Fundación Telefónica",
        program: "Software Development",
        focus: "C Programming · Peer-to-peer learning",
        period: "Jan 2023 – Jun 2024",
        type: "bootcamp"
    },
    {
        id: "dam",
        institution: "IES José Luis Sampedro",
        subtitle: "Higher Degree",
        program: "Cross-Platform App Development (DAM)",
        focus: "Java · Mobile · Databases",
        period: "Sep 2023 – Jun 2025",
        type: "degree"
    },
    {
        id: "smr",
        institution: "IES José Luis Sampedro",
        subtitle: "Medium Degree",
        program: "Microcomputer Systems & Networks (SMR)",
        focus: "Networking · Systems Administration",
        period: "Sep 2020 – Jun 2022",
        type: "degree"
    }
];

export const technologies = [
    {
        name: "TypeScript",
        level: 90,
        category: "language",
        color: "#3178c6",
        icon: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM11.523 10.5h5.82v2.632h-1.906v8.24h-2.515v-8.24H11.02v-2.632zm6.662 2.632h2.008v8.24h-2.008v-8.24z"
    },
    {
        name: "Angular",
        level: 85,
        category: "framework",
        color: "#dd0031",
        icon: "M12.56 20.58l-1.56.84-1.56-.84-4.86-11.8h12.84l-4.86 11.8zM11 2.5h2l3.4 8.2h-8.8L11 2.5zM4.7 6.5L1.5 14.5l9.5 5.3 9.5-5.3-3.2-8H4.7z"
    },
    {
        name: "Java",
        level: 85,
        category: "language",
        color: "#f89820",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
    },
    {
        name: "Git",
        level: 90,
        category: "tool",
        color: "#f05032",
        icon: "M2.6 10.59L8.38 4.8l1.69 -1.7c0.24 -0.24 0.24 -0.6 0 -0.85l-0.85 -0.85c-0.24 -0.24 -0.6 -0.24 -0.85 0l-1.7 1.69l-5.8 5.8c-0.24 0.24 -0.24 0.6 0 0.85l5.8 5.8v0c0.24 0.24 0.6 0.24 0.85 0l0.85 -0.85c0.24 -0.24 0.24 -0.6 0 -0.85l-1.69 -1.7l-4.09 -4.1zM15.42 13.41l-5.8 5.8l-1.69 1.7c-0.24 0.24 -0.24 0.6 0 0.85l0.85 0.85c0.24 0.24 0.6 0.24 0.85 0l1.7 -1.69l5.8 -5.8c0.24 -0.24 0.24 -0.6 0 -0.85l-5.8 -5.8v0c-0.24 -0.24 -0.6 -0.24 -0.85 0l-0.85 0.85c-0.24 0.24 -0.24 0.6 0 0.85l1.69 1.7l4.1 4.09z"
    },
    {
        name: "Flutter",
        level: 70,
        category: "framework",
        color: "#02569b",
        icon: "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"
    },
    {
        name: "Astro",
        level: 75,
        category: "framework",
        color: "#ff5d01",
        icon: ""
    },
    {
        name: "C",
        level: 85,
        category: "language",
        color: "#a8b9cc",
        icon: ""
    },
    {
        name: "SQL",
        level: 80,
        category: "language",
        color: "#336791",
        icon: ""
    },
    {
        name: "React",
        level: 75,
        category: "framework",
        color: "#61dafb",
        icon: ""
    },
    {
        name: "Node.js",
        level: 70,
        category: "framework",
        color: "#339933",
        icon: ""
    },
    {
        name: "Docker",
        level: 65,
        category: "tool",
        color: "#2496ed",
        icon: ""
    },
    {
        name: "Linux",
        level: 80,
        category: "tool",
        color: "#fcc624",
        icon: ""
    },
    {
        name: "Tailwind CSS",
        level: 90,
        category: "framework",
        color: "#06b6d4",
        icon: ""
    },
    {
        name: "PostgreSQL",
        level: 75,
        category: "tool",
        color: "#4169e1",
        icon: ""
    },
    {
        name: "REST APIs",
        level: 85,
        category: "tool",
        color: "#ff6b6b",
        icon: ""
    },
    {
        name: "Kotlin",
        level: 70,
        category: "language",
        color: "#7f52ff",
        icon: ""
    }
];

export const languages = [
    { name: "Spanish", level: "Native", code: "ES" },
    { name: "English", level: "Professional", code: "EN" }
];

export const projects = [
    {
        id: "impulsoweb",
        name: "Impulso Web",
        description: "Professional web design agency landing page with modern aesthetics and responsive design.",
        image: "/project-impulsoweb.png",
        tech: ["HTML", "CSS", "JavaScript"],
        status: "completed",
        featured: true,
        link: "https://impulsoweb.netlify.app/"
    },
    {
        id: "crypto-panel",
        name: "Crypto Dashboard",
        description: "Real-time cryptocurrency price tracking panel with market cap and 24h changes.",
        image: "/project-crypto-panel.png",
        tech: ["TypeScript", "Angular", "REST API"],
        status: "completed",
        featured: true,
        link: "https://v0-crypto-dashboard-snowy-alpha.vercel.app/"
    }
];
