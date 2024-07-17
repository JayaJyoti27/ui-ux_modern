import React from "react";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Pricinglist from "./Pricinglist";
import { LeftLine, RightLine } from "./design/Pricing";
const Pricing = () => {
  return (
    <div className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1 mt-20"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2  pointer-events-none">
            <img src={stars} className="w-full" width={950} height={400} />
          </div>
        </div>
        <Heading
          tag="Get started with brainwave"
          title="Pay once ,use forever"
        />
        <div className="relative">
          <Pricinglist />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
