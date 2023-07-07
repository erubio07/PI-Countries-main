import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Detail from "./Views/Detail/Detail";
import Navbar from "./Components/Navbar/Navbar";
import Activity from "./Views/Activity/Activity";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route extact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries/:id" element={<Detail />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </div>
  );
}

export default App;
