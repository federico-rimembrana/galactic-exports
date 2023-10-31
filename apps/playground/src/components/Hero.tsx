import marvinLogo from "../assets/marvin.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero--content">
        <h1>
          Galactic Guide for <br /> library exports
        </h1>
        <p className="tagline">
          A journey into CJS, ESM and multi-entry galaxy
        </p>
      </div>
      <div className="hero--image-container">
        <img src={marvinLogo} className="logo" alt="Marvin" />
      </div>
    </section>
  );
};

export default Hero;
