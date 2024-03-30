import { useEffect, useState } from 'react';

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
console.log("warframes", warframes)
  return (
    <div>
      <h1>Warframes</h1>
      {warframes.map((warframe) => (
        <div key={warframe.name}>
          <h2>{warframe.name}</h2>
          <img
            src={`https://cdn.warframestat.us/img/${warframe.imageName}`}
            alt="image"
            height={100}
            width={100}
          />
          <p>{warframe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Warframes;