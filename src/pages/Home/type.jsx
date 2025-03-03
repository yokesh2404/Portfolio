import { useEffect, useState } from "react";
import "./Home.css";

const jobTitles = [
  "Software Developer",
  "Mobile App Developer",
  "Flutter Developer",
  "Frontend Developer",
];
const Typewriter = () => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = jobTitles[titleIndex];
    const typingSpeed = isDeleting ? 100 : 200;
    const pauseTime = isDeleting ? 500 : 1500;

    if (!isDeleting && charIndex === currentTitle.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }

    const timeout = setTimeout(() => {
      setText(currentTitle.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <div className="typewriter">
      <span>{text}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;
