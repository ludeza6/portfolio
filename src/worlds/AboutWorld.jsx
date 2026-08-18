import "./AboutWorld.css";

function AboutWorld() {
  return (
    <section className="world about-world">
      <div className="cloud cloud-one"></div>
      <div className="cloud cloud-two"></div>

      <div className="about-panel">
        <p className="about-label">PLAYER PROFILE</p>
        <h1>Hi, I'm Lucas.</h1>
        <p>
          CSE student building software, AI systems, and interactive projects.
        </p>
      </div>

      <div className="island">
        <div className="tree tree-left">
          <div className="tree-crown"></div>
          <div className="tree-trunk"></div>
        </div>

        <div className="character">
          <div className="character-head"></div>
          <div className="character-body"></div>

          <div className="character-legs">
            <div className="leg"></div>
            <div className="leg"></div>
          </div>
        </div>

        <div className="tree tree-right">
          <div className="tree-crown"></div>
          <div className="tree-trunk"></div>
        </div>

        <div className="island-grass"></div>

        <div className="island-dirt"></div>
      </div>

      <div className="island-shadow"></div>
    </section>
  );
}

export default AboutWorld;
