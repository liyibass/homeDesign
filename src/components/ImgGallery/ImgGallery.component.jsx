import React, { useState, useEffect, useCallback } from "react";
import "./ImgGallery.style.scss";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage.jsx";
import { photos } from "./photos";
import Button from "../Button/Button.component";
import { motion } from "framer-motion";

function ImgGallery() {
  const [sortPhotos, setSortPhotos] = useState(photos);

  const [kind, setKind] = useState([true, false, false, false, false]);

  useEffect(() => {
    // 設定選取按鍵
    const projectsKindSwitchs = document.querySelectorAll(".kindSwitch");
    for (let i = 0; i < projectsKindSwitchs.length; i++) {
      console.log(projectsKindSwitchs[i]);
      if (kind[i]) {
        projectsKindSwitchs[i].children[0].classList.add("btn-selected");
      } else {
        projectsKindSwitchs[i].children[0].classList.remove("btn-selected");
      }
    }
  }, [kind]);

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
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    []
  );

  return (
    <motion.div
      className="imgGallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="imgGallerySwitchs">
        <span
          className="kindSwitch"
          onClick={() => {
            sortHandler("Reset");
            setKind([true, false, false, false, false]);
          }}
        >
          <Button enTitle="全部" chTitle="All" />
        </span>
        <span
          className="kindSwitch"
          onClick={() => {
            sortHandler("生活");
            setKind([false, true, false, false, false]);
          }}
        >
          {" "}
          <Button enTitle="生活" chTitle="Living" />
        </span>
        <span
          className="kindSwitch"
          onClick={() => {
            sortHandler("簡約");
            setKind([false, false, true, false, false]);
          }}
        >
          {" "}
          <Button enTitle="簡約" chTitle="Simple" />
        </span>
        <span
          className="kindSwitch"
          onClick={() => {
            sortHandler("歐式");
            setKind([false, false, false, true, false]);
          }}
        >
          {" "}
          <Button enTitle="歐式" chTitle="Europe" />
        </span>
        <span
          className="kindSwitch"
          onClick={() => {
            sortHandler("現代");
            setKind([false, false, false, false, true]);
          }}
        >
          <Button enTitle="現代" chTitle="Modern" />
        </span>
      </div>
      <Gallery photos={sortPhotos} renderImage={imageRenderer} />;
    </motion.div>
  );
}

export default ImgGallery;
