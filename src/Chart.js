import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "React",
    Skill_Meter: 85,
    stroke: "brown",
    fill: "brown",

  },
  {
    name: "Cypress",
    Skill_Meter: 84,
    fill: "#004d40",
    stroke: "#004d40",
  },
  {
    name: "Jest",
    Skill_Meter: 87,
    fill: "teal",
    stroke: "teal",
  },
  {
    name: "Nodejs",
    Skill_Meter: 80,
    fill: "#1b5e20",
    stroke: "#1b5e20",


  },
  {
    name: "Expressjs",
    Skill_Meter: 90,
    stroke: "#3e2723",
    fill: "#3e2723",
  },
  {
    name: "PostgreSQL",
    Skill_Meter: 87,
    fill: "#01579b",
    stroke: "#01579b",
  },
  {
    name: "SASS",
    Skill_Meter: 82,
    stroke: "brown",
    fill: "brown",
  },
  {
    name: "Ruby-on-Rails",
    Skill_Meter: 75,
    fill: "#004d40",
    stroke: "#004d40",
  },
  {
    name: "RSpec",
    Skill_Meter: 75,
    fill: "teal",
    stroke: "teal",
  },
];

export default function App() {


let duration = 2500; 
  return (
    <ComposedChart
      layout="vertical"
      width={1000}
      height={350}
      data={data}
      margin={{
        left: 80,
      }}
    >
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />

      <Bar animationDuration={duration}  dataKey="Skill_Meter" barSize={8} fill="grey" />
    </ComposedChart>
  );
}
