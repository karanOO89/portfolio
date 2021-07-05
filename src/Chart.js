import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Area,
} from "recharts";

const data = [
  {
    name: "React",
    Skill_Meter: 85,
    stroke: "brown",
    fill: "brown",
  },
  {
    name: "Cypress",
    Skill_Meter: 82,
    fill: "#004d40",
    stroke: "#004d40",
  },
  {
    name: "Jest",
    Skill_Meter: 84,
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
    Skill_Meter: 83,
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
    Skill_Meter: 73,
    fill: "teal",
    stroke: "teal",
  },
];

export default function App() {
  let duration = 2500;
  let duration2 = 3500;
  return (
    <ComposedChart
      layout="vertical"
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 10,
        left: 80,
      }}
    >
      <XAxis type="number" stroke="grey" />
      <YAxis
        dataKey="name"
        stroke="grey"
        type="category"
        scale="band"
      />
      <Tooltip />
      <Area
        animationDuration={duration}
        dataKey="Skill_Meter"
        fill="#004d40"
        opacity=".12"
      />
      <Bar animationDuration={duration2} dataKey="Skill_Meter" barSize={2} />
    </ComposedChart>
  );
}
