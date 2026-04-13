export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const personalInfo = {
  name: "Sumit Dahal",
  title: "Frontend Engineer",
  subtitle: "Geospatial & Data-Driven Application Specialist",
  email: "sumitdahal123@gmail.com",
  phone: "+977-9860108455",
  location: "Panauti-10, Kavrepalanchowk",
  tagline:
    "Specializing in building scalable geospatial systems and data-driven applications with a focus on high-performance UIs.",
  summary: `I am a detail-oriented Frontend Engineer specializing in building scalable geospatial systems and data-driven applications. My core expertise lies in React, TypeScript, and Tailwind CSS, with a proven track record of delivering high-performance UIs for complex platforms. I am highly motivated by fast-paced environments and have a strong drive to excel in backend development to become a more versatile engineer.`,
  socialLinks: {
    github: "https://github.com/sumitdahal7",
    linkedin: "https://www.linkedin.com/in/sumit-dahal-037458168/",
    email: "mailto:sumitdahal123@gmail.com",
  },
  cvUrl: "/resume.pdf", // Path to your CV file in the public folder or an external link
};

export const skills = {
  core: ["React.js", "TypeScript", "JavaScript"],
  styling: ["Tailwind CSS", "shadcn/ui", "SCSS", "Responsive Design"],
  tools: ["Vite", "TanStack Query", "Recharts", "Git"],
  gis: ["MapLibre GL", "Mapbox GL JS", "OpenLayers", "Leaflet"],
  backend: ["Node.js", "Express", "RESTful APIs", "Stripe API", "MongoDB"],
};

export const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "NAXA Pvt. Ltd.",
    location: "Omkareshwor Mandir Road, Kathmandu",
    period: "October 2023 – Present",
    description: [
      "Developed and maintained interactive geospatial web applications using React and modern frontend technologies.",
      "Collaborated with GIS specialists to integrate advanced mapping libraries including MapLibre, Openlayers, and Mapbox.",
      "Built reusable UI components ensuring high responsiveness, accessibility, and optimized performance.",
      "Worked closely with backend teams to consume complex REST APIs and deliver real-time data visualizations.",
      "Contributed to the design and development of spatial dashboards for infrastructure and planning projects.",
    ],
    technologies: ["React", "MapLibre", "Openlayers", "Mapbox", "TypeScript"],
  },
  {
    id: 2,
    title: "MERN Developer",
    company: "Graphene Incorporation",
    location: "Tripureshwor, Kathmandu",
    period: "November 2020 – July 2022",
    description: [
      "Built responsive, cross-browser websites ensuring compatibility across Edge, Chrome, and Firefox.",
      "Designed and developed REST APIs for seamless third-party integrations.",
      "Optimized frontend logic and database queries for scalable system performance.",
      "Independently managed small-scale projects while contributing to large-scale enterprise solutions.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Stozy",
    subtitle: "Community-Based Peer-to-Peer Storage Marketplace",
    description:
      "Developed a robust backend architecture for a 'sharing economy' platform connecting users with unused local storage spaces. Engineered secure payment workflows by integrating Stripe API to handle automated rental fees, host payouts, and subscription management.",
    technologies: ["Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
    highlights: [
      "Robust backend architecture",
      "Secure Stripe API payment workflows",
      "Flexible MongoDB schema",
      "Scalable RESTful APIs",
    ],
    color: "#10B981",
  },
  {
    id: 2,
    title: "Victory Project",
    subtitle: "Municipal Water & Rainfall Monitoring",
    description:
      "Designed dynamic forms and UI layouts for municipal analytics and data collection. Built real-time GIS visualization Charts and Map Component for monitoring rainfall and water levels using OpenLayers.",
    technologies: ["React", "OpenLayers", "GIS", "Real-time Data"],
    highlights: [
      "Real-time GIS visualization",
      "Rainfall & water level monitoring",
      "Dynamic data collection forms",
    ],
    color: "#3B82F6",
  },
  {
    id: 3,
    title: "National Statistics Office (NSO)",
    subtitle: "Data Entry & Reporting Portal",
    description:
      "Designed and implemented an interactive statistical dashboard and data visualization tools. Engineered modular UI components with integrated automated data validation tools ensuring data accuracy.",
    technologies: [
      "React",
      "TypeScript",
      "Recharts",
      "shadcn/ui",
      "TanStack Query",
      "Tailwind CSS",
    ],
    highlights: [
      "Interactive statistical dashboard",
      "Automated data validation",
      "Fast, modern, and accessible UI",
    ],
    color: "#8B5CF6",
  },
  {
    id: 4,
    title: "PIN & UNOPS – Nepal Police",
    subtitle: "Incident Analytics Interface",
    description:
      "Developed an incident analytics interface for visualizing crime patterns and security insights. Implemented interactive heatmaps and dynamic GIS filters for spatial analysis using MapLibre GL.",
    technologies: ["Vite", "React", "MapLibre GL", "Recharts", "shadcn/ui"],
    highlights: [
      "Crime pattern visualization",
      "Interactive heatmaps",
      "High-performance vector maps",
    ],
    color: "#EC4899",
  },
  {
    id: 5,
    title: "Geo-Hazard Module – Bipad Portal",
    subtitle: "NDRRMA Disaster Risk Management",
    description:
      "Built interactive map layers for flood, landslide, and hazard impact analysis. Integrated geospatial computations to visualize damage estimations using Mapbox GL JS.",
    technologies: ["React", "Mapbox GL JS", "SCSS", "GIS"],
    highlights: [
      "Flood & landslide analysis",
      "Hazard impact visualization",
      "Scalable and responsive frontend",
    ],
    color: "#F59E0B",
  },
];

export const education = [
  {
    degree: "B.Sc. (Hons) Computing",
    institution: "The British College, Thapathali, Kathmandu",
    period: "2017 – 2022",
    grade: "First Class Honours",
  },
  {
    degree: "+2 Science",
    institution: "Milestone International College, Lalitpur",
    period: "2013 – 2015",
    grade: "58%",
  },
  {
    degree: "SLC",
    institution: "Samudayik English Secondary Boarding School, Panauti",
    period: "2012",
    grade: "78%",
  },
];

export const certifications = ["MERN Stack Training – Broadway Infosys"];

export const languages = [
  { name: "Nepali", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Conversational" },
];
