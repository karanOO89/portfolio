import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Particles from "react-particles-js";

ReactDOM.render(
  <React.StrictMode>
    <div className="index">
      <App />
      <div className="particleJs"> 
        <Particles
          params={{
            particles: {
              number: {
                value: 300,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              line_linked: {
                enable: true,
                opacity: .015,
              },
              move: {
                "random": true,
                speed: .4,
              },
              size: {
                value: .4,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: .5,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        ></Particles>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
