import React from 'react'
import { render } from 'react-dom'

import { NavBar } from './NavBar'
import { Footer} from './Footer'
import { Headline } from './Headline'
import { OfferCardList } from './OfferCardList'

import './style.css'

const container = document.getElementById("container")
console.log(container)
render(
  <div>
    <NavBar />
    <Headline />
    <OfferCardList />
    <Footer />
  </div>, container)
