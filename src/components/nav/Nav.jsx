import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeItem, setActiveItem] = useState("");
  const [arrAct, setArrAct] = useState(false);
  const [subArrAct, setSubArrAct] = useState(false);

  const arr = ["Design", "Product", "Plans", "Business", "Education", "Help"];

  const subArr = {
    Design: ["UI", "UX", "Graphics"],
    Product: ["Roadmap", "Research"],
    Plans: ["Free", "Pro", "Enterprise"],
    Business: ["Partners", "Teams"],
    Education: ["Students", "Teachers"],
    Help: ["FAQ", "Support"],
  };

  const activeArrHandler = (el) => {
    setActiveItem(el);
    setSubArrAct(true);
    setArrAct(false);
  };

  return (
    
      <div className="flex justify-between">
        <div className="flex items-center">
          {/* Mobile Icon */}
          <div className="md:hidden" onClick={() => setArrAct(true)}>
            icon
          </div>

          {/* MAIN MENU SLIDE-IN */}
          <div
            className={`absolute top-0 left-0 w-[30%] h-full bg-black text-white
              transform transition-transform duration-300
              ${arrAct ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="text-right p-3" onClick={() => setArrAct(false)}>
              X
            </div>

            {arr.map((el, i) => (
              <div key={i} className="w-full text-center py-2">
                <div
                  className="cursor-pointer"
                  onClick={() => activeArrHandler(el)}
                >
                  {el}
                </div>
              </div>
            ))}
          </div>

          {/* SUB MENU SLIDE-IN */}
          <div
            className={`absolute top-0 left-0 w-[30%] h-full bg-black text-white
              transform transition-transform duration-300
              ${subArrAct ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="flex justify-between p-3">
              <div
                onClick={() => {
                  setSubArrAct(false);
                  setArrAct(true);
                }}
                className="cursor-pointer"
              >
                Back
              </div>
              <div
                onClick={() => {
                  setSubArrAct(false);
                  setArrAct(false);
                }}
                className="cursor-pointer"
              >
                X
              </div>
            </div>

            <div className="mt-5 p-3 text-xl">
              {activeItem &&
                subArr[activeItem].map((child, i) => (
                  <div key={i} className="py-2">
                    {child}
                  </div>
                ))}
            </div>
          </div>

          <div className="text-3xl font-bold ml-4">Logo</div>
        </div>

        {/* Desktop menu */}
        <div className="md:flex justify-around w-[500px] hidden">
          {arr.map((el) => (
            <div key={el}><Link to={`/${el.toLowerCase()}`}>{el}</Link></div>
          ))}
        </div>

        <div className="flex">
          <div className="md:block hidden">Sign up</div>
          <div>Log in</div>
        </div>
      </div>
  );
};

export default Nav;
