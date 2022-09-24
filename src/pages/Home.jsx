import React from "react";
import {
  CreateEventButtonBig,
  CreateEventButtonSmall,
  CustomImage,
  HomeParent,
  HomeSection,
  ImageSection,
  TextCaption,
  TextHeading,
  TextHeadinggGradient,
  TextParent,
  TextSection,
} from "./styles/Home.styles";
import LandingPage from "../assets/landing-page.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate("/create");
  };
  return (
    <HomeParent>
      <HomeSection>
        <ImageSection>
          <CustomImage src={LandingPage} alt="Landing page"></CustomImage>
          <CreateEventButtonSmall onClick={handleCreateEvent}>
            🎉 &nbsp;Create my event
          </CreateEventButtonSmall>
        </ImageSection>
        <TextParent>
          <TextSection>
            <TextHeading>
              Imagine if<TextHeadinggGradient>Snapchat</TextHeadinggGradient>{" "}
              had events.
            </TextHeading>
            <TextCaption>
              Easily host and share events with your friends across any social
              media.
            </TextCaption>
          </TextSection>
          <CreateEventButtonBig onClick={handleCreateEvent}>
            🎉 &nbsp;Create my event
          </CreateEventButtonBig>
        </TextParent>
      </HomeSection>
    </HomeParent>
  );
};

export default Home;
