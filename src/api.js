// Base URL
const baseURL = "https://api.rawg.io/api/";
const apiKey = process.env.REACT_APP_RAWG_API;

//Getting the Dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1; // Add 1 to get the correct month
  return month < 10 ? `0${month}` : `${month}`;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : `${day}`;
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

// Complete dates
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popularGames = `games?key=${apiKey}&dates=${lastYearDate},${currentDate}&ordering=-added`;
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYearDate}&ordering=-added`;
const newGames = `games?key=${apiKey}&dates=${lastYearDate},${currentDate}&ordering=-released`;

export const popularGamesURL = () => {
  return `${baseURL}${popularGames}`;
};
export const upcomingGamesURL = () => {
  return `${baseURL}${upcomingGames}`;
};
export const newGamesURL = () => {
  return `${baseURL}${newGames}`;
};

export const gameDetailsURL = (game_id) => {
  return `${baseURL}games/${game_id}?key=${apiKey}`;
};
export const gameScreenshotURL = (game_id) => {
  return `${baseURL}games/${game_id}/screenshots?key=${apiKey}`;
};
