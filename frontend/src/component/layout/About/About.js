import React from "react";
import "./aboutSection.css";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/shr1m0y";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/D5603AQEoalBw_fCUSw/profile-displayphoto-shrink_200_200/0/1666334836964?e=1695254400&v=beta&t=uOzG1H9z1n9SGsuJ_yMuhlnwy0Fd6f7G387olDDonn8"
              alt="Founder"
            />
            </div>
            <Typography>Shrimoy Nayak</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a E-commerce website made by me . I have used 
              MERN stack for it's implementation . I am learning more about 
              it as time progresses . Do visit the website and Give a comment.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <LinkedInIcon className="https://www.linkedin.com/in/shrimoy-nayak-196112229/" />
            </a>

            <a href="https://instagram.com/shr1m0y" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://github.com/xNatsuu" target="blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;