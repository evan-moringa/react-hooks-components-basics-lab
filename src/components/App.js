import React from "react";

function NavBar() {
  return (
    <div id="navbar">
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
    </div>
  );
}

function Home() {
  return (
    
    <div id="home">
      <h2>Home</h2>
    </div>
    
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />

      <Home />

      <About />
    </div>
  );
}

export default App;
