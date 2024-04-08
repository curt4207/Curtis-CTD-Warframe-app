import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import WarframeDetails from './components/WarframeDetails';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/warframe/:warframeName" element={<WarframeDetails />} />
      </Routes>
    </Router>
    </Layout>
  );
}

export default App;
