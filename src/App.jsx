import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarframePage from './components/WarframePage';
import HomePage from './HomePage';
import WarframeDetails from './components/WarframeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/warframe/:warframeName" element={<WarframeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
