import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import Trending from "ui/Trending";


function App() {
  return (
    <BrowserRouter>
    
    <div className="app">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/trending" component={Trending} />
    </div>
    </BrowserRouter>

  );
}

export default App;