import axios from 'axios';
import { Link } from 'react-router-dom';
import WarframePage from './components/WarframePage';
import { useState, useEffect } from 'react';
import WarframeDetails from './components/WarframeDetails';

const HomePage = () => {
  const [warframes, setWarframes] = useState([]);

  const [search, setSearch] = useState('');

  const filteredWarframes = warframes.filter(warframe =>
    warframe.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.warframestat.us/warframes');
        setWarframes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log("filteredWarframes", filteredWarframes)
  return (
    <div>
      {/* Search bar and warframe list */}
       {/* Search bar */}
       <input
        type="text"
        placeholder="Search Warframes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Render WarframeDetails if a warframe is selected */}
      {search && (
        <WarframeDetails warframeName={search} />
      )}
   
    
      <WarframePage/>
    

    </div>
  );
};

export default HomePage;
