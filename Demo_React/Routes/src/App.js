import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacts } from "./Components/Contacts";
import { Info } from "./Components/Info";
import { HomePage } from "./Components/HomePage";
import { Menu } from "./Components/Menu";
import { useState } from "react";
import { Login } from "./Components/Login";
import { Navigate } from "react-router-dom";

import "./App.css";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        {user && <Menu></Menu>}
        <Routes>
          <Route
            path="/home"
            element={
              <VerificaUser user={user}>
                <HomePage></HomePage>
              </VerificaUser>
            }
          />
          <Route
            path="/contacts"
            element={
              <VerificaUser user={user}>
                <Contacts /*user={user}*/></Contacts>
              </VerificaUser>
            }
          />
          <Route
            path="/info/:id"
            element={
              <VerificaUser user={user}>
                <Info user={user}></Info>
              </VerificaUser>
            }
          />
          <Route path="/*" element={<Login doLogin={setUser}></Login>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Forma + correta em vez de passar o utilizador para cada componente
function VerificaUser({ user, children }) {
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
}

export default App;
