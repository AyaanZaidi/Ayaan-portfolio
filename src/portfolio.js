import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import work from './images/work.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './portfolio.css';

// import required modules
import { EffectCreative } from 'swiper/modules';

export default function Portfolio() {
    return (
        <>

            <section id='portfolio' className='portfolio-section'>

                <div className='portfolio-heading-div'>
                    <h3>Work</h3>
                    <div className='portfolio-underline-div'>
                        <div className='portfolio-underline'></div>
                        <p>What i do</p>
                        <div className='portfolio-underline'></div>
                    </div>
                </div>

                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            origin: 'left center',
                            translate: ['-5%', 0, -200],
                            rotate: [0, 100, 0],
                        },
                        next: {
                            origin: 'right center',
                            translate: ['5%', 0, -200],
                            rotate: [0, -100, 0],
                        },
                    }}
                    modules={[EffectCreative]}
                    className="mySwiper6"
                >
                    <SwiperSlide>
                        <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div><img height="420" width="320" src={work}/></div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}
