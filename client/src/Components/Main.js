// PictureAndParagraph.js
import React from 'react';

const PictureAndParagraph = () => {
  const cont={
    display:"grid",
    gridTemplateRows:"repeat(1fr,1)",
    gridTemplateColumns:"repeat(1fr,2)",
    // gap:"5%"
  }
  const one={
    gridArea:"1/1/1/1",
    border:"1px solid black",
    height:"60vh"
  }
  const two={
    gridArea:"1/2/1/2",
    border:"1px solid red",
    height:"60vh"

  }
  return (
<>
<div style={cont}> 
<div style={one}>
  
  </div>
  <div style={two}>
  </div>
  </div>
</>
  );
};

export default PictureAndParagraph;
