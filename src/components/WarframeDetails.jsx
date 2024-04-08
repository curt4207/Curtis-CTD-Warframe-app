import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { styled } from "styled-components";
import Typography from "@mui/material/Typography";

// Styled component for grid layout
const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const WarframeDetails = () => {
  const [warframeData, setWarframeData] = useState(null);
  const { warframeName } = useParams();

  useEffect(() => {
    // Fetch Warframe data when the component mounts or when warframeName changes
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.warframestat.us/warframes/${warframeName}`
        );
        const data = await response.json();
        setWarframeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [warframeName]); // Add warframeName as a dependency to the useEffect dependency array

  // Render loading message if warframeData is not available yet
  if (!warframeData || Object.keys(warframeData).length === 0) {
    return <div>Loading...</div>;
  }

  console.log("warframeName", warframeName);
  console.log("warframeData", warframeData);

  return (
    <div>
      {/* Display Warframe name */}
      <h1>{warframeData.name}</h1>
      
      {/* Display Warframe introduced date */}
      <Typography>Introduced Date {warframeData.introduced.date}</Typography>
      
      {/* Display Warframe image */}
      <Avatar
        src={`https://cdn.warframestat.us/img/${warframeData.imageName}`}
        alt="image"
        sx={{ width: 640, height: 640 }}
      />
      
      {/* Display Warframe category */}
      <p>Category {warframeData.category}</p>
      
      <div>
        {/* Display Warframe description */}
        <p>Description {warframeData.description}</p>
      </div>
      
      <Div1>
        {/* Display Warframe stats */}
        <p>Armor {warframeData.armor}</p>
        <p>Health {warframeData.health}</p>
        <p>Aura {warframeData.aura}</p>
        <p>bp Cost {warframeData.bpCost}</p>
        <p>Build Time {warframeData.buildTime}</p>
      </Div1>
      
      <h3>Abilities:</h3>
      <ul>
        {/* Map through Warframe abilities and display their names and descriptions */}
        {warframeData.abilities.map((ability, index) => (
          <li key={index}>
            <h4>{ability.name}</h4>
            <p>{ability.description}</p>
          </li>
        ))}
      </ul>
      
      {/* Display Warframe description again */}
      <p>{warframeData.description}</p>
    </div>
  );
};

export default WarframeDetails;