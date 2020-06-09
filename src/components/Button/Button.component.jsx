import React from "react";
import "./Button.style.scss";

function Button({ enTitle, chTitle }) {
  return (
    <div className="btn">
      <h3 className="btn-en">{enTitle}</h3>
      <h3 className="btn-ch">{chTitle}</h3>
    </div>
  );
}

export default Button;
