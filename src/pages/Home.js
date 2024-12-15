import React, { useEffect } from "react";
// Redux
import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
//Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
//Style and Animation
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styled from "styled-components";
import { popUp } from "../animation";

const Home = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const games = useSelector((state) => state.game);
  const { popular, upcoming, newGames, searched } = games;

  return (
    <GameList variants={popUp} initial="hidden" animate="show">
      <LayoutGroup>
        <AnimatePresence>
          {path && <GameDetails pathId={path} />}
        </AnimatePresence>
        {searched.length ? (
          <div>
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => {
                return (
                  <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    img={game.background_image}
                    key={game.id}
                  />
                );
              })}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => {
            return (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                img={game.background_image}
                key={game.id}
              />
            );
          })}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => {
            return (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                img={game.background_image}
                key={game.id}
              />
            );
          })}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => {
            return (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                img={game.background_image}
                key={game.id}
              />
            );
          })}
        </Games>
      </LayoutGroup>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
