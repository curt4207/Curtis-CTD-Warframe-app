import React, { useEffect, useState, useContext } from "react";
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import WarframeDetails from "./WarframeDetails";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import WarframeFavPage from "./WarframeFavPage";
import { favoritesContext } from "./context/FavoritesProvider";

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  width: "300px",
  color: "black",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px"
}));

const WarframesPage = () => {
  const [warframes, setWarframes] = useState([]);
  const [favorites, setFavorites] = useContext(favoritesContext);
  const navigate = useNavigate();

  // Fetches warframes data from the API and stores it in the state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.warframestat.us/warframes");
        const data = await response.json();
        setWarframes(data);

        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Handles the click event for favoriting or unfavoriting a warframe
  const handleFavoriteClick = (warframe) => {
    const isFavorite = favorites.some((favorite) => favorite.name === warframe.name);
    // console.log("warframe", warframe)
    if (isFavorite) {
      setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.name !== warframe.name));
    } else {
      console.log("warframe", warframe)
      if (favorites.length < 10) {
        setFavorites((prevFavorites) => [...prevFavorites, warframe]);
      }
    }
  };
  console.log("favorites", favorites)
 
  // Stores the favorites in localStorage when they change
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  // Removes a favorite from the favorites list
  const removeFavorite = (warframe) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.name !== warframe.name));
  };

  return (
    <div>
      <h1>Warframes</h1>
      {/* Renders the list of favorites with a button to remove each favorite */}
      <Div>
        {favorites.map((favorite) => (
          <div key={favorite.name} style={{ textAlign: "center" }}>
            <span>{favorite.name}</span>
            <button onClick={() => removeFavorite(favorite)}>Remove</button>
          </div>
        ))}
      </Div>
      {/* Displays the warframes grid with their respective information and buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5%", textAlign: "center" }}>
        {warframes.map((warframe) => {
          const isFavorite = favorites.some((favorite) => favorite.name === warframe.name);

          return (
            <Card key={warframe.name} elevation={7} sx={{ width: 460, height: 750 }}>
              <h2>{warframe.name}</h2>
              <button onClick={() => handleFavoriteClick(warframe)}>
                {isFavorite ? "Remove from Favorites" : "Favorite"}
              </button>
              <CardHeader
                avatar={
                  <Avatar
                    src={`https://cdn.warframestat.us/img/${warframe.imageName}`}
                    alt="image"
                    height={100}
                    width={100}
                  />
                }
              />
              <Link to={`/warframe/${warframe.name}`}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="350"
                    image={`https://cdn.warframestat.us/img/${warframe.imageName}`}
                    alt={warframe.imageName}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                    {warframe.description}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
      {/* Routes for individual warframe details and favorite warframes page */}
      <Routes>
        <Route path="/warframe/:warframeName" element={<WarframeDetails warframes={warframes} />} />
        <Route path="/favorites" element={<WarframeFavPage favorites={favorites} removeFavorite={removeFavorite} />} />
      </Routes>
      {/* Navigation link to the favorite warframes page */}
      <Link to="/favorites">View Favorites</Link>
    </div>
  );
};

export default WarframesPage;