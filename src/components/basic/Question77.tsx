import React from "react";  
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
 
type NavigationProps = {
  className?: string;
};

function Navigation({ className }: NavigationProps) {
  return (
    <nav className={className}>
      <Link to="/">Home</Link>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
    </nav>
  );
}
 
function Home() {
  return <h1>Home Page</h1>;
}
 
function About() {
  return <h1>About Page</h1>;
}
 
function Services() {
  return <h1>Services Page</h1>;
}
 
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <main>
          <Routes>
             <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
