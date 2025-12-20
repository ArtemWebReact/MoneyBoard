//npm install recharts
"use client"
import { Line, LineChart, XAxis, YAxis, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, ComposedChart, ScatterChart, Scatter } from "recharts"
import { useContext } from "react"
import MoneyContext from "../context"
import { AreaChart, Area } from "recharts"
import { Pie } from "recharts"
import { PieChart, Cell} from "recharts"
import { Tooltip } from "recharts"
import { Legend } from "recharts"
import { Oxanium } from "next/font/google"
import { cyberFont } from "../fonts/fonts"
import { cyberFont2 } from "../fonts/fonts"
export default function Graphics(){
  const context = useContext(MoneyContext)
  if(!context) return null
  const {sumExspense, sumIncome} = context
  const array = [
    {
  name: "income",
  amount: sumIncome

    },
    {
      name:"exspense",
      amount: sumExspense
    },
    {
      name: "balance",
      amount: (sumIncome - sumExspense)
    }
  ]
  console.log(sumExspense+ '-' + sumIncome)
      return(
        <>
        <section className="bg-[#222e44] w-full h-screen flex justify-center items-center flex-col">
          <h1 className={`text-white m-10 font-cyber text-3xl ${cyberFont.className}`}>Your graphics</h1>
          <div className="grid w-[90%] h-full grid-cols-[repeat(3,minmax(120px,1fr))] justify-items-center content-around bg-[#7354bd] m-10 rounded-xl">
 
        <LineChart width = {300} height = {200} data = {array}>
        <XAxis dataKey="name" stroke="white"  tick = {{className:`${cyberFont2.className} text-1xl`}}></XAxis>
        <YAxis stroke = "red"></YAxis>
        <Line   dataKey = "amount" stroke = "orange" ></Line>
        </LineChart>
       
          <BarChart width = {300} height = {200} data = {array}>
        <XAxis dataKey="name" stroke="white" tick = {{className:`${cyberFont2.className} text-1xl`}}></XAxis>
        <YAxis stroke = "red"></YAxis>
        <Bar   dataKey = "amount" fill = "orange" ></Bar>
        </BarChart>
        <AreaChart width={300} height={200} data={array}>
  <XAxis dataKey="name" stroke="white"  tick = {{className:`${cyberFont2.className} text-1xl`}}/>
  <YAxis stroke="red" />
  <Area dataKey="amount" stroke="orange" fill="lightblue" />
</AreaChart>
<PieChart width={400} height={300}>
  <Pie
    data={array}
    dataKey="amount"
    nameKey="name"
    label
  >
    <Cell fill="#4CAF50" />  {/* income */}
    <Cell fill="#F44336" />  {/* expense */}
    <Cell fill="#2196F3" />  {/* balance */}
  </Pie>

  <Tooltip contentStyle={{
    fontFamily: cyberFont2.className,
    fontSize: "1rem"
      }} 
      itemStyle={{
        fontFamily: cyberFont2.className
      }}/>
  <Legend wrapperStyle={{
    fontFamily: cyberFont2.className,
      fontSize: "1rem"
  }}/>
</PieChart>
<RadarChart outerRadius={90} width={350} height={250} data={array}>
  <PolarGrid stroke="red"  />
  <PolarAngleAxis dataKey="name" stroke="white" tick = {{
    className:`${cyberFont2.className} text-1xl`
  }}/>
  <Radar dataKey="amount" stroke="orange" fill="orange" fillOpacity={0.6} />
</RadarChart>
<ComposedChart width={300} height={200} data={array}>
  <XAxis dataKey="name" stroke="white" tick = {{
    className:`${cyberFont2.className} text-1xl`
  }}/>
  <YAxis stroke="red"/>
  <Bar dataKey="amount" fill="orange" />
  <Line dataKey="amount" stroke="red" />
</ComposedChart>
</div>


</section>

        </>
      )
}