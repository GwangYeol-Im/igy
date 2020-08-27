import React, { Component } from "react";

function SkillBar(props) {
  return (
    <dl key={props.id} className="skillBar rowFlex">
      <dt className="skillBar__name">{props.name}</dt>
      <div className="skillBar__range">
        <div
          className="skillBar__fill"
          style={{ width: `${props.range}` }}
        ></div>
      </div>
      <dd className="skillBar__percents">{props.range}</dd>
    </dl>
  );
}

function Attribute() {
  const attributeList = [
    { id: 1, icon: "fas fa-bolt", name: "fast" },
    { id: 2, icon: "fas fa-desktop", name: "responsive" },
    { id: 3, icon: "fas fa-cogs", name: "structural" },
    { id: 4, icon: "fab fa-grav", name: "dynamic" },
  ];

  return (
    <ul className="attributeList rowFlex">
      {attributeList.map(attribute => (
        <li key={attribute.id} className="attribute columnFlex">
          <i className={`${attribute.icon} attribute__icon`}></i>
          <span className="attribute__name">{attribute.name}</span>
        </li>
      ))}
    </ul>
  );
}

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillList: [
        { id: 1, name: "html", range: "90%" },
        { id: 2, name: "css", range: "90%" },
        { id: 3, name: "javascript", range: "90%" },
        { id: 4, name: "react", range: "70%" },
        { id: 5, name: "typescript", range: "70%" },
        { id: 6, name: "photoshop", range: "70%" },
      ],
    };
  }

  render() {
    const { skillList } = this.state;
    return (
      <section
        id="skills"
        className="section columnFlex"
        ref={ref => {
          this.skills = ref;
        }}
      >
        <h1 className="section__title">Skills</h1>
        <div className="section__underBar"></div>
        <p className="korean__desc">
          사용자를 위한 디자인과 비즈니스 로직을 능숙히 다루어야 하는 프론트엔드
          개발자는 빠르고 효율적이며, <br />
          사업의 최종 목표까지 이끌어낼 수준 있는 웹 / 앱을 만드는 것이 핵심
          과제입니다.
        </p>
        <h2>Skills & Attributes</h2>
        <figure className="skillset rowFlex">
          <div className="skillset__left">
            {skillList.map(skill => (
              <SkillBar
                key={skill.id}
                id={skill.id}
                name={skill.name}
                range={skill.range}
              />
            ))}
          </div>
          <div className="skillset__right">
            <Attribute />
          </div>
        </figure>
      </section>
    );
  }
}

export default Skills;
