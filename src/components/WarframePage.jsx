import { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import WarframeDetails from "./WarframeDetails";
import FavoriteIcon from '@mui/icons-material/Favorite';

const WarframesPage = () => {
  const [warframes, setWarframes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetches the data from the API and sets it in the 'warframes' state
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.warframestat.us/warframes");
        const data = await response.json();
        setWarframes(data);

        // Retrieves the favorites from localStorage if they exist and sets them in the 'favorites' state
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

  const handleFavoriteClick = (warframe) => {
    // Adds the selected warframe to the 'favorites' state if the number of favorites is less than 10
    if (favorites.length < 10) {
      setFavorites((prevFavorites) => [...prevFavorites, warframe]);
    }
  };

  useEffect(() => {
    // Saves the 'favorites' state to localStorage whenever it changes
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <div>
      <h1>Warframes</h1>
      {/* Displays the list of favorite warframe names */}
      {favorites.map((favorite) => (
        <li key={favorite.name}>{favorite.name}</li>
      ))}
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5%", textAlign: "center"}}>
        {warframes.map((warframe) => (
          <Card key={warframe.name} elevation={12} sx={{ width: 460, height: 660 }}>
            <h2>{warframe.name}</h2>
            <button onClick={() => handleFavoriteClick(warframe)}>Favorite</button>
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
                <Typography variant="body2" color="text.secondary">
                  {warframe.description}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <Routes>
        <Route
          path="/warframes/:warframeName"
          element={<WarframeDetails warframes={warframes} />}
        />
      </Routes>
    </div>
  );
};

export default WarframesPage;