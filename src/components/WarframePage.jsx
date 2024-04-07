// Import necessary dependencies from React and Material-UI
import { useEffect, useState } from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import WarframePage from './WarframePage';
import WarframeDetails from './WarframeDetails';

// Define the Warframes component
const Warframes = () => {
  // State to store the warframes
  const [warframes, setWarframes] = useState([]);

  // Fetch warframes data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.warframestat.us/warframes');
        const data = await response.json();
        setWarframes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Log the warframes array to the console
  console.log("warframes", warframes);

  return (
    <div>
      <h1>Warframes</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5%", textAlign: "center" }}>
        {/* Render a Card component for each warframe */}
        {warframes.map((warframe) => (
          <Link key={warframe.name} to={`/warframe/${warframe.name}`}>
            <Card elevation={12} sx={{ maxWidth: 465,}}>
              <h2>{warframe.name}</h2>
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
              <CardMedia
                component="img"
                height="350"
                image={`https://cdn.warframestat.us/img/${warframe.imageName}`}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">{warframe.description}</Typography>
                <h3>Abilities:</h3>
                <ul>
                  {warframe.abilities.map((ability, index) => (
                    <li key={index}>
                      <h4>{ability.name}</h4>
                      <p>{ability.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {/* Define a route for each warframe */}
      <Routes>
        <Route path="/warframes/:warframeName" element={<WarframeDetails warframes={warframes} />} />
      </Routes>
    </div>
  );
};

export default Warframes;