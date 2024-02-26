import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/site/siteLayout"

import Dashboard from './pages/client/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SiteLayout>
              <Dashboard />
            </SiteLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
