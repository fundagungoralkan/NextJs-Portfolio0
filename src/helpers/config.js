import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export const appConfig = {
  project: {
    name: "Funda Güngör Alkan",
    slogan: "Bridging Frontend Beauty with Backend Power.",
    description:
      "Hi! I'm Funda Güngör Alkan, a Junior Full Stack Developer driven to create high-quality, responsive, and scalable web applications. I specialize in React & Next.js on the frontend and Java & Spring Boot on the backend, combining design thinking with backend logic to deliver seamless user experiences. Always exploring, improving, and building—one project at a time. Welcome to my world!",
  },
  contact: {
    info: {
   
      phone1: {
  value: "+44 7771 250046",
  icon: FaPhoneAlt,
  link: "tel:+447771250046",
},
      email: {
        value: "fundaalkan112@gmail.com",
        icon: MdEmail,
        link: "mailto:fundaalkan112@gmail.com",
      },
 
    },
    website: "https://sumeyyanacar.com",
    map: {
      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48142.8239936922!2d28.620026099745402!3d41.04873639450855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b558b1fceb5dad%3A0x614634ee1252675e!2sEsenyurt%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1746383267429!5m2!1str!2str",
    },
    socialMedia: {
      twitter: {
        url: "https://x.com",
        icon: FaTwitter,
      },
      facebook: {
        url: "https://facebook.com",
        icon: FaFacebookF,
      },
      github: {
        url: "https://github.com",
        icon: FaGithub,
      },
      linkedin: {
        url: "https://linkedin.com",
        icon: FaLinkedinIn,
      },
    },
  },
  //apiURL: "https://mycampusmates.com/app",
};
