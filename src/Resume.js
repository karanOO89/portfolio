import "./Resume.scss";
const Resume = (props) => {
  return (
    <div className="skills">
      <div className="resumeLbl">
        <label>
          <b>Resume</b><br/>
          <b>____</b>
        </label>
      </div>
      <div className="eduLbl"><img opacity=".1" src="edu.png"width="36px"/><label style={{opacity: "0.68"}}>Education</label></div>  
      <div className="education">
        <div>
          <label className="institute">Lighthouse Labs</label>
          <br /> <label className="course">- Web Development Bootcamp - 2021</label>

        </div>
        <div>
          <label className="institute">Lovely Professional University</label>
          <br /> <label className="course">- Masters in Computer Applications - 2014</label>
          <br />
          <label className="course">- Bachelors in Domputer Applications - 2012</label>
        </div>
      </div>
      <div className="skillLbl"><img src="skills.png"width="35px"/><label style={{opacity: "0.68"}}>Skills</label></div>  

      <div className="skillFooter">
        <div>skill 1</div>
        <div>skill 1</div>
      </div>
    </div>
  );
};
export default Resume;