import Login from './components/Login';
import ShadowKingdom from './components/ShadowKingdom';
import UserDetails from './components/UserDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        ></Route>
        <Route
          path="/user"
          element={<UserDetails />}
        ></Route>
        <Route
          path="/shadow"
          element={<ShadowKingdom />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
