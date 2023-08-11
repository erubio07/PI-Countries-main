import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Detail from "./Views/Detail/Detail";
import Navbar from "./Components/Navbar/Navbar";
import Activity from "./Views/Activity/Activity";
import Activities from "./Views/Activities/Activities";
import Update from "./Components/UpdateActivity/Update";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { ProtectedRoute } from "./Components/ProtectedRoutes/ProtectedRoutes";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AuthProvider>
        {location.pathname !== "/" && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/countries/:id"
            element={<ProtectedRoute element={<Detail />} />}
          />
          <Route
            path="/activity"
            element={<ProtectedRoute element={<Activity />} />}
          />
          <Route
            path="/activities"
            element={<ProtectedRoute element={<Activities />} />}
          />
          <Route
            path="/:id/update"
            element={<ProtectedRoute element={<Update />} />}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
