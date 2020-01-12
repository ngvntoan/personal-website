import React, { Component } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
import Resume from "./resume.json";

let IS_DEV = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerified: !IS_DEV || window.localStorage.getItem('isVerified') 
    };
  }
  componentDidMount() {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");

    this.doAuthen();
  }

  doAuthen() {
    if (!this.state.isVerified) {
      var password = prompt("Enter your password to continue!", "");
      if (password != null && password === "Aa123456@") {
        window.localStorage.setItem('isVerified', true);
        this.setState({
          isVerified: true
        });
      }
    }
  }

  onAuthenClick() {
    this.doAuthen();
  }

  render() {
    if (!this.state.isVerified) {
      return (
        <div>
          <div>Not authorize yet!</div>
          <button onClick={this.doAuthen.bind(this)}>Login again</button>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
