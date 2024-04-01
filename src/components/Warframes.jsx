import { useEffect, useState } from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom';
import WarframePage from './WarframePage';


const Warframes = () => {
  const [warframes, setWarframes] = useState([]);

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

  console.log("warframes", warframes);

  return (
    <Router>
      <Routes>
        <Route path="/warframes/:warframeName" element={<WarframePage warframes={warframes} />} />
      </Routes>
      <div>
        <h1>Warframes</h1>
        <div style={{ display: "grid", gridTemplateColumns: "0.5fr 0.5fr 0.5fr", textAlign: "center" }}>
          {warframes.map((warframe) => (
            <Link key={warframe.name} to={`/warframes/${warframe.name}`}>
              <Card
                elevation={12}
                sx={{ maxWidth: 465, marginBottom: 10 }}
              >
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default Warframes;