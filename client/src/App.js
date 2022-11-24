import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Post from "./pages/post";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user,setUser] = useState(null);
  
  useEffect(() => {
   const getUser = () =>{
     fetch("http://localhost:5000/auth/login/success",{
      method:"GET",
      credentials:"include",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json",
        "Access-control-Allow-Credentials":true,
      },
     }).then(res=>{
      if (res.status === 200) return res.json();
      throw new Error("authentication has been failed!")
     }).then(resObject => {
       setUser(resObject.user)
     }).catch(err=>{
      console.log(err)
     });
   };
   getUser();
   },[]);

   console.log(user)

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
