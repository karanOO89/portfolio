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
              color: {
                value: ["#1de9b6"],
              },
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              size: {
                value: 3,
                random: true,
              },
              line_linked: {
                enable: true,
                opacity: 0.015,
              },
              // move: {

              //   random: true,
              // },
              move: {
                direction: "left",
                out_mode: "out",
                speed: 0.9,
              },
              draw: {
                enable: true,
                stroke: {
                  color: "rgba(255, 255, 255, .2)",
                },
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.5,
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
                  particles_nb: 20,
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
