import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import WarframeDetails from "./components/WarframeDetails";
import Layout from "./components/Layout";
import WarframeFavPage from "./components/WarframeFavPage";
import FavoritesProvider from "./components/context/FavoritesProvider";

function App() {
  return (
      <FavoritesProvider>
    <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/warframe/:warframeName"
              element={<WarframeDetails />}
            />
            <Route path="/warframefavpage" element={<WarframeFavPage />} />
          </Routes>
        </Router>
    </Layout>
      </FavoritesProvider>
  );
}

export default App;
