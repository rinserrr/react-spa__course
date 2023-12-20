import React from "react";


function Image({src}) {
  return (
    <React.Fragment>
      <div>
        <img width="200" height="257" src={src} alt="3D принтер" />
      </div>
    </React.Fragment>
  );
}

export default Image;
