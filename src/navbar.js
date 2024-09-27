import React, { useState } from 'react'
import "./navbar.css"
import { motion } from 'framer-motion'

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 3,
      staggerDirection: 3,
    }
  }
}

const fadeInUP = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 4, ease: easeing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      delay: 3,
      ease: easeing
    }
  }
};
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 3.7,
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
}

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 3.7,
      staggerChildren: 0.04,
      staggerDirection: 1
    }
  }
}

const letter = {
  initial: {
    y: 700,
  },
  animate: {
    y: 2,
    transition: { duration: 3, ...transition }
  }
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 8, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 4, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};

export default function Navbar() {
    const [toggle , setToggle] = useState(false)

    const toggleButton = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
  return (
    <>
        <section className='first'>
            <motion.div initial='initial' animate='animate' className=' first-main-div'>
                
                <motion.nav className='nav' variants={stagger}>
                    <motion.h1 variants={header}>Ayaan portfolio</motion.h1>

                    <motion.div onClick={toggleButton} variants={stagger} className='toggle-div'>
                        <span className= {toggle ? "Menu" : "Close"}>{toggle ? 'Close' : 'Menu'}</span>     
                        </motion.div>

                    <motion.div className= {toggle ? 'nav-part2 toggleActive' : 'nav-part2'} variants={header}>
                        <h5><a onClick={() => {document.getElementById('home').scrollIntoView({behavior: 'smooth'})}}>Home</a></h5>
                        <h5><a onClick={() => {document.getElementById('about').scrollIntoView({behavior: 'smooth'})}}>About</a></h5>
                        <h5><a onClick={() => {document.getElementById('skills').scrollIntoView({behavior: 'smooth'})}}>Skills</a></h5>
                        <h5><a onClick={() => {document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})}}>Projects</a></h5>
                        <h5><a onClick={() => {document.getElementById('testimonal').scrollIntoView({behavior: 'smooth'})}}>Testimonal</a></h5>
                        <h5><a onClick={() => {document.getElementById('context').scrollIntoView({behavior: 'smooth'})}}>Contact</a></h5>
                    </motion.div>
                </motion.nav>
            </motion.div>
        </section>
    </>
  )
}
