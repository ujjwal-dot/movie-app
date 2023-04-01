import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowList from "./components/ShowList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowDetails from "./components/ShowDetails";
import NotFound from "./components/NotFound";

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>
      <h1>TV Shows</h1>
      <Router>
      <Routes>
        <Route path="/" element={<ShowList shows={shows} />} />
        <Route path="/show/:id" element={<ShowDetails shows={shows} />} />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </Router>
  </div>;
};

export default App;
