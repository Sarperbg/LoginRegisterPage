import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Routes
// import PublicRoutes from "./routes/PublicRoutes";
// import PrivateRoutes from "./routes/PrivateRoutes";
// CONTEXT
import FirebaseContext from "./context/FirebaseContext";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
function App() {
  const { authToken } = useContext(FirebaseContext);

  if (!authToken) {
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate to={"auth"} />} />
          <Route path="/auth/*" element={<PublicRoutes />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<PrivateRoutes />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
