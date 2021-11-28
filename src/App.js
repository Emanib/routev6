
import React from "react";
import './App.css';
import Form from './components/Form';
import Home from './pages/Home'
import Admin from './pages/Admin/pageOne'
import Admin2 from './pages/Admin/pageThree'
import Admin1 from './pages/Admin/pageTwo'
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
        {/* nested routes admin */}
      { NestedAdmin()}
              {/* <Route path="/Admin" element={<Admin />} /> */}
              {/* Talent component */}
        <Route path="/talent" element={<Form />}>
          <Route path="" element={<Private />} />
        </Route>
        {/* <Route
          path="/private-nested"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Form />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// const Home = () => <div>Home</div>;
const Private = () => <div> < Admin/> </div>;
// const Login = () => <div>lo gin</div>;
const NestedAdmin =() =>
{
  
  return (

    <Route path="/Admin" element={<Outlet />}>
           <Route index element={<Admin/>} />
            <Route path="Admin1" element={<Admin1/>} />
            <Route path="Admin2" element={<Admin2/>} />
            <Route path=":id" element={<div> hello admin </div>} /> 

    </Route>
  )
}

// function Talent() {
//   const auth = useAuth();
//   return auth ? <Outlet /> : <Navigate replace to="/login" />;
// }

// function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }

function useAuth() {
  return false;
}

function MyMenu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}


    </nav>
  );
}

