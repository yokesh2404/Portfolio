import Footer from "../../components/footer";
import NavBar from "../../components/Navbar";
import "./Home.css";

export default function Home() {
  const numStars = 100; // Number of stars
  const stars = Array.from({ length: numStars });
  return (
    <div className="screen-overlay">
      {" "}
      <div className="star-container">
        {stars.map((_, index) => {
          const top = Math.random() * 100 + "vh";
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
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>
        <div style={{ color: "white" }}>Hello world</div>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
