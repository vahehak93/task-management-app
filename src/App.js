import './App.css';
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Home from "./pages/Home";
import Boards from "./pages/Boards";
import SingleBoard from "./pages/SingleBoard";
import {ContextProvider} from "./state";
import PrivateRoute from "./components/PrivateRoute";



function App() {
  return (
      <ContextProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/boards" element={<Boards />} />
                  <Route path="/boards/:boardId" element={<SingleBoard />} />
              </Routes>
          </BrowserRouter>
      </ContextProvider>

  );
}

export default App;
