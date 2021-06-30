import "./rightBody.scss";

const RightBody = (props) => {
  return (
    <div className="content">
      <div className="intro">
        <p className="about">
          <b>
            About Me
            <br />
            ____
          </b>
        </p>
        <p className="desc">
          Hi, I'm Karan <br/>I describe myself as someone who's a quick learner and
          persistent about learning new technology, a problem solver with tools
          that are currently available. What I'm currently looking for is a
          happy and learning work environment with peers commited to their
          related crafts as I am commited to mine.
        </p>
      </div>
      <div className="query">
        <p>
          <b>What I'am doing... </b>
        </p>
      </div>
      <div className="midDesc">
        <div>
          <img src="dev.png" />

          <p style={{ fontSize: "20px" }}>
            Full Stack Developer
            <br />
            <br />
            <p style={{ fontSize: "15px" }}>
              Proficient in front-end development (React,SASS) and connect it
              with backend (Express.js, Node.js, PostgreSQL) using async
              approach.
            </p>
          </p>
        </div>
        <div>
          <img src="dev.png" />

          <p style={{ fontSize: "20px" }}>
            Full Stack Developer
            <br />
            <br />
            <p style={{ fontSize: "15px" }}>
              Proficient in front-end development (React,SASS) and connect it
              with backend (Express.js, Node.js, PostgreSQL) using async
              approach.
            </p>
          </p>
        </div>
      </div>
      <div className="bottomDesc">
        <div>
          <img src="dev.png" />

          <p style={{ fontSize: "20px" }}>
            Full Stack Developer
            <br />
            <br />
            <p style={{ fontSize: "15px" }}>
              Proficient in front-end development (React,SASS) and connect it
              with backend (Express.js, Node.js, PostgreSQL) using async
              approach.
            </p>
          </p>
        </div>
        <div>
          <img src="dev.png" />

          <p style={{ fontSize: "20px" }}>
            Full Stack Developer
            <br />
            <br />
            <p style={{ fontSize: "15px" }}>
              Proficient in front-end development (React,SASS) and connect it
              with backend (Express.js, Node.js, PostgreSQL) using async
              approach.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
