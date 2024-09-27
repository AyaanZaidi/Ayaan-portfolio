import React from 'react';
import { useState , useEffect } from 'react';
import './App.css';
import Preloader from './preloader';
import About from './about';
import Contect from './contect';
import Footer from './footer';
import Home from './home';
import Navbar from './navbar';
import Portfolio from './portfolio';
import Skill from './skill';
import Testimonal from './testimonal';
import CheckBot from './checkBot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to control chat visibility
  const [preloader, setPredaoder] = useState(true)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Toggle chat state
  };
  
  useEffect(() => {
    setTimeout(() => {
      setPredaoder(false)
    }, 4100)
  }, [])

  return (

    <>
      {preloader ?
        <Preloader />
        :
        
        <div className="App">
          <Navbar/>
          <Home />
          <About />
          <Skill/>
          <Portfolio />
          <Testimonal/>
          <Contect/>
          <Footer/>
        </div>
      }
    <div className="App">
    <button className="chatBtn" onClick={toggleChat}>
      {isChatOpen ? (
        <i class="ri-close-large-fill"></i> // Close icon when chat is open
      ) : (
        <i className="ri-chat-3-line"></i> // Chat icon when chat is closed
      )}
    </button>
    <div className={`App-header ${isChatOpen ? "zoom-in" : "zoom-out"}`}>
      {isChatOpen && <CheckBot />}
    </div>
  </div>
    </>
  );
}
 

export default App;

// let nums = [1, 2, 3, 4, 5, 6, 7];
//  let k = 3;
//  function rotate(nums, k) {
//     const n = nums.length;
//     k %= n
    
//     const rotated = [];
//     for (let i = 0; i < n; i++) {
//       console.log(rotated[(i + k) % n] = nums[i])      
//       rotated[(i + k) % n] = nums[i];
//     }
    
//     for (let i = 0; i < n; i++) {
//         nums[i] = rotated[i];
//     }
// }
// let answer = rotate(nums, k)
// console.log(answer)