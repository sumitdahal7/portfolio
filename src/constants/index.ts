export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const personalInfo = {
  name: "Sumit Dahal",
  title: "Frontend Developer",
  subtitle: "Geospatial & GIS Specialist",
  email: "sumitdahal123@gmail.com",
  phone: "+977-9860108455",
  location: "Kathmandu, Nepal",
  tagline:
    "Building scalable, user-friendly web and mobile applications with a passion for geospatial systems and data-driven UI development.",
  summary: `Motivated and detail-oriented Frontend Developer with over 3 years of experience specializing in building scalable, user-friendly web and mobile applications. Proven ability to deliver high-performance geospatial systems across Aid Management, Infrastructure Planning, and Disaster Risk Management platforms. Skilled in modern JavaScript frameworks (React, React Native), mapping libraries and data-driven UI development.`,
  socialLinks: {
    github: "https://github.com/sumitdahal",
    linkedin: "https://linkedin.com/in/sumitdahal",
    email: "mailto:sumitdahal123@gmail.com",
  },
};

export const skills = {
  languages: ["JavaScript", "TypeScript"],
  frameworks: ["React.js", "React Native", "Node.js", "Next.js", "Vite"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  gis: ["MapLibre", "Leaflet", "Mapbox", "OpenLayers"],
  tools: ["TanStack Query", "Recharts", "shadcn/ui", "Tailwind CSS", "SCSS"],
  softSkills: [
    "Team Collaboration",
    "Communication",
    "Adaptability",
    "Problem-solving",
  ],
};

export const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "NAXA Pvt. Ltd.",
    location: "Baluwatar, Kathmandu",
    period: "October 2023 – Present",
    description: [
      "Developed and maintained interactive geospatial web applications using React and modern frontend technologies.",
      "Collaborated with GIS specialists to integrate advanced mapping libraries including MapLibre, OpenLayers, and Mapbox.",
      "Built reusable UI components ensuring high responsiveness, accessibility, and optimized performance.",
      "Worked closely with backend teams to consume complex REST APIs and deliver real-time data visualizations.",
      "Contributed to the design and development of spatial dashboards for infrastructure and planning projects.",
    ],
    technologies: ["React", "MapLibre", "OpenLayers", "Mapbox", "TypeScript"],
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
    title: "Victory Project",
    subtitle: "Municipal Water & Rainfall Monitoring",
    description:
      "Designed dynamic forms and UI layouts for municipal analytics and data collection. Built real-time GIS visualization Charts and Map Component for monitoring rainfall and water levels.",
    technologies: ["React", "OpenLayers", "GIS", "Real-time Data"],
    highlights: [
      "Real-time GIS visualization",
      "Rainfall & water level monitoring",
      "Dynamic data collection forms",
    ],
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "National Statistics Office (NSO)",
    subtitle: "Data Entry & Reporting Portal",
    description:
      "Designed and implemented an interactive statistical dashboard and data visualization tools to provide real-time snapshots. Engineered modular UI components with integrated automated data validation tools.",
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
      "Role-based access control",
    ],
    color: "#8B5CF6",
  },
  {
    id: 3,
    title: "PIN & UNOPS – Nepal Police",
    subtitle: "Incident Analytics Interface",
    description:
      "Developed an incident analytics interface for visualizing crime patterns and security insights. Implemented interactive heatmaps and dynamic GIS filters for spatial analysis.",
    technologies: ["Vite", "React", "MapLibre GL", "Recharts", "shadcn/ui"],
    highlights: [
      "Crime pattern visualization",
      "Interactive heatmaps",
      "3D terrain thematic layers",
    ],
    color: "#EC4899",
  },
  {
    id: 4,
    title: "Geo-Hazard Module – Bipad Portal",
    subtitle: "NDRRMA Disaster Risk Management",
    description:
      "Built interactive map layers for flood, landslide, and hazard impact analysis. Integrated geospatial computations to visualize damage estimations on a web-based platform.",
    technologies: ["React", "Mapbox GL JS", "SCSS", "GIS"],
    highlights: [
      "Flood & landslide analysis",
      "Hazard impact visualization",
      "Damage estimation mapping",
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
];

export const certifications = ["MERN Stack Training – Broadway Infosys"];
