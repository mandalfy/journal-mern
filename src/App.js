import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { StoreProvider } from './StoreContext';
import Create from './Create/Create';

const  App = () => {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
