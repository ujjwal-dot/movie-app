import React from "react";
import { Link } from "react-router-dom";

const ShowList = ({ shows }) => {
  return (
    <div>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h3>{show.show.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: show.show.summary }}></p>
          <Link to={`/show/${show.show.id}`}>View Summary</Link>
        </div>
      ))}
    </div>
  );
};


export default ShowList
  