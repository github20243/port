import React from 'react'
import "./style.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item"><a href="#!"><img src="src/img/icons/vk.svg" alt="Link" /></a></li>
              <li className="social__item"><a href="#!"><img src="src/img/icons/instagram.svg" alt="Link" /></a></li>
              <li className="social__item"><a href="#!"><img src="src/img/icons/twitter.svg" alt="Link" /></a></li>
              <li className="social__item"><a href="#!"><img src="src/img/icons/gitHub.svg" alt="Link" /></a></li>
              <li className="social__item"><a href="#!"><img src="src/img/icons/linkedIn.svg" alt="Link" /></a></li>
            </ul>
            <div className="copyright">
              <p>© 2024 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer