import "./emailForm.scss";
import React from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import WrappedMap from "./Map";

const EmailForm = (props) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/");
  };
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target.message.value);
    if (
      e.target.message.value !== "" &&
      // e.target.subject.value !== "" &&
      e.target.name.value !== "" &&
      e.target.email.value !== ""
    ) {
      emailjs
        .sendForm(
          "service_xocx2ey",
          "template_bd9d0ot",
          e.target,
          "user_B5E57OA7w07HeENZP08dk"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log("error", error.text);
          }
        );
      e.target.reset();
      alert("Message Sent");
      return;
    }
    alert("Please fill all information");
  }
console.log(process.env.REACT_APP_GOOGLE_KEY);
  return (
    <div className="emailForm">
      <div></div>
      <div>
        <button onClick={clickHandler}>
          <img width="40px" src="back.png" />
        </button>
      </div>
      <div className="firstLabel">
        <label>
          <b>Send me a note...</b>
        </label>

        <br />
        <label>
          <b>____</b>
        </label>
      </div>
      <div className="emailContent">
        <div className="map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>

        <form onSubmit={sendEmail}>
          {/* <input type="hidden" name="contact_number" /> */}
          <div className="header">
            {/* <div>
              <input placeholder="Subject" type="text" name="subject" />
            </div> */}
            <div>
              <input placeholder="Name" type="text" name="name" />
            </div>
            <div>
              <input placeholder="Email" type="email" name="email" />
            </div>
          </div>
          <div>
            <textarea placeholder="Type your message here..." name="message" />
          </div>
          <div className="sendBtn">
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
