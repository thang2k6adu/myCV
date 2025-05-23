import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, contactPageData } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

const ContactData = contactPageData.contactSection;

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div className="image-container" style={{}}>
                <img
                  src={require(`../../assets/images/tran_thang.jpg`)}
                  alt=""
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    border: "3px solid #000",
                  }}
                />
              </div>
              <h1
                className="greeting-text"
                style={{
                  color: theme.text,
                  margin: "10px 0 0 0",
                  fontSize: "50px",
                }}
              >
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, fontSize: "20px" }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                {/* <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                /> */}
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
