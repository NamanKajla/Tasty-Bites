import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipe/:id' element={<RecipeDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
