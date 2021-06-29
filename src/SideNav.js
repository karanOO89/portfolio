import "./SideNav.scss";
import { useHistory } from "react-router-dom";
const SideNav = (props) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/email");
  };
  return (
    <div className="sideNav">
      <div className="logo">Logo</div>
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
        <button onClick={clickHandler}>Email Me</button>
      </div>
    </div>
  );
};
export default SideNav;
