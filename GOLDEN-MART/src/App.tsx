import MobNavbar from "./components/MobNavbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
      <main>
      <Navbar />
      <MobNavbar />
      <Hero />
      </main>
      <Route path="/LoginPage" element={<LoginPage/>} />
      </Routes>
    </Router>
    
  );
};

export default App;