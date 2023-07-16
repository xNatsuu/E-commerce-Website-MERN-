import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ZeNGee.</h1>
        <p>High Quality is our first priority.</p>
        {/* <p>So,</p> */}
        <p>Shop your heart Out.</p>

        <p>Copyrights 2023 &copy; ZenGee.</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/shr1m0y/?igshid=MzNlNGNkZWQ4Mg%3D%3D"><InstagramIcon/></a>
        <a href="https://www.linkedin.com/in/shrimoy-nayak-196112229/"><LinkedInIcon/></a>
        <a href="https://twitter.com/xNatsuuuuu"><TwitterIcon/></a>
  
      </div>
    </footer>
  );
};

export default Footer;
