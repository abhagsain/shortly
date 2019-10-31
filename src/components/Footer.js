import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__brand-title">Shortly</div>
          <nav className="footer__nav">
            <div className="footer__heading">Features</div>
            <ul>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Link Shortening
                </a>
              </li>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Branded Links
                </a>
              </li>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Analytics
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer__nav">
            <div className="footer__heading">Resources</div>
            <ul>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Blog
                </a>
              </li>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Developers
                </a>
              </li>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer__nav">
            <div className="footer__heading">Company</div>
            <ul>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Our Team
                </a>
              </li>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__items">
                <a href="#0" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__social-media-links">
            <div>
              <a href="#0">
                <img
                  src={require("../images/icon-facebook.svg")}
                  alt="Shortly Facebook"
                />
              </a>
            </div>
            <div>
              <a href="#0">
                <img
                  src={require("../images/icon-twitter.svg")}
                  alt="Shortly Twitter"
                />
              </a>
            </div>
            <div>
              <a href="#0">
                <img
                  src={require("../images/icon-pinterest.svg")}
                  alt="Shortly Pinterest"
                />
              </a>
            </div>
            <div>
              <a href="#0">
                <img
                  src={require("../images/icon-instagram.svg")}
                  alt="Shortly Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
