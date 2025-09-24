"use client";
import React, { useState, useEffect } from "react";
import style from "../../../styles/home/hero.module.css";

import Image from "next/image";

const images = [
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.imageSection}>
      <div className={style.Slider}>
        {images[currentIndex] && (
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={style.slide}
            width={800}
            height={400}
            priority
          />
        )}
      </div>
    </div>
  );
}
