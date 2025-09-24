"use client";
import React from "react";
import Slider from "./Slider";
import Container from "../Container";
import style from "../../../styles/home/hero.module.css";


export default function HeroSection() {
  return (
    <Container>
      <section className={style.hero}>
        {/* Left Text Section */}
        <div className={style.textSection}>
          <h1>
            One Stop Solution <span className="text-pink-500">E-Store</span>
          </h1>
          <p>
            Discover the latest headphones, earphones, mobiles, tablets etc.
          </p>
          <p>Exclusive deals just for you!</p>
          <button className={style.ctaButton}>Shop now</button>
        </div>
        {/* Right Slider Section */}
        <div className={style.sliderSection}>
          <Slider />
        </div>
      </section>
    </Container>
  );
}
