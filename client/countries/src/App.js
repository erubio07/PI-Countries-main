import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Detail from "./Views/Detail/Detail";
import Navbar from "./Components/Navbar/Navbar";
import Activity from "./Views/Activity/Activity";
import Activities from "./Views/Activities/Activities";
import Update from "./Components/UpdateActivity/Update";
import SignUp from "./Views/SignUp/SignUp";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { ProtectedRoute } from "./Components/ProtectedRoutes/ProtectedRoutes";
import Footer from "./Components/Footer/Footer";
import Favorites from "./Views/Favorites/Favorites";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AuthProvider>
        {location.pathname !== "/" && location.pathname !== "/signup" && (
          <Navbar />
        )}

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />
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
        {location.pathname !== "/" && location.pathname !== "/signup" && (
          <Footer />
        )}
      </AuthProvider>
    </div>
  );
}

export default App;
