import React from "react";


function Image({src, alt}) {
  return (
    <React.Fragment>
      <div>
        <img width="200" height="257" src={src} alt={alt} />
      </div>
    </React.Fragment>
  );
}


export default Image;
