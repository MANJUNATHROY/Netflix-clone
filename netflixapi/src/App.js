import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import { originals, actions, comedyMovies, horror, romance, documentary } from './urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={actions} title="Actions" isSmall />
      <Rowpost url={comedyMovies} title="Comedy" isSmall />
      <Rowpost url={horror} title="Horror" isSmall />
      <Rowpost url={romance} title="Romance" isSmall />
      <Rowpost url={documentary} title="Documentary" isSmall />

    </div>
  );
}

export default App;
