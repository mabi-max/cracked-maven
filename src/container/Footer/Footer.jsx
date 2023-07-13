import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Head office: River Park Estate Lugbe, Abuja, Nigeria.</p>
        <p className="p__opensans">+234 1234 233 567</p>
        <p className="p__opensans">+234 1234 233 567</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt='footer_logo' />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon' />
        <div className="app__footer-links_icons">
          <FiTwitter />
          <FiInstagram />
          <FiFacebook />
        </div>
      </div>
    

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans"> 9:00 am - 04:00 pm</p>
        <p className="p__opensans">Saturday:</p>
        <p className="p__opensans">10:00 am - 03:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Cracked Maven. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
