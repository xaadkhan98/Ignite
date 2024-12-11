import axios from "axios";
import { popularGamesURL } from "../api";

const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};

export default loadGames;
