import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
// const { logout } = useAuth0();

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      {/*========== SCROLL TOP ==========*/}
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon" />
      </a>
      {/*========== HEADER ==========*/}
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <div style={{ display: 'flex' }}>
            <a href="/" className="nav__logo">
              <img src='https://res.cloudinary.com/damtnzoo8/image/upload/v1707666154/cervicarelogo_xzk1yh.png' alt='logo' style={{ height: '82px', width: '92px' }} />
            </a>
            <h3 style={{ marginTop: '25px' }}>Cervicare</h3>
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#about" className="nav__link ">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#features" className="nav__link">
                  Features
                </a>
              </li>
              <li className="nav__item">
                <a href="#team" className="nav__link" >
                  Team
                </a>
              </li>
              <li className="nav__item">
                <a href="https://Cervicarebot.streamlit.app/" className="nav__link">
                  CervixBot
                </a>
              </li>
              <li>
                <i className="bx bx-toggle-left change-theme" id="theme-button" />
              </li>
            </ul>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt" />
          </div>
        </nav>
      </header>
      <main className="l-main">
        {/*========== Welcome ==========*/}
        <section className="home" id="home">         
          <div className="home__container bd-container bd-grid">
            <div className="home__img">
              <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1707890116/CerviCare/Homepage/2_vh7goo.png" alt="" className="vert-move" />
            </div>
            <div className="home__data">
              <h1 className="home__title">Cervicare</h1>
              <p className="home__description">
                CerviCare aims to raise awareness and predict cervical cancer. Through education and early detection, it strives to reduce the incidence and impact of this disease, empowering individuals to take proactive steps towards better cervical health.
              </p>
            </div>
          </div>
        </section>
        {/*========== About ==========*/}
        <section className="share section bd-container" id="about">
          <div className="share__container bd-grid">
            <div className="share__data">
              <h2 className="section-title-center">
                How Cervicare was Born? <br />{" "}
              </h2>
              <p className="share__description">
                CerviCare was born from a crucial need: the lack of awareness and seriousness surrounding cervical cancer. Recognizing this gap, a dedicated team came together to develop a solution that educates, predicts, and ultimately saves lives. CerviCare emerged to address these challenges head-on, aiming to transform the landscape of cervical health through proactive measures and accessible information.
              </p>
            </div>
            <div className="share__img">
              <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1707890116/CerviCare/Homepage/1_xfeymh.png" alt="" className='vert-move' />
            </div>
          </div>
        </section>
 
        {/*========== CATEGORIES ==========*/}
        <section className="decoration section bd-container" id="features">
          <h2 className="section-title">Features of Cervicare</h2>
          <div className="decoration__container bd-grid">
            <div className="decoration__data">
              <img
                src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1707888470/CerviCare/Homepage/3_sbiawo.png"
                alt=""
                className="decoration__img"
                id="apple_render"
              />
              <h3 className="decoration__title">Reading Area</h3>
              <p>View a collection of resources related to sexual health and how you can stay safe physically and mentally. Spread love, be healthy, be you!</p><br></br>

              <div className="button">
                <a
                  href="./readingArea"
                  className="button-link"
                  style={{ color: "white" }}
                >
                  Try Here
                </a>
              </div>
            </div>
            <div className="decoration__data">
              <img
                src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1707888470/CerviCare/Homepage/4_mcgdyf.png"
                alt=""
                className="decoration__img"
                id="burger_render"
              />
              <h3 className="decoration__title">CervixBot</h3>
              <p>A smart chatbot providing instant information on cervical cancer, it offers guidance on prevention, symptoms and emotional support.</p><br></br>
              <div className="button">
                <a
                  href="https://Cervicarebot.streamlit.app/"
                  target="_blank"
                  className="button-link"
                  style={{ color: "white" }}
                >
                  Try Here
                </a>
              </div>
            </div>
            <div className="decoration__data">
              <img
                src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1707888470/CerviCare/Homepage/5_ukg3xj.png"
                alt=""
                className="decoration__img"
                id="milk_render"
              />
              <h3 className="decoration__title">Cervixify</h3>
              <p>
                A predictive model for cervical cancer, uses advanced algorithms to analyze risk factors and medical data to forecast cancer likelihood! </p><br></br>
              <div className="button">
                {isAuthenticated ?(
                <a
                  href="https://cervical-shield.onrender.com/"
                  className="button-link"
                  style={{ color: "white" }}
                >
                  Try Here
                </a>):(
                  <a
                  onClick={loginWithRedirect}
                  className="button-link"
                  style={{ color: "white" }}
                >
                  Login to use this feature
                  </a>
                )}
                
              </div>

            </div>
          </div>
        </section>

        {/* Team */}
        <section class="decoration section bd-container" id="team">
          <h2 class="section-title">Team</h2>
          <div class="decoration__container bd-grid team-grid">
            <div class="decoration__data team_data">
              <img src="https://res.cloudinary.com/damtnzoo8/image/upload/v1703313922/gqljrnnttxi46yxbze3h.jpg" alt="" class="decoration__img" id="team_render" />
              <h3 class="decoration__title">Akanksha Jha</h3>
              <p>I transform challenges into digital solutions and development is my escape💡✨</p>
            </div>
            <div class="decoration__data team_data">
              <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1687075071/WhatsApp_Image_2023-06-18_at_1.24.29_PM_d7tjzm.jpg" alt="" class="decoration__img" id="team_render" />
              <h3 class="decoration__title">Sneha Chauhan</h3>
              <p>Empowering Minds, Elevating Lives: The Optimistic Developer</p>
            </div>
            <div class="decoration__data team_data">
              <img src="https://res.cloudinary.com/damtnzoo8/image/upload/v1707666653/WhatsApp_Image_2024-02-11_at_21.15.46_2c42b767_qmyiip.jpg" alt="" class="decoration__img" id="team_render" />
              <h3 class="decoration__title">Monalika Patnaik</h3>
              <p>With the Heart of a Problem Solver, I meticulously craft Real-World Solutions that make a difference &#128161;&#x2728;</p>
            </div>
            <div class="decoration__data team_data">
              <img src="https://res.cloudinary.com/damtnzoo8/image/upload/v1707666645/WhatsApp_Image_2024-02-11_at_21.13.13_b67c8edb_ffgm76.jpg" alt="" class="decoration__img" id="team_render" />
              <h3 class="decoration__title">Mansi</h3>
              <p>I think creatively to build sustainable technological solutions! &#128176;</p>
            </div>
          </div>
        </section>

        {/*========== FOOTER (Socials) ==========*/}
        <section className="footer " id="contact_us">
          <div className="footer__container bd-container bd-grid">
            <div className="footer__social">
              <h2 className="footer__title" style={{ color: "white" }}>
                Built with &#129293; by Team Cervicare
              </h2>
              <div className="footer__icons">
                <a
                  href="https://www.instagram.com/gdsc_igdtuw/"
                  className="footer__logo"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://twitter.com/gdsc_igdtuw" className="footer__logo">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dscigdtuw/mycompany/"
                  className="footer__logo"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="https://www.youtube.com/c/DSCIGDTUW"
                  className="footer__logo"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*========== SCROLL REVEAL ==========*/}
      {/*========== MAIN JS ==========*/}
      {/* Timeline.js */}
      {/* Sponsors */}
    </>

  )
}

export default Home