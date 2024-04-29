import React from "react";
import Layout from "./Layout";
import { styled } from "styled-components";
import Typography from "@mui/material/Typography";
import WarframesPage from "./WarframePage";
import PropTypes from "prop-types";
import { useContext } from "react";
import { favoritesContext } from "./context/FavoritesProvider";

// Styled component for grid layout
const Div = styled.div`
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const WarframeFavPage = (props) => {
  const [favorites, setFavorites] = useContext(favoritesContext);
  console.log("favorite", favorites);
  console.log("props", props);
  // console.log("warframes", warframes)

  // Removes a favorite from the favorites list
  const removeFavorite = (warframe) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.name !== warframe.name)
    );
  };

  return (
    <Div>
      <h1>Warframes Favorites</h1>

      {/* {favorites.map((favorite) => (
         <div key={favorite.name} style={{ textAlign: "center" }}>
           <span>{favorite.name}</span>
           <button onClick={() => removeFavorite(favorite)}>Remove</button>
         </div>
       ))}  */}
    </Div>
  );
};

// WarframeFavPage.propTypes = {
//     favorites: PropTypes.array.isRequired,
//     setFavorites: PropTypes.func.isRequired,
//   };

export default WarframeFavPage;
