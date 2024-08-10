import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className='container-fluid custom-container'>
        <Outlet /> {/* This is where the child components will be rendered */}
      </div>
      <Footer />
    </div>
  );
}



export default App;
