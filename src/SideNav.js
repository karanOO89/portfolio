import "./SideNav.scss";

const SideNav = (props) => {
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
        <button>Email Me </button>
      </div>
    </div>
  );
};
export default SideNav;
