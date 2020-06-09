import React, { useState, useEffect } from "react";

const imgStyle = {
  transition: "transform 2s cubic-bezier(0.0,0.0,0.2,1),opacity linear 2s",
};

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
};

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
}) => {
  const handleOnClick = (e) => {
    // setIsSelected(!isSelected);
  };

  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={"not-selected"}
    >
      {/* <Checkmark selected={isSelected ? true : false} /> */}

      <a href={photo.destination}>
        <img
          alt={photo.title}
          style={imgStyle}
          {...photo}
          onClick={handleOnClick}
        />
      </a>
    </div>
  );
};

export default SelectedImage;
