import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//Redux
import { useSelector } from "react-redux";
import styled from "styled-components";
//Images
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
//Import Stars
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = ({ pathId }) => {
  const navigate = useNavigate();
  const { game, screen, isLoading } = useSelector(
    (state) => state.detail || { game: {}, screen: {} }
  );
  const exitDetailsHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  //Platform Images Function
  const getPlatform = (platform) => {
    switch (true) {
      case platform.includes("Xbox"):
        return xbox;
      case platform.includes("PlayStation"):
        return playstation;
      case platform.includes("macOS"):
        return apple;
      case platform.includes("Steam"):
        return steam;
      case platform.includes("Nintendo"):
        return nintendo;
      default:
        return gamepad;
    }
  };

  //Stars Rating Logic
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star-full" src={starFull} key={i}></img>);
      } else {
        stars.push(<img alt="star-empty" src={starEmpty} key={i}></img>);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailsHandler}>
          <Detail layout="crossfade" layoutId={pathId}>
            <States>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                    ></img>
                  ))}
                </Platforms>
              </div>
            </States>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={
                  game.background_image
                    ? smallImage(game.background_image, 1280)
                    : "placeholder.jpg"
                }
                alt="images"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results?.map((screen) => (
                <img
                  src={
                    screen.image
                      ? smallImage(screen.image, 1280)
                      : "placeholder.jpg"
                  }
                  key={screen.id}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
      ;
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  position: fixed;
  top: 0%;
  left: 0%;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  padding: 2rem 5rem;
  border-radius: 1rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const States = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: inline;
    height: 2rem;
    width: 2rem;
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    padding-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetails;
