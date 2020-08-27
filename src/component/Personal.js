import React, { Component } from "react";

const musicList = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/DV5xwSqRfDM",
    name: "Crush - Lay Your Head On Me",
    caption: "cover, 2019",
    description: "song by IGY",
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/KEONjOImXoc",
    name: "IGY - moonstruck",
    caption: "2016",
    description: "lyrics, song by IGY",
  },
  {
    id: 3,
    photo: ["mixtape"],
    name: "09.02",
    caption: "mixtape, not exist",
    description: "All produced by IGY",
  },
  {
    id: 4,
    photo: ["album", "album profile"],
    name: "My Blues",
    caption: "single, 2019",
    description: "All produced by IGY",
  },
];

function Music() {
  return (
    <figure className="personal__musics">
      {musicList.map(music => (
        <dl key={music.id} className="music">
          <dt className="music__views">
            {music.video && (
              <iframe
                title={music.name}
                className="music__video"
                src={music.video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {music.photo && (
              <div className="music__photo rowFlex">
                {music.photo.map((photo, idx) => (
                  <img
                    key={idx}
                    src={require(`./images/personal/${photo}.jpg`)}
                    alt={photo}
                  />
                ))}
              </div>
            )}
          </dt>
          <dd>
            <h2 className="music__title">{music.name}</h2>
            <h3 className="music__caption">{`( ${music.caption} )`}</h3>
            <p className="music__description">{music.description}</p>
          </dd>
        </dl>
      ))}
    </figure>
  );
}

class Personal extends Component {
  render() {
    return (
      <section
        id="personal"
        className="section flex"
        ref={ref => {
          this.personal = ref;
        }}
      >
        <div className="section__sub">
          <h1 className="section__title">Personal</h1>
          <div className="section__underBar"></div>
          <p className="korean__desc">
            삶에서 의미있는 순간들을 기록하는 것은 저에게는 꽤 값진 일입니다.
            <br />
            그리고 무형의 생각이나 감정을 실체로 옮겨 내 손으로 만드는 과정들은
            묘한 즐거움을 주기도 합니다.
          </p>
        </div>
        <Music />
      </section>
    );
  }
}

export default Personal;
