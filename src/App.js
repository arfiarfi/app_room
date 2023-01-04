import Register from "./pages/Register";
import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Landingpage from "./pages/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./component/Topbar";
import Test from "./component/Test";
// import Coba from "./pages/Coba";
// import Coba2 from "./pages/Coba2";

import Chat from "./pages/Chat";
import Class from "./pages/Class";
import Group from "./pages/Group";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Landingpage />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<Test />}>
          <Route path="chat" element={<Chat />} />
          <Route path="class" element={<Class />} />
          <Route path="group" element={<Group />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
