import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = ()=>{
  // const apiKey=28bf8c8b9fb64739b9d8380aa09f832e
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}  key="general" country="in" category="general" />} />
            <Route exact path="/general" element={<News setProgress={setProgress}  key="general" country="in" category="general" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" country="in" category="sports" />} />
            <Route exact path="/science" element={<News setProgress={setProgress}  key="science" country="in" category="science" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/business" element={<News setProgress={setProgress}  key="business" country="in" category="business" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" country="in" category="technology" />} />
            <Route exact path="/health" element={<News setProgress={setProgress}  key="health" country="in" category="health" />} />
          </Routes>
        </Router>
      </div>
    )
  }
export default App;