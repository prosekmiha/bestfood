import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Headlinecards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headlinecards />
      <Food />
      <Category />
    </div>
  )
}

export default App
