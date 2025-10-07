import React from 'react'
import './Home.css'
import Features from "./../../Components/Features/Features";
import Chart from "./../../Components/Chart/Chart";
import { xAxisData } from '../../datas';

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
    </div>
  )
}
