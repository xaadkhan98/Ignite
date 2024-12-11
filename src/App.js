import React, { useEffect } from "react";
import loadGames from "./actions/gamesAction";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);
  return (
    <>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
    </>
  );
};

export default App;
