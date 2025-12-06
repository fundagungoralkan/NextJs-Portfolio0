
import { appConfig } from "./config";
export const getMenuItems = (t, currentPath) => {
  if (!currentPath) {
    console.error("currentPath is undefined or null");
    return [];
  }

  const locale = currentPath.startsWith("/tr") ? "tr" : "en";
  const basePath = `/${locale}`;

  return [
    {
      title: t("home"),
      href: `${basePath}#home`,
      icon: "pi pi-home",
      id: "home",
    },
    {
      title: t("about"),
      href: `${basePath}#about`,
      icon: "pi pi-info-circle",
      id: "about",
    },
    {
      title: t("skills"),
      href: `${basePath}#skills`,
      icon: "pi pi-star",
      id: "skills",
    },
    {
      title: t("services"),
      href: `${basePath}#services`,
      icon: "pi pi-list-check",
      id: "services",
    },
    {
      title: t("projects"),
      href: `${basePath}#projects`,
      icon: "pi pi-briefcase",
      id: "projects",
    },
    {
      title: t("contact"),
      href: `${basePath}#contact`,
      icon: "pi pi-phone",
      id: "contact",
    },
  ];
};


export const getContactItems = (t) => [
  {
    key: "phone",
    title: t("phone-title"),
    icon: appConfig.contact.info.phone1.icon,
    link: appConfig.contact.info.phone1.link,
    value: appConfig.contact.info.phone1.value,
  },
  {
    key: "email",
    title: t("email-title"),
    icon: appConfig.contact.info.email.icon,
    link: appConfig.contact.info.email.link,
    value: appConfig.contact.info.email.value,
  },

];

export const getServicesData = (t) => [
  {
    id: 1,
    title: t("frontend-title"),
    description: t("frontend-description"),
    icon: t("frontend-icon"),
  },
  {
    id: 2,
    title: t("backend-title"),
    description: t("backend-description"),
    icon: t("backend-icon"),
  },
  {
    id: 3,
    title: t("database-title"),
    description: t("database-description"),
    icon: t("database-icon"),
  },
  {
    id: 4,
    title: t("api-title"),
    description: t("api-description"),
    icon: t("api-icon"),
  },
  {
    id: 5,
    title: t("responsive-title"),
    description: t("responsive-description"),
    icon: t("responsive-icon"),
  },
  {
    id: 6,
    title: t("agile-title"),
    description: t("agile-description"),
    icon: t("agile-icon"),
  },
];

export const getProjectsData = (t, currentPath) => {
  const locale = currentPath.startsWith("/tr") ? "tr" : "en";
  const basePath = locale === "tr" ? "/tr" : "/en";

  return [
    {
      id: 1,
      title: t("project1_title"),
      slug: t("project1_slug"), // Dilden bağımsız sabit slug
      localizedSlug: t("project1_slug_title"), // Dil-specific slug
      "description_title": t("project1_description_title"),
      description: t("project1_description"),
      image: t("project1_image"),
      link: `${basePath}/projects/${t("project1_slug")}`,
      technologies_title: t("project1_technologies_title"),
      technologies: t("project1_technologies")
    },
    {
      id: 2,
      title: t("project2_title"),
      slug: t("project2_slug"),
      localizedSlug: t("project2_slug_title"),
      description_title: t("project2_description_title"),
      description: t("project2_description"),
      image: t("project2_image"),
      link: `${basePath}/projects/${t("project2_slug")}`,
      technologies_title: t("project2_technologies_title"),
      technologies: t("project2_technologies")
    },
    {
      id: 3,
      title: t("project3_title"),
      slug: t("project3_slug"),
      localizedSlug: t("project3_slug_title"),
      description_title: t("project3_description_title"),
      description: t("project3_description"),
      image: t("project3_image"),
      link: `${basePath}/projects/${t("project3_slug")}`,
      technologies_title: t("project3_technologies_title"),
      technologies: t("project3_technologies")
    },
    {
      id: 4,
      title: t("project4_title"),
      slug: t("project4_slug"),
      localizedSlug: t("project4_slug_title"),
      description_title: t("project4_description_title"),
      description: t("project4_description"),
      image: t("project4_image"),
      link: `${basePath}/projects/${t("project4_slug")}`,
      technologies_title: t("project4_technologies_title"),
      technologies: t("project4_technologies")
    },
    {
      id: 5,
      title: t("project5_title"),
      slug: t("project5_slug"),
      localizedSlug: t("project5_slug_title"),
      description_title: t("project5_description_title"),
      description: t("project5_description"),
      image: t("project5_image"),
      link: `${basePath}/projects/${t("project5_slug")}`,
      technologies_title: t("project5_technologies_title"),
      technologies: t("project5_technologies")
    },
    {
      id: 6,
      title: t("project6_title"),
      slug: t("project6_slug"),
      localizedSlug: t("project6_slug_title"),
      description_title: t("project6_description_title"),
      description: t("project6_description"),
      image: t("project6_image"),
      link: `${basePath}/projects/${t("project6_slug")}`,
      technologies_title: t("project6_technologies_title"),
      technologies: t("project6_technologies")
    }
  ];
};


export const getSkillsData = (t) => {


  return [
    {
      id: "html",
      title: t("html"),
      icon: "pi pi-code", // isteğe bağlı
    },
    {
      id: "css",
      title: t("css"),
      icon: "pi pi-palette",
    },
    {
      id: "javascript",
      title: t("javascript"),
      icon: "pi pi-cog",
    },
    {
      id: "react",
      title: t("react"),
      icon: "pi pi-bolt",
    },
    {
      id: "java",
      title: t("java"),
      icon: "pi pi-desktop",
    },
    {
      id: "spring-boot",
      title: t("spring-boot"),
      icon: "pi pi-server",
    },
    {
      id: "spring-mvc",
      title: t("spring-mvc"),
      icon: "pi pi-sitemap",
    },
    {
      id: "spring-security",
      title: t("spring-security"),
      icon: "pi pi-lock",
    },
    {
      id: "spring-cloud",
      title: t("spring-cloud"),
      icon: "pi pi-cloud",
    },
    {
      id: "hibernate",
      title: t("hibernate"),
      icon: "pi pi-database",
    },
    {
      id: "postgresql",
      title: t("postgresql"),
      icon: "pi pi-database",
    },
    {
      id: "mongodb",
      title: t("mongodb"),
      icon: "pi pi-database",
    },
      {
      id: "next_js",
      title: t("next_js"),
      icon: "pi pi-bolt",
    },
    {
      id: "git",
      title: t("git"),
      icon: "pi pi-github",
    },
    {
      id: "github",
      title: t("github"),
      icon: "pi pi-github",
    },
    {
      id: "restful-apis",
      title: t("restful-apis"),
      icon: "pi pi-send",
    },
    {
      id: "version-control",
      title: t("version-control"),
      icon: "pi pi-share-alt",
    },
    {
      id: "problem-solving",
      title: t("problem-solving"),
      icon: "pi pi-question-circle",
    },
    {
      id: "creativity",
      title: t("creativity"),
      icon: "pi pi-lightbulb",
    },
    {
      id: "attention-to-detail",
      title: t("attention-to-detail"),
      icon: "pi pi-eye",
    },
    {
      id: "collaboration",
      title: t("collaboration"),
      icon: "pi pi-users",
    },
    {
      id: "adaptability",
      title: t("adaptability"),
      icon: "pi pi-sync",
    },
    {
      id: "continuous-learning",
      title: t("continuous-learning"),
      icon: "pi pi-book",
    },
       {
      id: "critical-thinking",
      title: t("critical-thinking"),
      icon: "pi pi-sliders-h",
    },   {
      id: "communication",
      title: t("communication"),
      icon: "pi pi-comments",
    },
    
  ];
};