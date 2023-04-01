import React from "react";

const ShowSummary = ({ show }) => {
    return (
      <div>
        <h2>{show.name}</h2>
        <img src={show.image.medium} alt={show.name} />
        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
       
      </div>
    );
  };

export default ShowSummary