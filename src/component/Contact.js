import React, { Component } from "react";

const contactList = [
  { id: 1, link: "mailto:mkitigy@gmail.com", icon: "far fa-envelope" },
  { id: 2, link: "https://github.com/GwangYeol-Im", icon: "fab fa-github" },
  {
    id: 3,
    link: "https://www.youtube.com/channel/UCqhK1CTroBgMqEXBWy7-Nbg",
    icon: "fab fa-youtube",
  },
];

function Icons() {
  return (
    <div className="contact__links">
      {contactList.map(contact => (
        <a
          key={contact.id}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`contact__icon ${contact.icon}`}></i>
        </a>
      ))}
    </div>
  );
}

class Contact extends Component {
  render() {
    return (
      <section
        id="contact"
        className="columnFlex"
        ref={ref => {
          this.contact = ref;
        }}
      >
        <a href="#home">
          <div className="contact__button">
            <i className="fas fa-angle-double-up"></i>
          </div>
        </a>
        <a
          className="contact__blog"
          href="https://www.notion.so/Self-Learning-5cba035dc0af4faf8c4e37395278b454"
          target="_blank"
          rel="noopener noreferrer"
        >
          The way that I've learned
        </a>
        <Icons />
        <p className="contact__rights">
          Copyright
          <span>
            <i className="far fa-copyright"></i>2020
          </span>
          IGY Design Limited.
        </p>
      </section>
    );
  }
}

export default Contact;
