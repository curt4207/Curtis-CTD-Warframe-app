import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WarframeDetails = () => {
  const [warframeData, setWarframeData] = useState(null);
  const { warframeName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.warframestat.us/warframes/${warframeName}`);
        const data = await response.json();
        setWarframeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [warframeName]); // Add warframeName as a dependency to the useEffect dependency array

  if (!warframeData || Object.keys(warframeData).length === 0) {
    return <div>Loading...</div>;
  }

  console.log("warframeName", warframeName);

  return (
    <div>
      <h1>Warframe Page</h1>
      <h2>{warframeData.name}</h2>
      <h3>Abilities:</h3>
      <ul>
        {warframeData.abilities.map((ability, index) => (
          <li key={index}>
            <h4>{ability.name}</h4>
            <p>{ability.description}</p>
          </li>
        ))}
      </ul>
      <img src={warframeData.image} alt={warframeData.name} />
      <p>{warframeData.description}</p>
    </div>
  );
};

export default WarframeDetails;