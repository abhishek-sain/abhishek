import {
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Bug,
  Database,
  GitBranch,
  GraduationCap,
  Gauge,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

export const profile = {
  name: "Abhishek Sain",
  slug: "abhishek-sain",
  role: "Software Developer",
  tagline:
    "Building responsive web apps, MERN stack systems, AI-powered chatbots, dashboards, and practical learning experiences.",
  location: "Scheme No. 10 A, Alwar, Rajasthan, India",
  availability: "Open to projects, collaboration, training, and software development opportunities",
  linkedinUrl: "https://www.linkedin.com/in/abhishek-sain-8b5153233/",
  currentPortfolioUrl: "https://abhishek-sain.github.io/abhishek/",
  email: "abhisheksainsain91@gmail.com",
  phone: "+91 6367845520",
  whatsappUrl: "https://wa.me/916367845520",
  mapUrl: "https://maps.app.goo.gl/apFqurKXWnCHFoQUA",
  resumePath: "/resume/Abhishek-Sain-Resume.pdf",
  portrait: "/images/portfolio-hero.jpg",
  summary:
    "My experience spans hackathons, AI-powered solutions, intuitive user interface design, problem-solving, teamwork, and leadership in tech-driven environments. I am passionate about AI/ML and integrating smart solutions into modern web applications.",
  resumeSummary:
    "I am a passionate software developer, always eager to learn and build innovative solutions. With expertise in coding, problem-solving, and scalable development, I strive to create impactful projects.",
  sourceNote:
    "Content imported from the existing GitHub Pages portfolio and upgraded into the current Next.js portfolio.",
  stats: [
    { value: "2", label: "Featured projects" },
    { value: "9", label: "Service areas" },
    { value: "9", label: "Certifications showcased" },
    { value: "6", label: "Student testimonials" }
  ]
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export const focusAreas = [
  {
    title: "Front-End Development",
    description:
      "Creating responsive, fast, and interactive web interfaces using React.js, JavaScript, HTML, CSS, and Bootstrap for seamless user experiences.",
    icon: MonitorSmartphone
  },
  {
    title: "Full-Stack Development",
    description:
      "Building scalable web apps with the MERN stack, including secure databases, APIs, and authentication systems for smooth functionality.",
    icon: Layers3
  },
  {
    title: "AI & Chatbot Integration",
    description:
      "Implementing AI-powered chatbots and automation for customer support, lead generation, and business efficiency.",
    icon: Bot
  }
];

export const skills = [
  { name: "Front-End Development", level: 94, group: "Interface", icon: MonitorSmartphone },
  { name: "Full-Stack Development", level: 90, group: "MERN", icon: Layers3 },
  { name: "AI & Chatbot Integration", level: 86, group: "AI", icon: BrainCircuit },
  { name: "Performance Optimization", level: 84, group: "Quality", icon: Gauge },
  { name: "Debugging & Code Optimization", level: 88, group: "Code Quality", icon: Bug },
  { name: "Training & Mentorship", level: 90, group: "Teaching", icon: GraduationCap },
  { name: "Version Control & Collaboration", level: 86, group: "Workflow", icon: GitBranch },
  { name: "E-commerce Solutions", level: 82, group: "Product", icon: ShoppingCart },
  { name: "API Integration & Data Visualization", level: 85, group: "Data", icon: Database }
];

export const experiences = [
  {
    title: "Software Developer",
    company: "Portfolio Projects",
    period: "Current",
    description:
      "Building responsive web applications, admin systems, learning platforms, and business-focused digital products.",
    points: [
      "Develops front-end interfaces with React.js, JavaScript, HTML, CSS, and Bootstrap.",
      "Builds full-stack MERN applications with databases, APIs, authentication, and admin workflows.",
      "Improves performance, SEO, Core Web Vitals, debugging, and maintainable code structure."
    ]
  },
  {
    title: "Trainer & Mentor",
    company: "Software Development Training",
    period: "Current",
    description:
      "Providing workshops, live coding, and mentorship to help students and professionals grow in software development.",
    points: [
      "Teaches coding concepts through practical examples and hands-on exercises.",
      "Mentors students in web development, problem-solving, and project-based learning.",
      "Creates structured sessions that make complex topics easier to understand."
    ]
  },
  {
    title: "Hackathon & AI Builder",
    company: "Hackathons and Certifications",
    period: "Ongoing",
    description:
      "Exploring AI-powered solutions, chatbot integration, UI/UX, and modern development through hackathons and certifications.",
    points: [
      "Works on AI/ML-powered solutions and chatbot automation ideas.",
      "Combines interface design with practical business and learning use cases.",
      "Shows continuous learning through hackathon and professional certification work."
    ]
  }
];

export const projects = [
  {
    title: "TIPS-G Alwar Website",
    category: "Full-Stack Website",
    description:
      "Developed the official website for TIPS-G Alwar, handling both front-end and back-end development.",
    impact: "A complete school platform with admin control, student tests, exam results, contact data, and blog publishing.",
    tags: ["Frontend", "Backend", "Admin Panel", "Student Tests", "Blogs"],
    features: [
      "Admin panel to manage student data, contact details, and exam results.",
      "Students can take tests and see their results directly on the platform.",
      "Admin can post blogs, which appear directly on the website."
    ],
    liveUrl: "https://website-frontend-hllq.onrender.com/",
    accent: "from-cyan-400 to-emerald-300"
  },
  {
    title: "CodeWave | E-Learning Platform",
    category: "Education Platform",
    description: "CodeWave is an interactive platform for learning coding and web development.",
    impact: "A student-friendly learning platform with live coding, modules, projects, and responsive access.",
    tags: ["HTML", "CSS", "JavaScript", "Live Code Editor", "Learning Modules"],
    features: [
      "Live code editor to practice and see instant output.",
      "Learning modules covering HTML, CSS, JavaScript, and more.",
      "Project-based learning for building real-world projects.",
      "Responsive UI to learn anytime, anywhere."
    ],
    liveUrl: "https://abhishek-sain.github.io/CodeWave/",
    accent: "from-amber-300 to-rose-400"
  }
];

export const achievements = [
  {
    title: "Hack2skill Certificate",
    detail: "Hackathon and innovation certificate showcased in the current portfolio.",
    icon: Award
  },
  {
    title: "IIID Hackathon Certificate",
    detail: "Hackathon participation and problem-solving achievement.",
    icon: Rocket
  },
  {
    title: "HACKJKLU Certificate",
    detail: "Technology and hackathon learning milestone.",
    icon: Sparkles
  },
  {
    title: "DigitalPe Certificate",
    detail: "Professional learning and digital product exposure.",
    icon: BriefcaseBusiness
  },
  {
    title: "Generative AI Learning",
    detail: "Certificates covering generative AI and AI concepts.",
    icon: BrainCircuit
  },
  {
    title: "UI/UX Certificate",
    detail: "Great Learning UI/UX certification showcased in the original site.",
    icon: MonitorSmartphone
  }
];

export const techStack = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Responsive UI"]
  },
  {
    title: "Full Stack",
    items: ["MERN Stack", "APIs", "Authentication", "Admin Panels", "Secure Databases"]
  },
  {
    title: "AI & Data",
    items: ["AI Chatbots", "Automation", "Data Visualization", "Dynamic Dashboards", "API Integration"]
  },
  {
    title: "Delivery",
    items: ["Git", "GitHub", "CI/CD", "SEO", "Core Web Vitals", "Code Optimization"]
  }
];

export const testimonials = [
  {
    quote:
      "A truly inspiring trainer who makes learning software development enjoyable and easy to grasp. The hands-on approach really helped me improve my skills!",
    person: "Rishav",
    role: "Software Development Trainee"
  },
  {
    quote:
      "An excellent mentor who explains concepts clearly and ensures every student understands the logic behind coding. The sessions are always engaging and insightful!",
    person: "Deepanshu",
    role: "Software Development Trainee"
  },
  {
    quote:
      "The guidance and support provided throughout the training have been outstanding. The real-world examples and practical exercises made a huge difference!",
    person: "Tushar",
    role: "Software Development Trainee"
  },
  {
    quote:
      "An amazing trainer who is patient and always ready to help. The structured lessons and problem-solving techniques have significantly improved my confidence.",
    person: "Dhruv",
    role: "Software Development Trainee"
  },
  {
    quote:
      "The training sessions are well-planned, and every concept is explained in a simple yet effective manner. A great learning experience!",
    person: "Anshul",
    role: "Software Development Trainee"
  },
  {
    quote:
      "A perfect blend of knowledge, experience, and mentorship. The ability to simplify complex topics and make them interesting is truly commendable!",
    person: "Ayush",
    role: "Software Development Trainee"
  }
];

export const education = [
  {
    title: "Hackathons and AI-Powered Solutions",
    body:
      "Hands-on experience through hackathons, AI-powered solutions, intuitive UI design, and tech-driven teamwork."
  },
  {
    title: "Training and Mentorship",
    body:
      "Workshops, live coding, project-based learning, and mentorship for students and professionals learning web development."
  }
];
