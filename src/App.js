import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from './pages/MenuPage';
import IntroductionPage from './pages/IntroductionPage';
import VideoPage from './pages/VideoPage';
import PolicyPage from './pages/PolicyPage';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
const [text, setext] = useState("Introduction")
  const courseLists = [
    {
        id:1,
        heading:'Introduction to cuber safety',
        url:'../assets/v1.mp4'
    },
    {
      id:2,
      heading:'Passwords',
      url:'../assets/v2.mp4'
    },
    {
        id:3,
        heading:'Socially engineered attacks',
        url:'../assets/v3.mp4'
    },
    {
        id:4,
        heading:'Data security risks',
        url:'../assets/v4.mp4'
    },
    {
        id:5,
        heading:'Your responsibilites',
        url:'../assets/v5.mp4'
    },
    {
        id:6,
        heading:'More information',
        url:'../assets/v6.mp4'
    }
]

function updateValue(value){
  setext(value)
}


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/introduction" element={<IntroductionPage text={text} updateValue={updateValue}/>} />
      <Route path="/menuPage" element={<MenuPage  courseLists={courseLists} text={text} updateValue={updateValue}/>}/>
       <Route path='/video_page/:id' element={<VideoPage courseLists={courseLists} updateValue={updateValue} text={text} />} /> 
       <Route path='/policypage' element={<PolicyPage courseLists={courseLists} updateValue={updateValue} text={text}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
