import React, { Component } from "react";

const projectList = [
  {
    id: 1,
    name: "momentum",
    features: "Real time checker / To-do list / Weather",
    tools: "Vanilla JS",
    introduction:
      "Momentum은 순수 JavaScript로 설계 되었으며, 실시간으로 데이터를 받아 기온을 표시하고 유저의 정보를 입력하면 브라우저에 이름과 투두를 저장할 수 있는 앱입니다.",
    link: "https://gwangyeol-im.github.io/IGY_todolist/"
  },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisplayed: true };
  }

  fadeIn(style) {
    let op = 0;
    style.display = "flex";
    style.opacity = op;

    const timer = setInterval(() => {
      op += 0.1;
      style.opacity = op;
      op > 0.9 && clearInterval(timer);
    }, 20);
  }

  fadeOut(style) {
    let op = style.opacity;
    const timer = setInterval(() => {
      op -= 0.1;
      style.opacity = op;
      if (op < 0.2) {
        clearInterval(timer);
        style.display = "none";
      }
    }, 20);
  }

  toggleModal = () => {
    const { style } = this.modal;

    if (this.state.isDisplayed) {
      this.fadeIn(style);
    } else {
      this.fadeOut(style);
    }

    this.setState({ isDisplayed: !this.state.isDisplayed });
  };

  render() {
    const modalStyle = {
      opacity: "0",
      display: "none",
    };

    return (
      <section
        className="project__modal columnFlex"
        ref={ref => {
          this.modal = ref;
        }}
        style={modalStyle}
      >
        <img
          src={require(`./images/projects/bg-${this.props.name}.png`)}
          alt={`${this.props.name} background`}
          className="project__modal__background"
        ></img>
        <div className="project__modal__description columnFlex">
          <h1 className="project__modal__title">
            {this.props.name.toUpperCase()}
          </h1>
          <h2 className="project__modal__features">{this.props.features}</h2>
          <div className="project__modal__underBar"></div>
          <p className="project__modal__introduction korean__desc">
            {this.props.description}  
          </p>
        </div>
        <a className="project__modal__link" href={this.props.link} target="_blank" rel="noopener noreferrer">VIEW SITE</a>
        <button
          className="project__modal__button"
          type="button"
          onClick={() => this.toggleModal()}
        >
          Close
        </button>
      </section>
    );
  }
}

class Project extends Component {
  render() {
    return projectList.map(project => (
      <React.Fragment key={project.id}>
        <dl className="project">
          <img
            src={require(`./images/projects/${project.name ? project.name : "coming"}.png`)}
            alt={project.name}
            className="project__image"
            style={{ height: "300px" }}
          ></img>
          <dd className={project.name && "project__description columnFlex"}>
            <strong className="project__name">
              {project.name && project.name.toUpperCase()}
            </strong>
            <p className="project__tools">
              {project.tools && project.tools.toUpperCase()}
            </p>
            {project.name && (
              <button
                type="button"
                className="project__button"
                onClick={() => this.Modal.toggleModal()}
              >
                LEARN MORE
              </button>
            )}
          </dd>
        </dl>
        {project.name && (
          <Modal
            ref={ref => {
              this.Modal = ref;
            }}
            name={project.name}
            features={project.features}
            description={project.introduction}
            link={project.link}
          />
        )}
      </React.Fragment>
    ));
  }
}

class Works extends Component {
  render() {
    return (
      <section
        id="works"
        className="section"
        ref={ref => {
          this.works = ref;
        }}
      >
        <h1 className="section__title">View Portfolio</h1>
        <div className="section__underBar"></div>
        <figure className="work__projects rowFlex">
          <Project />
        </figure>
      </section>
    );
  }
}

export default Works;
