import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import Footer from "../components/Footer"; // Import the Footer component
import SidequestSection from "@/components/SidequestSection";

const projectsData = [
  {
    id: 1,
    title: "Bowl Buddy",
    description:
      "A sophisticated deep learning model for bowler performance enhancement",
    image: "/pr1.jpg",
    tags: ["Deep Learnign", "Computer Vision"],
    githubLink: "https://github.com/architanand95/bowl-buddy",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Implementation and comparison of different classifiers, along with ensemble combinations to build a robust Music recommendation system",
    image: "/project2.jpg",
    tags: ["Deep Learning", "Ensemble Learning"],
    githubLink: "https://github.com/architanand95/Classifiers",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "An innovative real-time text and speech analyzer aimed to aid primary education",
    image: "/pr3.jpg",
    tags: ["Computer Vision", "Machine Learning"],
    githubLink: "https://github.com/architanand95/Alphabet",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "A personalized Movie Reccomendation system based on user input and historical ratings.",
    image: "/project4.jpg",
    tags: [
      "Term Frequency-Inverse Document Frequency",
      "Collaborative Filtering",
    ],
    githubLink: "https://github.com/architanand95/movie_reccomendation_system",
  },
  {
    id: 5,
    title: "Project5",
    description:
      "Predicting stock prices and suggesting optimal buy, hold, or sell strategies.",
    image: "/project5.jpg",
    tags: [
      "Feature Engineering",
      "Time Series Forecasting",
      "Regression Analysis",
    ],
    githubLink: "https://github.com/architanand95/stock_market_prediction",
  },
  {
    id: 6,
    title: "Project 6",
    description: "A real-time text messaging platform",
    image: "/project6.png",
    tags: ["Socket Programming", "TCP/IP"],
    githubLink: "https://github.com/architanand95/chatroom-",
  },
  {
    id: 7,
    title: "Project 7",
    description: "Narrative synthesis from image sequences ",
    image: "/pr_7.png",
    tags: ["Seq-to-Seq", "Transfer Learning", "Decoder Network"],
    githubLink: "",
  },
  {
    id: 8,
    title: "Project 8",
    description:
      "Automated Preprocessing using Self-Supervised Learnig techniques",
    image: "/pr8.jpg",
    tags: ["Gen Ai", "Deep Learning"],
    githubLink: "",
  },
  {
    id: 9,
    title: "Project 9",
    description:
      "Migrating a monolithic e-commerce application to a microservices architecture",
    image: "/project9.jpg",
    tags: ["Docker", "Kubernetes", "Cloud Computing"],
    githubLink: "",
  },
];
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Modify this to send form data to backend or perform other actions
    setFormData({
      name: "",
      email: "",
      message: "Thanks for reaching out",
    });
  };

  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);
  const [currentTab, setCurrentTab] = useState("languages"); // Default to Languages tab

  const toggleSkillsDropdown = () => {
    setShowSkillsDropdown(!showSkillsDropdown);
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    // You can add logic here to render content based on the selected tab
  };

  const [showPresentWork, setShowPresentWork] = useState(true);

  const toggleWorkType = () => {
    setShowPresentWork(!showPresentWork);
  };

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  const renderProjects = (projects) => {
    const buttonNames = [
      "Bowl Buddy",
      "El-Classify",
      "Alphabet",
      "Cassette",
      "Peregrine: High-Altitude Stock Market Insights",
      "Converse",
      "Framescript",
      "**Untitled**",
      "Ecom_to_MAC",
    ];

    return projects.map((project) => {
      let buttonName = "";
      switch (project.id) {
        case 1:
          buttonName = "Bowl Buddy";
          break;
        case 2:
          buttonName = "El-Classify";
          break;
        case 3:
          buttonName = "Alphabet";
          break;
        case 4:
          buttonName = "Cassette";
          break;
        case 5:
          buttonName = "Peregrine: High-Altitude Stock Market Insights";
          break;
        case 6:
          buttonName = "Converse";
          break;
        case 7:
          buttonName = "Framescript ";
          break;
        case 8:
          buttonName = "**Untitled**";
          break;
        case 9:
          buttonName = "Ecom_to_MAC";
          break;
        default:
          buttonName = "";
      }

      return (
        <motion.div
          key={project.id}
          className={styles.projectCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleProjectClick(project.githubLink)}
        >
          <div className={styles.projectImage}>
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.projectDetails}>
            <button
              className={styles.descriptionButton}
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from triggering parent&apos;s click event
              }}
            >
              {buttonName}
            </button>
            <div className={styles.descriptionDropdown}>
              <p>{project.description}</p>
              <div className={styles.tagsContainer}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={16} style={{ marginRight: "5px" }} />
              </a>
            </div>
          </div>
        </motion.div>
      );
    });
  };

  const presentProjects = projectsData.slice(0, 6); // Show 6 projects
  const ongoingProjects = projectsData.slice(6);

  const handleDownloadCV = () => {
    const pdfPath = "/archit_cv.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ArcSpace</title>
        <link rel="icon" href="/fav.ico" id="dynamic-favicon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.customHeading}>Hello, this is Archit</h1>
        <p className={styles.customParagraph}>
          <span className={styles.typewriter}>Welcome to my Space</span>
        </p>
        <button className={styles.downloadButton} onClick={handleDownloadCV}>
          Download CV
        </button>
        {/* About Section */}
        <section className={styles.section} id="about">
          <div className={styles.container}>
            <h1 className={styles.subHeading}  >About Me</h1>
            <div className={styles.aboutContent} >
              <div className={styles.aboutLeft}>
                {/* Placeholder image, replace with your own */}
                <img
                  src="/img4.png"
                  alt="Archit&apos;s Photo"
                  className={styles.aboutImage}
                />
              </div>
              <div className={styles.aboutRight}>
                <p className={styles.aboutText}>
                  Hey guys,this is Archit. I am currently pursuing my  Bachelor’s in Computer Science and Engineering from Pes University,Bangalore. On the tech front I have worked on multiple projects on Deep Learning ,Data Analytics and self-supervised learning in general.I would love for you to explore my creative side throught the &apos;SideQuest&apos;section as well. You can also check my Technical skills by clicking on the skills icon listed below.I&apos;ve tried to summarize a portion of my personality through this website.<br/>
                  I hope you like it !
                </p>
                <div className={styles.iconLinks}>
                  <div className={styles.skillsDropdown}>
                    <img
                      src="/Skills2.png"
                      alt="Skills Icon"
                      className={styles.iconImage}
                      onClick={toggleSkillsDropdown}
                    />
                    {showSkillsDropdown && (
                      <div className={styles.skillsContent}>
                        <button
                          className={
                            currentTab === "languages" ? styles.activeTab : ""
                          }
                          onClick={() => handleTabChange("languages")}
                        >
                          <div className={styles.skcontent}>
                            Languages: C, C++, Java, Python, JavaScript
                          </div>
                        </button>
                        <button
                          className={
                            currentTab === "mlTools" ? styles.activeTab : ""
                          }
                          onClick={() => handleTabChange("mlTools")}
                        >
                          <div className={styles.skcontent}>
                            ML Tools: Tensorflow, Pytorch, Scikit-learn
                          </div>
                        </button>
                        <button
                          className={
                            currentTab === "compVision" ? styles.activeTab : ""
                          }
                          onClick={() => handleTabChange("compVision")}
                        >
                          <div className={styles.skcontent}>
                            Comp Vision : OpenCv, YOLO, Mediapipe
                          </div>
                        </button>
                        <button
                          className={
                            currentTab === "architectures"
                              ? styles.activeTab
                              : ""
                          }
                          onClick={() => handleTabChange("architectures")}
                        >
                          <div className={styles.skcontent}>
                            Architectures : Deep Neural Networks, VAE, RAG, GAN,
                            Diffusion
                          </div>
                        </button>
                        <button
                          className={
                            currentTab === "webDev" ? styles.activeTab : ""
                          }
                          onClick={() => handleTabChange("webDev")}
                        >
                          <div className={styles.skcontent}>
                            Web Dev: React, Next.js, TailwindCSS, MongoDB, MYSQL
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={styles.skillsDropdown}>
                    <img
                      src="/education.png"
                      alt="Skills Icon"
                      className={styles.iconImage}
                      onClick={toggleSkillsDropdown}
                    />
                    {showSkillsDropdown && (
                      <div className={styles.skillsContent}>
                        <button
                          className={
                            currentTab === "PES" ? styles.activeTab : ""
                          }
                          onClick={() => handleTabChange("PES")}
                        >
                          <div className={styles.skcontent}>
                            <span>PES University</span>
                            <br />
                            <div className={styles.course}>
                              <span>
                                Bachelor of Technology in Computer Science and
                                Engineering
                              </span>
                              <br />
                            </div>
                            <div>2021-2025</div>
                          </div>
                        </button>
                        <button
                          className={
                            currentTab === "mlTools" ? styles.activeTab : ""
                          }
                          onClick={() => handleTabChange("mlTools")}
                        >
                          <div className={styles.skcontent}>
                            <span>Rajendra Vidyalaya</span>
                            <br />
                            <div className={styles.course}>
                              <span>ISC 2021</span>
                              <br />
                            </div>
                            <div>93%</div>
                          </div>
                        </button>
                        <button
                          className={
                            currentTab === "compVision" ? styles.activeTab : ""
                          }
                          onClick={() => handleTabChange("compVision")}
                        >
                          <div className={styles.skcontent}>
                            <span>Rajendra Vidyalaya</span>
                            <br />
                            <div className={styles.course}>
                              <span>ICSE 2019</span>
                              <br />
                            </div>
                            <div>96.4%</div>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                  {/* LeetCode */}
                  <Link href="https://leetcode.com/arc_anand/" target="_blank">
                    <img
                      src="/leetcode.webp"
                      alt="LeetCode Icon"
                      className={styles.iconImage}
                    />
                  </Link>
                  {/* GitHub */}
                  <Link href="https://github.com/architanand95" target="_blank">
                    <img
                      src="/github.webp"
                      alt="GitHub Icon"
                      className={styles.iconImage}
                    />
                  </Link>
                  {/* Kaggle */}
                  <Link href="https://www.kaggle.com/arcanand" target="_blank">
                    <img
                      src="/kaggle.webp"
                      alt="Kaggle Icon"
                      className={styles.iconImage}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Experiences Section */}
        <section id="experiences" className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.subHeading2}>Experiences</h1>
            <div className={styles.experienceOverall}>
              <div className={styles.experienceContent}>
                <div className={styles.experienceLeft}>
                  {/* Placeholder image, replace with your own */}
                  <img
                    src="/starc.jpeg"
                    alt="Photo"
                    className={styles.experienceImage}
                  />
                </div>
                <div className={styles.experienceRight}>
                  <h2 className={styles.subHeading3}>
                    Sports Technology And Analytics Research Centre (STARC)
                  </h2>
                </div>
              </div>
              <h3 className={styles.position}>Summer Research Intern</h3>
              <p className={styles.date}>June 2023 - August 2023</p>
              <p className={styles.experienceText}>
              As a Research Intern at STARC, I spearheaded
                  the development of &quot;Bowl Buddy,&quot; a pioneering deep learning
                  model that analyzed cricket bowling techniques. My role
                  involved training the model using extensive datasets of
                  optimal and injury-prone actions, enabling bowlers to refine
                  their technique by comparing their actions with the model&apos;s
                  recommendations, minimizing modifications for improved
                  performance and injury prevention.
              </p>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.subHeading2}>Projects</h2>
            <div className={styles.workToggle}>
              <button
                className={`${styles.workTypeButton} ${
                  showPresentWork ? styles.active : ""
                }`}
                onClick={toggleWorkType}
              >
                Relevant Work
              </button>
              <button
                className={`${styles.workTypeButton} ${
                  !showPresentWork ? styles.active : ""
                }`}
                onClick={toggleWorkType}
              >
                Ongoing Work
              </button>
            </div>
            <div className={styles.projectGrid}>
              {showPresentWork
                ? renderProjects(presentProjects)
                : renderProjects(ongoingProjects)}
            </div>
          </div>
        </section>

        {/* SideQuest */}

        <section id="SideQuest" className={styles.section}>
          <SidequestSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.subHeading2}>Let&apos;s Connect</h2>
            <div className={styles.contactContent}>
              <div className={styles.contactLeft}>
                <p className={styles.contactText}>
                  If you liked what you&apos;ve discovered so far and would like to get
                  in touch, feel free to connect by clicking on the icons listed
                  below. Also, if you liked the website, check out it&apos;s code and
                  relevant tech stack by clicking on the GitHub icon listed below.
                  Thanks for your time :)
                </p>
                <div className={styles.contactIcons}>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/archit-anand95/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Linkedin.png"
                      alt="LinkedIn Icon"
                      className={styles.contactIcon}
                    />
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://github.com/architanand95/architanand95.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/github.jpg"
                      alt="github Icon"
                      className={styles.contactIcon}
                    />
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/arc_anand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/instagram.jpg"
                      alt="Instagram Icon"
                      className={styles.contactIcon}
                    />
                  </a>

                  {/* Add more icons if needed */}
                </div>
              </div>
              <div className={styles.contactRight}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={styles.formInput}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className={styles.formInput}
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className={styles.formTextarea}
                    required
                  ></textarea>
                  <button type="submit" className={styles.formSubmit}>
                    <RiSendPlaneFill className={styles.formIcon} />
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


