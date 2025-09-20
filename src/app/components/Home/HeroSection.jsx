"use client";
import React from "react";
import Slider from "./Slider";
import Container from "../Container";
import Styles from "@/styles/home/hero.module.css";

export default function HeroSection() {
  return (
    <Container>
      <section className={Styles.hero}>
        {/* Left Text Section */}
        <div className={Styles.textSection}>
          <h1>
            One Stop Solution <span className="text-pink-500">E-Store</span>
          </h1>
          <p>
            Discover the latest headphones, earphones, mobiles, tablets etc.
          </p>
          <p>Exclusive deals just for you!</p>
          <button className={Styles.ctaButton}>Shop now</button>
        </div>
        {/* Right Slider Section */}
        <div className={Styles.sliderSection}>
          <Slider />
        </div>
      </section>
    </Container>
  );
}
