import React from "react";
import ReactIcon from "./../../assets/react.png";
import GithubPageIcon from "./../../assets/githubpage.png";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <strong className="has-text-white">Toan Nguyen</strong>
        </p>
        <div className="sponsor">
          <span className="vertical-center">Make with</span>
          <a href='https://reactjs.org/' target='_blank'>
            <img
              src={ReactIcon}
              className="react-image vertical-center"
              alt=""
            />
          </a>
          <span className="vertical-center" style={{marginLeft: 5}}>, deploy to</span>
          <a href="https://pages.github.com/" target='_blank'>
            <img
              src={GithubPageIcon}
              className="github-image vertical-center"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
