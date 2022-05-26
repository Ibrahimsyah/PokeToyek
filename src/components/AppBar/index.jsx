import React from 'react'
import './index.scss'

export default function AppBar() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-section">
          <h1 className="title">Toyek Gblg</h1>
        </div>
        <div className="right-section">
          <ul className="menu">
            <li className="item">Menu 1</li>
            <li className="item">Menu 2</li>
            <li className="item">Menu 3</li>
            <li className="item">Menu 4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
