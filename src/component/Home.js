import React, { Component } from "react";

function HomeTitle() {
  const title = ["MAKE IT EASY.", "BUT,", "MAKE IT IGY."];

  return title.map((str, idx) => (
    <h1 key={idx} className="home__title">
      {str}
    </h1>
  ));
}

class Home extends Component {
  render() {
    return (
      <section
        id="home"
        className="columnFlex"
        ref={ref => {
          this.home = ref;
        }}
      >
        <img
          src={require("./images/home/bg.png")}
          alt="background"
          className="home__background"
        ></img>
        <div className="home__information">
          <img
            src={require("./images/home/profile.JPG")}
            alt="profile"
            className="home__profile"
          />
          <HomeTitle />
          <h2 className="home__introduction">
            음악을 사랑하는 개발자, 임광열입니다.
          </h2>
          <button type="button" className="home__contactBtn">
            <a href="#about">
              안녕하세요
              <span role="img" aria-label="palm" className="contactBtn__emoji">
                ✋🏻
              </span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </button>
        </div>
      </section>
    );
  }
}

export default Home;
