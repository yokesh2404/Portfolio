import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "./footer.css";
import { github, linkedin } from "../utils/app_urls";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer-body">
      <div className="social-media">
        <a
          href={github}
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>

        {/* <a
          href="https://twitter.com/Yokeshwaran"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a> */}

        <a
          href={linkedin}
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        {/* <a
          href="https://www.instagram.com/yokeshwaran"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a> */}
      </div>
      {/* <br /> */}
      {/* <p>Designed and Developed by Yokeshwaran Nagarajan</p> */}
      <p>Copyright © {year} YN</p>
    </div>
  );
}

export default Footer;
