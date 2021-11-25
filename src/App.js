
import React from "react";
import './App.css';
import Form from './components/Form';
import Home from './pages/Home'
import Admin from './pages/Admin/pageOne'

import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  Navigate,
  Outlet
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <MyMenu />
      <Routes>
              <Route path="/" element={<Home />} />
              {/* common component */}
              <Route path="/employee" element={<Admin />} />
       
              <Route path="/Admin" element={<Admin />} />
              {/* Talent component */}
        <Route path="/talent" element={<Talent />}>
          <Route path="" element={<Private />} />
        </Route>
        <Route
          path="/private-nested"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

// const Home = () => <div>Home</div>;
const Private = () => <div> < Admin/> </div>;
// const Login = () => <div>lo gin</div>;

function Talent() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

function useAuth() {
  return false;
}

function MyMenu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/talent"> talent</Link>
      {" | "}
          <Link to="/employee">empolyee</Link>
          {" | "}
         <Link to="/Admin">Admin</Link>

    </nav>
  );
}

