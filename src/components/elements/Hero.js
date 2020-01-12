import React, { Component } from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    let newIsTop = window.pageYOffset <= 0 ? true : false;
    if (newIsTop !== this.isTop) {
      this.isTop = newIsTop;
      this.setState({
        isTop: this.isTop
      });
    }
  };

  scrollToTop(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
  }

  render() {
    return (
      <section className="hero is-dark is-fullheight has-bg-image">
        <div id="pt" class="canvas"></div>
        <div className="hero-head">
          <NavBar />
        </div>
        <div className="hero-body">
          <div className="container">
            <p className="subtitle is-5 has-text-weight-light">I'm a</p>
            <h1 className="title">{Resume.basics.label}</h1>
            <h2 className="subtitle">
              {Resume.basics.location.region}, {Resume.basics.location.country}
            </h2>

            <div className="socials is-mobile" style={{ marginTop: -12 }}>
              {Resume.basics.profiles.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="has-text-centered"
                    style={{ marginRight: 30 }}
                  >
                    <a
                      href={value.url}
                      target="blank"
                      className="is-hovered"
                      title={value.network}
                    >
                      <span className="icon is-medium is-">
                        <i className={value.x_icon}></i>
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
            className="hero-foot"
            style={{ paddingBottom: "80px", zIndex: 100, position: "relative", opacity: this.state.isTop ? 1 : 0, pointerEvents: this.state.isTop ? 'auto' : 'none' }}
          >
            <section id="scroll-down">
              <a href="#aboutMe">
                <span></span>
              </a>
            </section>
          </div>
      </section>
    );
  }
}

// export default Hero;
