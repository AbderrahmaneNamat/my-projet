import React, { useEffect, useState } from "react";
import earth from "../../assets/imgs/earth.png";
import facebookIcon from "../../assets/imgs/facebook.png";
import instagramIcon from "../../assets/imgs/instagram.png";
import youtubeIcon from "../../assets/imgs/youtube.png";
const FloatingIcon = ({ src, className, delay }) => {
  return (
    <img
      src={src}
      className={ ` absolute w-10 rounded-lg animate-floating ${className}`}
      style={{ animationDelay: `${delay}s` }}
      alt=""
    />
  );
};

const Hero = () => {
  const [scale, setScale] = useState(4);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 4- scrollY * 0.08;

      setScale(newScale < 0 ? 2: newScale); // limit zoom

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="  ">
      {console.log(scale)}
      {/* Globe with zoom effect */}
      <div className=" flex justify-center">
        
      <img
        src={earth}
        className="  w-40 transition-transform duration-500 mt-50"
        style={{ transform: `scale(${scale})` }}
        alt=""
        />        
      </div>

      {/* Floating icons */}
      <FloatingIcon src={facebookIcon} className="-top-[60%] left-[50%]" delay={0} />
      <FloatingIcon src={instagramIcon} className="top-[60%] left-[30%] z-20" delay={1} />
      <FloatingIcon src={facebookIcon} className="top-[60%] right-[30%]" delay={2} />
      <FloatingIcon src={youtubeIcon} className="bottom-[30%] right-[20%]" delay={3} />
    </div>
  );
};

export default Hero;
