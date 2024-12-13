import react from "react";
//Style and Animation
import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import loadGames from "../actions/gamesAction";
import loadDetails from "../actions/detailAction";

const Game = ({ name, released, id, img, key }) => {
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={img} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
