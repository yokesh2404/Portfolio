import Footer from "../../components/footer";
import NavBar from "../../components/Navbar";
import "./Home.css";
import Typewriter from "./type";
import Type from "./type";

export default function Home() {
  const numStars = 100; // Number of stars
  const stars = Array.from({ length: numStars });
  return (
    <div className="screen-overlay">
      {" "}
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
        <br></br>

        <div className="body">
          <div>
            <h1
              style={{ paddingBottom: 15, color: "white" }}
              className="heading"
            >
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name"> YOKESHWARAN NAGARAJAN</strong>
            </h1>
            <div style={{ paddingTop: 50, textAlign: "left" }}>
              <Typewriter />
            </div>
          </div>
          <img className="home-main-image" src="./home-main.svg" />
        </div>
        {/* <br/>

        <div >
         <h1>Let me introduce My Self</h1>
        </div> */}

        <br></br>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
