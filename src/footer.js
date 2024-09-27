import React from 'react'
import './footer.css'

export default function footer() {
    return (
        <section id='footer' className='footer-section'>

            <div class="ground">
                <h1 className='ground-h1'>  Syed Ayaan Hussain Zaidi </h1>
            </div>

            <footer>
                <div class="footer_container">
                    <div class="logo"> <p>Syed Ayaan Hussain Zaidi </p></div>
                    <div class="social_media">
                        <a href="#"><i class="ri-facebook-box-fill"></i></a>
                        <a href="#"><i class="ri-github-fill"></i></a>
                        <a href="#"><i class="ri-linkedin-box-fill"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <p>Dragon Network © 2020 All Rights Reserved.</p>
                </div>
            </footer>
        </section>
    )
}
