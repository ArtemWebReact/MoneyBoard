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
import { 
  ResponsiveContainer
} from 'recharts';
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
  return (
    <div className="size-full">
      <section className="relative bg-gradient-to-br from-[#1a1f3b] via-[#222e44] to-[#0d0f1a] w-full min-h-screen flex flex-col items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Title with animated gradient */}
          <div className="mt-10 mb-8 text-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-widest drop-shadow-[0_0_30px_rgba(255,165,0,0.8)] bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Your Graphics
            </h1>
            <div className="mt-3 h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          {/* Charts Grid */}
          <div className="grid w-[95%] max-w-[1600px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center content-start bg-[rgba(115,84,189,0.08)] backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-[0_0_60px_rgba(115,84,189,0.4)] border border-purple-500/20 mb-10">
            
            {/* LineChart */}
            <div className="group relative w-full max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(20,20,40,0.6)] backdrop-blur-md shadow-[0_0_35px_rgba(255,165,0,0.6)] border border-orange-500/30 hover:border-orange-500/60 hover:scale-105 transition-all duration-500">
                <h3 className="text-orange-400 text-xl font-bold mb-4 tracking-wide">Line Chart</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={array}>
                    <XAxis dataKey="name" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} />
                    <YAxis stroke="#ff4444" tick={{ fill: '#ff4444', fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.9)', 
                        border: '1px solid rgba(255,165,0,0.5)',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#ff8c00" 
                      strokeWidth={3}
                      dot={{ fill: '#ff8c00', r: 5 }}
                      activeDot={{ r: 8, fill: '#ffa500' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* BarChart */}
            <div className="group relative w-full max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(20,20,40,0.6)] backdrop-blur-md shadow-[0_0_35px_rgba(255,165,0,0.6)] border border-orange-500/30 hover:border-orange-500/60 hover:scale-105 transition-all duration-500">
                <h3 className="text-blue-400 text-xl font-bold mb-4 tracking-wide">Bar Chart</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={array}>
                    <XAxis dataKey="name" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} />
                    <YAxis stroke="#ff4444" tick={{ fill: '#ff4444', fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.9)', 
                        border: '1px solid rgba(255,165,0,0.5)',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Bar dataKey="amount" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffa500" />
                        <stop offset="100%" stopColor="#ff6600" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* AreaChart */}
            <div className="group relative w-full max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(20,20,40,0.6)] backdrop-blur-md shadow-[0_0_35px_rgba(255,165,0,0.6)] border border-orange-500/30 hover:border-orange-500/60 hover:scale-105 transition-all duration-500">
                <h3 className="text-cyan-400 text-xl font-bold mb-4 tracking-wide">Area Chart</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={array}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#87ceeb" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#87ceeb" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} />
                    <YAxis stroke="#ff4444" tick={{ fill: '#ff4444', fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.9)', 
                        border: '1px solid rgba(255,165,0,0.5)',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#ff8c00" 
                      strokeWidth={2}
                      fill="url(#colorAmount)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* PieChart */}
            <div className="group relative w-full max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(20,20,40,0.6)] backdrop-blur-md shadow-[0_0_35px_rgba(255,165,0,0.6)] border border-orange-500/30 hover:border-orange-500/60 hover:scale-105 transition-all duration-500">
                <h3 className="text-green-400 text-xl font-bold mb-4 tracking-wide">Pie Chart</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie 
                      data={array} 
                      dataKey="amount" 
                      nameKey="name" 
                      cx="50%" 
                      cy="50%" 
                      outerRadius={80}
                      label
                    >
                      <Cell fill="#4CAF50"/>
                      <Cell fill="#F44336"/>
                      <Cell fill="#2196F3"/>
                      <Cell fill="#FF9800"/>
                      <Cell fill="#9C27B0"/>
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.9)', 
                        border: '1px solid rgba(255,165,0,0.5)',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '14px', color: '#fff' }}
                      iconType="circle"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* RadarChart */}
            <div className="group relative w-full max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(20,20,40,0.6)] backdrop-blur-md shadow-[0_0_35px_rgba(255,165,0,0.6)] border border-orange-500/30 hover:border-orange-500/60 hover:scale-105 transition-all duration-500">
                <h3 className="text-pink-400 text-xl font-bold mb-4 tracking-wide">Radar Chart</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <RadarChart data={array}>
                    <PolarGrid stroke="#ff4444" strokeOpacity={0.5} />
                    <PolarAngleAxis 
                      dataKey="name" 
                      stroke="#fff" 
                      tick={{ fill: '#fff', fontSize: 12 }}
                    />
                    <Radar 
                      dataKey="amount" 
                      stroke="#ff8c00" 
                      fill="#ff8c00" 
                      fillOpacity={0.6}
                      strokeWidth={2}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.9)', 
                        border: '1px solid rgba(255,165,0,0.5)',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* ComposedChart */}
            <div className="group relative w-full max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(0,0,0,0.6)] to-[rgba(20,20,40,0.6)] backdrop-blur-md shadow-[0_0_35px_rgba(255,165,0,0.6)] border border-orange-500/30 hover:border-orange-500/60 hover:scale-105 transition-all duration-500">
                <h3 className="text-yellow-400 text-xl font-bold mb-4 tracking-wide">Composed Chart</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <ComposedChart data={array}>
                    <XAxis dataKey="name" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} />
                    <YAxis stroke="#ff4444" tick={{ fill: '#ff4444', fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.9)', 
                        border: '1px solid rgba(255,165,0,0.5)',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Bar dataKey="amount" fill="url(#composedBarGradient)" radius={[8, 8, 0, 0]} />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#ff4444" 
                      strokeWidth={3}
                      dot={{ fill: '#ff4444', r: 5 }}
                    />
                    <defs>
                      <linearGradient id="composedBarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffa500" />
                        <stop offset="100%" stopColor="#ff6600" />
                      </linearGradient>
                    </defs>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}