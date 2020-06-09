import React, { useState, useEffect, useCallback } from "react";
import "./ImgGallery.style.scss";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage.jsx";
import { photos } from "./photos";
function ImgGallery() {
  const [input, setInput] = useState("");
  const [sortPhotos, setSortPhotos] = useState(photos);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    let newPhotos = photos.filter((item) => {
      return item.kind === input;
    });

    if (newPhotos.length) {
      setSortPhotos(newPhotos);
    }
    // console.log(newPhotos);
  }, [input]);

  let SearchHandler = (event) => {
    setInput(event.target.value);
  };

  let sortHandler = (kindName) => {
    if (kindName !== "Reset") {
      let newPhotos = photos.filter((item) => {
        return item.kind === kindName;
      });
      setSortPhotos(newPhotos);
    } else {
      setSortPhotos(photos);
    }
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [selectAll]
  );

  return (
    <div className="imgGallery">
      <button onClick={() => sortHandler("Reset")}>Reset</button>
      <button onClick={() => sortHandler("AA")}>AA</button>
      <button onClick={() => sortHandler("BB")}>BB</button>
      <button onClick={() => sortHandler("CC")}>CC</button>
      <button onClick={() => sortHandler("DD")}>DD</button>
      <input type="text" value={input} name="input" onChange={SearchHandler} />
      <Gallery photos={sortPhotos} renderImage={imageRenderer} />;
    </div>
  );
}

export default ImgGallery;
