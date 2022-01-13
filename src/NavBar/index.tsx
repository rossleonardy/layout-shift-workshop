import React from 'react'
import './style.css'

export const NavBar = () => <div className="navbar">
  <div>
    <img className="workshop" src="http://localhost:8787/assets/workshop.png" width="128" height="128" />
    <img className="workshop small" src="http://localhost:8787/assets/workshop-small.png" width="64" height="64" />
  </div>
  <ul>
    <li>Home</li>
    <li>FAQ</li>
    <li>Developers</li>
  </ul>
</div>
