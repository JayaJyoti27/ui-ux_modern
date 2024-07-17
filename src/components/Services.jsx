import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { check } from "../assets";
import Generating from "./Generating";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import {
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { Gradient } from "./design/Hero";

const Services = () => {
  const parallaxRef = useRef(null);
  return (
    <div id="how-to-use">
      <div className="container" href={parallaxRef}>
        <Heading
          title="Generative AI made for Creators"
          text="Brainwave unlocks potential of AI-powered applications "
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                src={service1}
                width={800}
                height={730}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <ScrollParallax isAbsolutelyPositioned>
              <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
            </ScrollParallax>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 t0-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI apps photo
                  editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] ">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Worlds most powerful video generation engine
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center  w-[2rem] h-[2rem] p-0.3 bg-conic-gradient rounded-2xl md:w-[3rem] md:h-[3rem]
                         bh-n-6   
                      }`}
                    >
                      <div>
                        <img src={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover "
                  width={520}
                  height={400}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </div>
  );
};

export default Services;
