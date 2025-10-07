import './Featurs.css'
import React from 'react'
import {ArrowUpOutlined ,ArrowDownOutlined } from "@ant-design/icons";

export default function Features() {
  return (
    <div className='Container-Features'>
        <div className="Features-Section">
            <span className="Features-Name">Revanue</span>
            <div className="Features-Profit">
                <span className="Features-Profit__Money">$473</span>
                <span className="Features-Profit__Arrow">-2.24 <ArrowDownOutlined className='Negetive'/></span>
            </div>
            <span className="Features-Text">Compared to last day</span>
        </div>
        <div className="Features-Section">
            <span className="Features-Name">Sales</span>
            <div className="Features-Profit">
                <span className="Features-Profit__Money">$1,532</span>
                <span className="Features-Profit__Arrow">-0.7 <ArrowDownOutlined className='Negetive'/></span>
            </div>
            <span className="Features-Text">Compared to last weak</span>
        </div>
        <div className="Features-Section">
            <span className="Features-Name">Cost</span>
            <div className="Features-Profit">
                <span className="Features-Profit__Money">$2,986</span>
                <span className="Features-Profit__Arrow">+11.2 <ArrowUpOutlined className='positive'/></span>
            </div>
            <span className="Features-Text">Compared to last month</span>
        </div>
    </div>
  )
}
