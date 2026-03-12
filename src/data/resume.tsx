import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { MySQL } from "@/components/ui/svgs/mysql";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { ScikitLearn } from "@/components/ui/svgs/scikitlearn";
import { PyTorch } from "@/components/ui/svgs/pytorch";
import { Pandas } from "@/components/ui/svgs/pandas";
import { AWS } from "@/components/ui/svgs/aws";
import { PowerBI } from "@/components/ui/svgs/powerbi";
import { Tableau } from "@/components/ui/svgs/tableau";
import { GCP } from "@/components/ui/svgs/gcp";
import { TensorFlow } from "@/components/ui/svgs/tensorflow";
import { FastAPI } from "@/components/ui/svgs/fastapi";

export const DATA = {
  name: "Kavya Moharana",
  initials: "KM",
  url: "https://dillion.io",
  location: "",
  locationLink: "",
  description:
    "UIUC Data Science Graduate. Passionate about human-centered and meaningful applications of data. Interested in all things analytics, data engineering, visualization, and health informatics!",
  summary:
    "Currently building Python-driven Agentic AI solutions for [TempoDyn](https://tempodyn.com/), an emerging startup for assisting government form processing and automating tasks across Healthcare, Social Services, and Finance. Growing hands-on experience in backend development, creating scalable data pipelines, LLM-based workflow automation, and applied AI systems. \n Previously, I was part of the [UIUC Center for Health Informatics](https://chi.healtheng.illinois.edu/projects/chime-in-illinois/) AI for Infodemic Management research team at the School of Information Sciences. During my senior year, I worked to improve the functionality of an AI [web tool](https://misinformation-detection.streamlit.app/) for detecting health-based misinformation across social media platforms such as TikTok, participating in the World Health Organization's initiative to combat 'Infodemics'.",
  avatarUrl: "/jphouse-ver2.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
    { name: "SQL", icon: MySQL },
    { name: "MongoDB", icon: MongoDB },
    { name: "Scikit-Learn", icon: ScikitLearn },
    { name: "PyTorch", icon: PyTorch },
    { name: "Pandas", icon: Pandas },
    { name: "TensorFlow", icon: TensorFlow },
    { name: "AWS Cloud", icon: AWS },
    { name: "Docker", icon: Docker },
    { name: "FastAPI", icon: FastAPI },
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Power BI", icon: PowerBI },
    { name: "Tableau", icon: Tableau },
    { name: "Google Cloud", icon: GCP }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kavyamoharana/kavyamoharana.github.io",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kavyamoharana",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:kavyamoharana@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [

    {
      company: "Temporal Dynamics",
      href: "https://tempodyn.com/",
      badges: [],
      location: "",
      title: "Data Engineer Intern",
      logoUrl: "/td-logo.jpeg",
      start: "August 2025",
      end: "Present",
      description:
        "Designing and building backend services alongside LLM-powered automation pipelines. Integrating APIs and supporting full stack application development. Using FastAPI, RESTful APIs, GPT-4, Gemini, and LangChain. Leveraging MongoDB, AWS S3, and RAG system for data persistence and contextual retrieval.",
    },

    {
      company: "UIUC Center for Health Informatics",
      href: "https://li.me/",
      badges: [],
      location: "",
      title: "Undergraduate Researcher",
      logoUrl: "/block-I-orange-background.png",
      start: "August 2024",
      end: "May 2025",
      description:
        "Worked on improving keyword aggregation, analysis, and data visualization of AI tool. Conducted data collection and automated data ingestion, transcription, and tokenization of video content. Enhanced AI visual processing pipeline, by building and testing various Python-based OCR solutions. Performed prompt engineering and continuous testing of the application.",
    },

  ],
  education: [
    
    {
      school: "University of Illinois at Urbana-Champaign",
      href: "https://ischool.illinois.edu/",
      degree: "B.S. Information Sciences + Data Science, Minor in Computer Science",
      logoUrl: "/University_of_Illinois_at_Urbana-Champaign_Logo.png",
      start: "2021",
      end: "2025",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      href: "https://www.credly.com/badges/228d2d53-9d4f-44d5-aa88-c9a96af81c59",
      date: "August 2025",
      logoUrl: "/aws-logo.png",
    },
  ],
  projects: [
    {
      title: "Database Systems Design: University Game App",
      href: "https://kavyamoharana.github.io/projects/9-cs411project",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "",
      technologies: [
        "MySQL",
        "Google Cloud",
        "Flask",
        "UML Modeling",
      ],
      links: [
        {
          type: "Website",
          href: "https://kavyamoharana.github.io/projects/9-cs411project",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Server-bro.png",
      video:
        "",
    },
    {
      title: "The Heart of Campustown: Analyzing UIUC’s Most Popular Restaurants",
      href: "https://kavyamoharana.github.io/projects/1-cs410project",
      dates: "March 2024 - May 2024",
      active: true,
      description:
        "",
      technologies: [
        "Python",
        "PyTorch",
        "NLTK",
        "Hugging Face",
        "Sentiment Analysis",
      ],
      links: [
        {
          type: "Website",
          href: "https://kavyamoharana.github.io/projects/1-cs410project",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/campustown-3.png",
      video: "",
    },
    {
      title: "Analyzing Trends in EV Usage: US and Global Perspectives",
      href: "https://kavyamoharana.github.io/projects/8-is477project",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "",
      technologies: [
        "Python",
        "Pandas",
        "Seaborn",
        "Data Curation",
        "Data Reproducibility",
        "Data Visualization"
      ],
      links: [
        {
          type: "Website",
          href: "https://kavyamoharana.github.io/projects/8-is477project",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/477-project-cover.jpg",
      video: "",
    },
    {
      title: "Assessing Climate Change and Global Temperature Trends Over Time",
      href: "https://kavyamoharana.github.io/projects/4-is327project",
      dates: "December 2023",
      active: true,
      description:
        "",
      technologies: [
        "Python",
        "Scikit-Learn",
        "Data Modeling",
      ],
      links: [
        {
          type: "Website",
          href: "https://kavyamoharana.github.io/projects/4-is327project",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/327-cover.png",
      video: "",
    },

  ],
  hackathons: [] as {
    title?: string;
    dates?: string;
    location?: string;
    description?: string;
    image?: string;
    mlh?: string;
    links?: Array<{ href: string; title: string; icon: ReactNode }>;
  }[],
} as const;
