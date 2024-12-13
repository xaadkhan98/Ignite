import { motion } from "framer-motion";
import React from "react";

//Redux
import { useSelector } from "react-redux";
import styled from "styled-components";

const GameDetails = () => {
  const { game, screen } = useSelector(
    (state) => state.detail || { game: {}, screen: {} }
  );
  return (
    <>
      <CardShadow>
        <Detail>
          <States>
            <div className="rating">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
            <div className="info">
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms?.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
              </Platforms>
            </div>
          </States>
          <Media>
            <img src={game.background_image} alt="images" />
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <div className="gallery">
            {screen.results?.map((screen) => (
              <img src={screen.image} key={screen.id} alt="game" />
            ))}
          </div>
        </Detail>
      </CardShadow>
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
