import { useParams } from 'react-router-dom';

const WarframePage = ({ warframes }) => {
    const { warframeName } = useParams();
    const warframe = warframes.find((w) => w.name === warframeName);
  
    return (
      <div>
        <h1>{warframeName}</h1>
        <h2>{warframe?.name}</h2>
        {/* Display additional warframe details */}
      </div>
    );
  };
export default WarframePage;
