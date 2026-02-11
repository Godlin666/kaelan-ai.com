import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  client1,
  client2,
  client3,
  client4,
  client5,
} from "../assets";

import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Solutions",
    url: "#features",
  },
  {
    id: "1",
    title: "Services",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Technology",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact",
    url: "mailto:support@kaelan-ai.com",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [client1, client2, client3, client4, client5];

export const brainwaveServices = [
  "AI Development",
  "Global Applications",
  "Smart Solutions",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "AI Core Platform",
    text: "Established our foundational AI infrastructure with advanced machine learning capabilities and enterprise-grade security.",
    date: "Q1 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Global Expansion",
    text: "Expanding our AI solutions to international markets with localized services and multi-language support for diverse regions.",
    date: "Q2 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Enterprise Solutions",
    text: "Launching customizable AI solutions for enterprise clients with dedicated support and scalable infrastructure.",
    date: "Q3 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Next-Gen AI Models",
    text: "Developing cutting-edge AI models with enhanced reasoning capabilities and improved performance for complex applications.",
    date: "Q1 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With cutting-edge AI technology and global expertise, we deliver innovative solutions that transform businesses worldwide.";

export const collabContent = [
  {
    id: "0",
    title: "Global Reach",
    text: collabText,
  },
  {
    id: "1",
    title: "AI-Powered Innovation",
    text: "Leverage state-of-the-art machine learning models to automate complex tasks and unlock new possibilities.",
  },
  {
    id: "2",
    title: "Enterprise Security",
    text: "SOC 2 Type II certified with end-to-end encryption and GDPR compliance for your peace of mind.",
  },
];

// Technology Partners - representing cloud providers and AI platforms
export const collabApps = [
  {
    id: "0",
    title: "AWS",
    icon: figma, // placeholder icon
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Google Cloud",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Azure",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "OpenAI",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "TensorFlow",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "PyTorch",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Kubernetes",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Docker",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Startup",
    description: "AI integration, basic support, cloud deployment",
    price: null,
    features: [
      "AI-powered solutions tailored for startups",
      "Cloud-based deployment and management",
      "Email support with 48-hour response time",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Business",
    description: "Advanced AI, priority support, custom integrations",
    price: null,
    features: [
      "Full suite of AI tools and custom models",
      "Dedicated account manager and priority support",
      "Custom API integrations and scalable infrastructure",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI solutions, on-premise deployment, 24/7 support",
    price: null,
    features: [
      "Fully customized AI solutions for your business",
      "On-premise or hybrid cloud deployment options",
      "24/7 dedicated support and SLA guarantees",
    ],
    premium: false,
  },
];

export const benefits = [
  {
    id: "0",
    title: "AI-Powered Solutions",
    text: "Leverage cutting-edge artificial intelligence to automate workflows, enhance decision-making, and drive business growth.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Global Applications",
    text: "Deploy applications worldwide with our multi-region infrastructure, ensuring low latency and high availability across borders.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Seamless Integration",
    text: "Connect with your existing tech stack effortlessly through our flexible APIs and pre-built integrations.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Enterprise Security",
    text: "Industry-leading security protocols protect your data with end-to-end encryption and compliance certifications.",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Scalable Infrastructure",
    text: "From startups to enterprises, our platform scales automatically to meet your growing demands without compromising performance.",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "24/7 Expert Support",
    text: "Our dedicated team of AI specialists provides round-the-clock support to ensure your success at every step.",
    backgroundUrl: "/src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/kaelan-ai",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/kaelan_ai",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/kaelan.ai",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/kaelan_ai",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/KaelanAI",
  },
];
