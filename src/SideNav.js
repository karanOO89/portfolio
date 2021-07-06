import "./SideNav.scss";
import { useHistory } from "react-router-dom";
const SideNav = (props) => {
  const history = useHistory();
  const clickHandlerAbout = () => {
    history.push("/");
  };
  const clickHandlerEmail = () => {
    history.push("/email");
  };
  const clickHandlerResume = () => {
    history.push("/resume");
  };
  return (
    <div className="sideNav">
      <div className="logo">
        <img width = "150px"src="pic.jpeg"/>
      </div>
      <label className="name">
        Karan <b>Gaba</b>
      </label>
      <label className="profile">Web Developer</label>
      <div className="social">
        <a href="https://www.linkedin.com/in/karan-gaba/" target="_blank">
          <img src="linkedin.png" />
        </a>
        <a href="https://github.com/karanOO89" target="_blank">
          <img src="github.png" />
        </a>
      </div>
      <div className="loc">
        <img src="loc1.png" />
        <label>Calgary, AB</label>
      </div>
      <div className="email">
      <button onClick={clickHandlerAbout}>About</button>
      <button onClick={clickHandlerResume}>Resume</button>

        <button onClick={clickHandlerEmail}>Email Me</button>
      </div>
      <div className="copyright">
        <label>Copyright © 2021 Karan</label>

      </div>
    </div>
  );
};
export default SideNav;
