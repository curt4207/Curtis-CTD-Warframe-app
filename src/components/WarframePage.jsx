import { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, Route, Routes, useParams } from "react-router-dom";
import WarframeDetails from "./WarframeDetails";

const WarframesPage = () => {
  const [warframes, setWarframes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.warframestat.us/warframes");
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
    <div style={{}}>
      <h1>Warframes</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0.5%",
          textAlign: "center",
        }}
      >
        {warframes.map((warframe) => (
          <Card key={warframe.name} elevation={12} sx={{ width: 460, height: 660 }}>
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
            <Link to={`/warframe/${warframe.name}`}>
              <CardContent>
              <CardMedia
                component="img"
                height="350"
                image={`https://cdn.warframestat.us/img/${warframe.imageName}`}
                alt={warframe.imageName}
              />

                <Typography variant="body2" color="text.secondary" >
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
