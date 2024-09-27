import React from 'react'
import './home.css'
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

export default function Home() {
    return (
        <section id='home'>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: easeing }} className='first-home-div'>
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: easeing }} className='home-child-div1'>
                    <h3>"As a web developer, I turn ideas into interactive realities, with code as my paintbrush."</h3>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: easeing }} className='home-child-div2'>
                    <h1> Hello, I AM SYED <br/>
                        AYAAN
                        KAMIL</h1>
                </motion.div>
            </motion.div>   
        </section>
    )
}
