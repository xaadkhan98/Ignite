import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

const loadDetails = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));

  console.log(screenshotData);

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};

export default loadDetails;
