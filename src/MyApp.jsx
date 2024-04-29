import { createContext, useState, useEffect, useContext } from "react";
import WarframesPage from "./components/WarframePage";

// Create the FavoritesContext
const FavoritesContext = createContext();

const MyApp = () => {
  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   // Retrieves the favorites from localStorage if they exist and sets them in the 'favorites' state
  //   const storedFavorites = localStorage.getItem("favorites");
  //   if (storedFavorites) {
  //     setFavorites(JSON.parse(storedFavorites));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Saves the 'favorites' state to localStorage whenever it changes
  //   if (typeof window !== "undefined" && localStorage) {
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //   }
  // }, [favorites]);

  return (
    // Provide the favorites state and setFavorites function to the tree using the FavoritesContext.Provider
    // <FavoritesContext.Provider value={{ favorites, setFavorites }}>
    //   <WarframesPage />
    // </FavoritesContext.Provider>
    <></>
  );
};

export default MyApp;