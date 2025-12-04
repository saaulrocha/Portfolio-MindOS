// Profile data for Saúl Rocha - MindOS Portfolio

export const profile = {
    name: "Saúl Rocha",
    title: "Web Developer",
    email: "saulrocharodriguez@gmail.com",
    phone: "+34 603 731 964",
    birthDate: "17/05/2004",
    location: "España",

    links: {
        linkedin: "https://www.linkedin.com/in/saaulrocha",
        github: "https://github.com/saaulrocha",
        portfolio: "https://saulrocha.com"
    },

    bio: `Junior developer trained at 42 Madrid and DAM, with experience in web development, IT support, and working in international environments. I lived 4 months in the Netherlands, strengthening my English, autonomy, and adaptability.`,

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
    { name: "TypeScript", level: 90, category: "language", color: "#3178c6" },
    { name: "Angular", level: 85, category: "framework", color: "#dd0031" },
    { name: "Java", level: 85, category: "language", color: "#f89820" },
    { name: "Git", level: 90, category: "tool", color: "#f05032" },
    { name: "Flutter", level: 70, category: "framework", color: "#02569b" },
    { name: "Astro", level: 75, category: "framework", color: "#ff5d01" }
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
