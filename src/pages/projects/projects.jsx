import Footer from "../../components/footer";
import NavBar from "../../components/Navbar";
import "./projects.css";

export default function Projects() {
  const numStars = 200; // Number of stars
  const stars = Array.from({ length: numStars });

  const projectsList = [
    {
      name: "Batik Air Malaysia",
      description:
        "Batikair is a flight ticket booking application designed for a seamless travel experience. It features an intuitive UI/UX, real-time flight search and booking, and multiple payment integrations. The app leverages Firebase for push notifications, in-app messaging, and remote configurations to enhance user engagement. Built using Flutter with BloC architecture, it ensures smooth state management and performance. Additionally, it supports local data caching with SQFlite and AES encryption for secure transactions.",
      image: "./batikair_logo.png",
      isAvailable: true,
      playstoreLink:
        "https://play.google.com/store/search?q=batik%20air&c=apps&hl=en_IN",
      appstoreLink: "https://apps.apple.com/in/app/batik-air/id1038430077",
    },
    {
      name: "Slaylewks",
      description:
        "Slaylewks is a beauty salon booking application designed to provide a seamless salon experience. Users can explore salons, book appointments, and make payments effortlessly. The app features smooth UI/UX, real-time booking management, and integrates with Google Maps for location-based services. Built using Flutter with GetX for state management, it ensures high performance and responsiveness. It also supports Firebase push notifications, Crashlytics, and Razorpay payment gateway for secure transactions.",
      image: "./slaylewks_logo.png",
      isAvailable: true,
      playstoreLink:
        "https://play.google.com/store/apps/details?id=com.slaylewks&hl=en_IN",
      appstoreLink: "https://apps.apple.com/in/app/slaylewks/id6446199635",
    },
    {
      name: "Kaptivate Status Studio",
      description:
        "Kaptivate Status Studio is a video status app that allows users to explore, watch, and download short videos, similar to Instagram Reels. The app features smooth video playback, Firebase push notifications, and deep linking for seamless user engagement. Built with Flutter using GetX for state management, it ensures high performance and responsiveness. It also integrates Google Ads for monetization, remote config for dynamic updates, and supports video saving to the gallery.",
      image: "./kaptivate_status_studio.png",
      isAvailable: true,
      playstoreLink:
        "https://play.google.com/store/apps/details?id=com.kaptivate.status.app&hl=en_IN",
      appstoreLink: null,
    },
    {
      name: "Lion Air",
      description:
        "The Lion Air mobile app provides a hassle-free flight booking experience with a user-friendly interface and seamless performance. Developed using React Native with Redux, it offers real-time flight search, secure ticket booking, and instant notifications via Firebase push notifications. The app ensures smooth navigation and offline data caching with SQLite, allowing users to access flight details even without an internet connection. ",
      image: "./lion_air.png",
      isAvailable: true,
      playstoreLink:
        "https://play.google.com/store/search?q=lionair&c=apps&hl=en_IN",
      appstoreLink: "https://apps.apple.com/in/app/lion-air/id931907072",
    },

    {
      name: "Thai Lion Air",
      description:
        "The Thai Lion Air app is a comprehensive travel companion that enables users to search, book, and manage flights effortlessly. Built with React Native and Redux, it features a fast and responsive UI, secure payment options, and real-time flight updates. With Firebase notifications and local caching using SQLite, the app ensures a seamless and reliable experience for travelers on the go. ",
      image: "./thai_lion_air.png",
      isAvailable: true,
      playstoreLink:
        "https://play.google.com/store/search?q=thai%20lionair&c=apps&hl=en_IN",
      appstoreLink: "https://apps.apple.com/in/app/thai-lion-air/id892749109",
    },
    {
      name: "Gramo-mart",
      description:
        "Gramo Mart is a feature-rich eCommerce application built using Flutter with BloC architecture for efficient state management. It offers a smooth shopping experience with easy product browsing, secure checkout, and real-time order tracking. The app integrates Firebase push notifications, REST APIs, and local caching for optimized performance. With a modern UI/UX, seamless navigation, and multiple payment options, Gramo Mart ensures a fast and reliable online shopping experience. ",
      image: "./ecommerce_app.png",
      isAvailable: false,
      playstoreLink: null,
      appstoreLink: null,
    },
  ];
  return (
    <div className="screen-overlay">
      <div className="star-container">
        {stars.map((_, index) => {
          const top = Math.random() * 200 + "vh";
          const left = Math.random() * 100 + "vw";
          const delay = Math.random() * 3 + "s";
          const size = Math.random() * 4 + 1 + "px";

          return (
            <div
              key={index}
              className="star"
              style={{
                top,
                left,
                animationDelay: delay,
                width: size,
                height: size,
              }}
            ></div>
          );
        })}
      </div>
      <div className="content">
        <NavBar />
        <br></br>
        <div className="headings">
          <h1 className="h1-headings">
            My Recent <span>Works</span>
          </h1>
          <p>Here are a few projects I've worked on recently</p>
        </div>
        <div className="skills-grid">
          {projectsList.map((project) => {
            return (
              <div className="skill-card">
                <div className="projects-card">
                  <img src={project.image} className="project-images" />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <br></br>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
