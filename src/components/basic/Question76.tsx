import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
// ページコンポーネントを作成
function Home() {
  return <h1>Home Page</h1>;
}
 
function About() {
  return <h1>About Page</h1>;
}
 
function Contact() {
  return <h1>Contact Page</h1>;
}
 
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;