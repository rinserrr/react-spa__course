import React from "react";
import "./amount.css";


function Amount() {
  return (
    <React.Fragment>
      <div className='amount'>
        Количество: <button type="button">-</button><span>1</span> <button type="button">+</button>
      </div>

    </React.Fragment>
  );
}

export default Amount;
