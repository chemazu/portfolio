import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./page.scss";

import PortfolioCard from "./components/PortfolioView";
import headerImage from "./images/header-image.png";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import node from "./images/node.svg";
import typescript from "./images/typescript.svg";
import mongo from "./images/mongo.svg";
import sass from "./images/sass.svg";
import react from "./images/react.svg";
import about from "./images/about.jpg";
import email from "./images/email.svg";
import location from "./images/location.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projects = [
    {
      imageName: "first",
      title: "Wego Chat App",
      description:
        "ChatApp is a real-time chat application built with React, Node.js, Express, and MongoDB. It allows users to create an account, log in, and join chat rooms to chat with other users in real-time.",
      tech: ["React", "Typescript", "Node js", "Socket"],
      git: "https://github.com/SNS-Studio/chatapp",
      live: "https://zego-chat.netlify.app/",
    },
    {
      imageName: "second",
      title: "Stacked Ecommerce",
      description:
        "This is an Ecommerce app built with react and typescript for the sale of trading cards, it will built with mongo and graphql,implement paystack for payment",
      tech: ["React", "Paystack", "Node js", "Graphql"],
      git: "https://github.com/chemazu/ecommerce",
      live: "https://stacked-ecommerce.netlify.app/",
    },
  ];
  return (
    <main>
      <header>
        <div className="text-content">
          <h2>Fullstack Javascript Developer</h2>
          <p>
            Hello, my name is Chukwuemeka Chemazu, a highly motivated full-stack
            developer based in Lagos, Nigeria.📍
          </p>
          <div className="links">
            <Link
              href={"https://github.com/chemazu"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={github} alt="github" width="50" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/cchemazu/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={linkedin} alt="github" width="50" />
            </Link>
          </div>
        </div>

        <div className="image-wrapper">
          <Image src={headerImage} alt="header-image" width="250" />
        </div>
      </header>
      <section className="tech-stack">
        <p>Tech stack : </p>
        <div className="tech-stack-wrapper">
          <div className="stack-item">
            <Image src={node} alt="Node" width="40" />
          </div>
          <div className="stack-item">
            <Image src={typescript} alt="Typescript" width="40" />
          </div>
          <div className="stack-item">
            <Image src={mongo} alt="Mongo" width="40" />
          </div>
          <div className="stack-item">
            <Image src={react} alt="React" width="40" />
          </div>
          <div className="stack-item">
            <Image src={sass} alt="Sass" width="40" />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="image-wrapper">
          <Image
            src={about}
            alt="about"
            width="400"
            style={{ borderRadius: "15px" }}
          />
        </div>
        <div className="text-content">
          <h4>About</h4>
          <h2>A goal oriented software developer</h2>
          <p>
            As a full-stack developer my goal is to create innovative solutions
            that solve real-world problems and meet the needs of end-users. I
            pride myself on my ability to collaborate with cross-functional
            teams and bring projects to life from conception to launch.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, contributing to
            open-source projects, and staying up to date with the latest
            industry trends. I'm committed to delivering high-quality code that
            is maintainable, scalable, and meets the highest standards of
            software engineering practices.
          </p>
          <p>
            Overall, I'm excited to bring my passion and expertise to any
            project and deliver exceptional results that exceed expectations.
          </p>
        </div>
      </section>
      <section className="portfolio">
        <h4>Portfolio</h4>
        <h2>Each project is a unique piece of development</h2>
        <div className="portfolio-wrapper">
          {projects.map((project, index) => (
            <PortfolioCard project={project} key={index} />
          ))}

          {/* <PortfolioCard imageName="second" /> */}
        </div>
      </section>
      <section className="contact">
        <h4>Contact me</h4>
        <h2>Don't be shy! Hit me up</h2>
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-img">
              <Image src={location} alt="Email" width="50" />
            </div>
            <div className="contact-text">
              <p>Location</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-img">
              <Image src={linkedin} alt="Email" width="50" />
            </div>
            <div className="contact-text">
              <p>Linkedin</p>
              <p>Chukwuemeka Chemazu</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-img">
              <Image src={email} alt="Email" width="50" />
            </div>
            <div className="contact-text">
              <p>Email me</p>
              <p>chukwuemekachemazu@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
