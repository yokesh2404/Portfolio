import Footer from "../../components/footer";
import NavBar from "../../components/Navbar";
import "./about.css";

export default function About() {
  const numStars = 100; // Number of stars
  const stars = Array.from({ length: numStars });
  const skills = [
    { name: "Flutter", icon: "./flutter_blue.png" },
    { name: "Dart", icon: "./dart_logo.png" },
    { name: "React Native", icon: "./react_logo_2.png" },
    { name: "JavaScript", icon: "./javascript_logo.webp" },
    { name: "React.js", icon: "./react_logo_2.png" },
    { name: "Node.js", icon: "./node-js_logo.png" },
    { name: "Firebase", icon: "./firebase_logo_2.png" },
    { name: "Git", icon: "./git_logo.png" },
    { name: "PostgreSQL", icon: "./postgreesql_logo_2.png" },
  ];

  const tools = [
    { name: "Visual Studio Code", icon: "./vscode_logo.svg" },
    { name: "Android Studio", icon: "./android_studio_logo.png" },
    { name: "Xcode", icon: "./xcode-logo.png" },
    { name: "Postman", icon: "./postman-logo.webp" },
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
        <br></br>

        {/* <br></br> */}
        <div className="body">
          <div>
            {/* <div className="heading-about">
              {" "}
              <h1
                style={{ paddingBottom: 15, color: "white" }}
                className="heading"
              >
                Know Who <span>I'M</span>
              </h1>
            </div> */}
            <h1
              style={{ paddingBottom: 15, color: "white" }}
              className="heading"
            >
              Hi everyone!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <p>
              I'm{" "}
              <strong>
                <span>Yokeshwaran</span>
              </strong>{" "}
              from Mannargudi, currently working as a Software Developer at
              Gramosoft Pvt Ltd, Chennai.
            </p>

            <p>
              {" "}
              I completed my{" "}
              <span>
                Bachelor of Engineering in Computer Science and Engineering{" "}
              </span>
              in 2020 from Shri Sapthagiri Institute of Technology, Vellore.
            </p>
            <p>
              I specialize in cross-platform mobile application development
              using <span>Flutter & React Native</span>, with 6+ applications
              successfully deployed on the Play Store and App Store.
            </p>
            <p>
              My expertise includes state management (Bloc, GetX, Redux),
              Firebase, REST APIs, and payment gateway integrations.
            </p>
            <p>
              In addition to mobile development, I'm passionate about full-stack
              web development, building applications using <span>React.js</span>{" "}
              for the frontend and <span>Node.js</span> for the backend to
              create seamless and scalable solutions.
            </p>
          </div>
          <img className="about-main-image" src="./about.png" />
        </div>
        <br />
        <div className="center-skillset">
          Professional <span>Skillset</span>{" "}
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} className="icon"></img>
              <p style={{ fontSize: "2rem" }}></p>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <div className="center-skillset">
          <span>Tools</span> I Use
        </div>
        <div className="skills-grid">
          {tools.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} className="icon"></img>
              <p style={{ fontSize: "2rem" }}></p>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        <br></br>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
