import React from "react";
import "./css/style.css";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Personal from "./Personal";
import Contact from "./Contact";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  isOnSection = id => {
    const menu = this.Nav.MenuList.menu.childNodes;

    menu.forEach((item, index) => {
      if (index === id) {
        item.className = "navbar__menu__item-on";
      } else {
        item.className = "navbar__menu__item";
      }
    });
  };

  handleScroll = () => {
    const y = window.scrollY;
    const entireY = this.app.clientHeight;
    const contactY = entireY - this.Contact.contact.clientHeight * 2;
    const personalY = contactY - this.Personal.personal.clientHeight;
    const worksY = personalY - this.Works.works.clientHeight;
    const skillsY = worksY - this.Skills.skills.clientHeight;
    const aboutY = skillsY - this.About.about.clientHeight;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.isOnSection(5);
    } else if (y > personalY) {
      this.isOnSection(4);
    } else if (y > worksY) {
      this.isOnSection(3);
    } else if (y > skillsY) {
      this.isOnSection(2);
    } else if (y > aboutY) {
      this.isOnSection(1);
    } else {
      this.isOnSection(0);
    }
  };

  render() {
    return (
      <div
        className="App"
        ref={ref => {
          this.app = ref;
        }}
      >
        <Home
          ref={ref => {
            this.Home = ref;
          }}
        />
        <Nav
          ref={ref => {
            this.Nav = ref;
          }}
        />
        <div id="contents">
          <About
            ref={ref => {
              this.About = ref;
            }}
          />
          <Skills
            ref={ref => {
              this.Skills = ref;
            }}
          />
          <Works
            ref={ref => {
              this.Works = ref;
            }}
          />
          <Personal
            ref={ref => {
              this.Personal = ref;
            }}
          />
          <Contact
            ref={ref => {
              this.Contact = ref;
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
