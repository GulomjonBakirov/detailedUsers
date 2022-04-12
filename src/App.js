import { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Components */

import Main from "./components/Main";
import Registration from "./components/Registration";
import Login from "./components/Login";
import MoreInfo from "./components/MoreInfo";
import Profile from "./components/Profile";
import Navbar from "./components/Layout/Navbar";
import SiteHeader from "./components/Layout/SiteHeader";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState({});

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  console.log(user);

  return (
    <div>
      <Router>
        <Layout>
          <Navbar collapsed={collapsed} />
          <Layout className="site-layout">
            <SiteHeader collapsed={collapsed} toggle={toggle} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/user/:id" element={<MoreInfo />} />
              <Route
                path="/register"
                element={<Registration setUser={setUser} />}
              />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/profile" element={<Profile user={user} />} />
            </Routes>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
