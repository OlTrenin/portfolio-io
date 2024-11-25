import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import vk from "./../../img/icons/vk.svg";
import "./footer.css";
export default function Footer() {
    return (
    <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <ul className="social">
          <li className="social__item">
            <a href="https://www.instagram.com/ol.trenin/">
              <img src={instagram} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://github.com/OlTrenin">
              <img src={gitHub} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://www.linkedin.com/in/oleg-trenin-a6480629b/">
              <img src={linkedIn} alt="Link" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://vk.com/otrenin">
              <img src={vk} alt="Link" />
            </a>
          </li>
        </ul>
        <div className="copyright">
          <p>© 2024</p>
        </div>
      </div>
    </div>
  </footer>
);
}