import React from 'react'
import './App.css'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import {CTA, Brand, Navbar } from './components'

const App = () => {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default App
