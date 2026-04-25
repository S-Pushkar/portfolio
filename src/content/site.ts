export const site = {
  name: "Pushkar S",
  tagline:
    "Building reliable systems, from distributed backends to ML-powered experiences.",
  description:
    "Portfolio of Pushkar S — B.Tech CSE at PES University, internships at SAP Labs and C-ISFCR, full-stack and systems projects.",
  resumePath: "/resume.pdf" as const,
  contact: {
    phone: "+91 7338320079",
    phoneHref: "tel:+917338320079",
    email: "spushkar0071234@gmail.com",
    emailHref: "mailto:spushkar0071234@gmail.com",
  },
  profiles: {
    github: {
      label: "S-Pushkar",
      href: "https://github.com/S-Pushkar"
    },
    leetcode: {
      label: "LeetCode",
      href: "https://leetcode.com/u/PushkarS007/",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pushkar-s-861742273/",
    },
  },
  education: [
    {
      school: "PES University",
      degree: "B Tech in Computer Science and Engineering (2022–2026)",
      details: [
        { label: "CGPA", value: "9.91" },
        {
          label: "Award",
          value: "Prof. MRD Merit Scholarship for academic excellence",
        },
      ],
    },
    {
      school: "RV PU College",
      degree: "PUC (2020–2022)",
      details: [{ label: "Percentage", value: "95.833%" }],
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      items: [
        "Java",
        "Python",
        "C/C++",
        "Go",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Bash",
      ],
    },
    {
      title: "Frameworks",
      items: [
        "React JS",
        "Node JS",
        "Express JS",
        "Fast API",
        "Spring Boot",
        "Next JS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Technologies",
      items: ["Docker", "Kubernetes", "SQL", "NOSQL", "REST", "RAG", "Linux"],
    },
    {
      title: "Big Data",
      items: ["Hadoop", "Kafka", "Spark", "Mongo DB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & DevOps",
      items: ["Grafana", "Prometheus", "Git", "GitHub", "Postman", "Vim", "VS Code", "IntelliJ"],
    },
    {
      title: "Machine Learning",
      items: ["Scikit-learn", "Pandas", "Matplotlib", "Lang Chain"],
    },
  ],
  experience: [
    {
      company: "Thuriyam.ai",
      role: "Full Stack Developer Intern",
      period: "September 2025 – December 2025",
      location: "Bengaluru",
      highlights: [
        "Architected and implemented the end-to-end First-Time User (FTU) onboarding and authentication workflow.",
        "Engineered a robust Role-Based Access Control (RBAC) system to manage granular permissions across diverse user roles, significantly enhancing application security and data isolation.",
        "Developed a responsive frontend architecture using React.js and Material UI (MUI), ensuring design consistency and optimal performance across all device categories.",
      ],
    },
    {
      company: "SAP Labs India",
      role: "SAP iXp Intern",
      period: "June 2025 – July 2025",
      location: "Bengaluru",
      highlights: [
        "Engineered a real-time holographic assistant using Retrieval-Augmented Generation (RAG) for voice-activated QA, increasing engagement by 65%.",
        "Reduced response latency by 30% through LangChain integration with custom inference APIs.",
      ],
    },
    {
      company:
        "Center for Information Security, Forensics and Cyber Resilience",
      role: "Research Intern",
      period: "June 2024 – July 2024",
      location: "Bengaluru",
      highlights: [
        "Detected Docker Container Escape Attacks by analyzing system calls with 95.10% accuracy.",
        "Developed an automated script for extracting and analyzing container logs and system calls to improve forensic efficiency.",
      ],
    },
    {
      company: "CSE Department, PESU",
      role: "Teaching Assistant for C Programming",
      period: "January 2024 – May 2024",
      location: "Bengaluru",
      highlights: [
        "Facilitated learning for 100+ students by preparing 15+ lab assignments and quizzes.",
      ],
    },
  ],
  projects: [
    {
      href: "https://github.com/S-Pushkar/TagMyPic",
      name: "TagMyPic",
      stack:
        "Spring Boot, Fast API, Kafka",
      bullets: [
        "Designed and deployed a distributed image search system utilizing OCR and sentiment analysis.",
        "Enabled real-time querying over 1000+ uploaded images.",
      ],
    },
    {
      href: "https://github.com/S-Pushkar/Chaos_Testing_Framework",
      name: "Chaos Testing Framework",
      stack: "Spring Boot, Docker, Mongo DB",
      bullets: [
        "Engineered a framework to inject 4 types of faults to validate microservice resilience.",
        "Implemented live monitoring of metrics through Prometheus and Grafana.",
      ],
    },
    {
      href: "https://github.com/S-Pushkar/Serverless_Function_Execution_Platform-AWSLambda",
      name: "Serverless Function Executor",
      stack: "Fast API, Next JS, Docker",
      bullets: [
        "Implemented a Fast API server to execute serverless functions in Docker containers.",
        "Supports Python and JavaScript functions.",
      ],
    },
    {
      href: "https://github.com/S-Pushkar/location-based-attendance-system",
      name: "Location Based Attendance System",
      stack: "Go, MySQL, Next JS",
      bullets: [
        "Integrated geofencing and browser APIs for precise location-based attendance.",
        "Achieved location capture within 20 meters and reduced proxy check-ins by 90%.",
      ],
    },
  ],
  nav: [
    { label: "Home", href: "#top" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;
