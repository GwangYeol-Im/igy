import React, { Component } from "react";

function Major({ name }) {
  let iconList = [
    {
      name: "web",
      item: ["fab fa-html5", "fab fa-css3", "fab fa-js-square"],
    },
    {
      name: "frame works",
      item: ["fab fa-react"],
    },
  ];

  for (let icons of iconList) {
    if (icons.name === name) {
      return (
        <dl className="major">
          <dd className="major__icon">
            {icons.item.map((icon, idx) => (
              <i
                key={idx}
                id={`icon__${icon.replace("fab fa-", "")}`}
                className={icon}
              ></i>
            ))}
          </dd>
          <dt className="major__title">{name.toUpperCase()}</dt>
        </dl>
      );
    }
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: ["web", "frame works"] };
  }

  render() {
    const { categories } = this.state;
    return (
      <section
        id="about"
        className="section"
        ref={ref => {
          this.about = ref;
        }}
      >
        <h1 className="section__title">Introduction</h1>
        <div className="section__underBar"></div>
        <p className="korean__desc">
          저는 '코딩도 어찌 보면 예술의 영역이다'라는 말을 좋아합니다. 포괄적인
          트렌드나 방법론이 존재할지언정, <br />
          결국 프로젝트는 그것을 이루는 개인이나 팀의 생각들이 모여
          구현되니까요. <br />
          그것이 제가 음악과 개발을 사랑하는 이유입니다. <br />
          <br />
          또한, 개발자는 스트레스에 유연하게 대처하며 주도적으로 꾸준한 한
          걸음을 옮겨야 하는 사람이라고 생각합니다. <br />
          그러한 측면에서 저는
          <strong>'개발을 사랑하는 이유'</strong> 와
          <strong>'개발에 맞는 Fit'</strong> 을 충분히 가지고 있으리라
          확신합니다.
          <br />
          아래는 지금까지 배워 왔고, 배워 가는 과정들입니다.
        </p>
        <div className="about__majors rowFlex">
          {categories.map((category, idx) => (
            <Major key={idx} name={category} />
          ))}
        </div>
        <dl className="about__careers columnFlex">
          <div className="career__list rowFlex">
            <img
              src={require("./images/careers/polyTechLogo.png")}
              alt="Polytech"
              className="career__logo"
            />
            <dd className="career__description">
              <p className="career__name">
                Convergence Technology Campus of KOREA POLYTECHNIC
              </p>
              <p className="career__period">2020.03.16~</p>
            </dd>
          </div>
          
          <div className="career__list rowFlex">
            <img
                src={require("./images/careers/logo42.png")}
                alt="42Seoul"
                className="career__logo"
              />
              <dd className="career__description">
                <p className="career__name">
                  42 Seoul La piscine / Cadets
                </p>
                <p className="career__period">2020.06.29~</p>
              </dd>
          </div>
        </dl>
      </section>
    );
  }
}

export default About;
