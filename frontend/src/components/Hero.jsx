import React from "react";
import landing from "../assets/landing.png";
import landing2 from "../assets/landing2.png";
import arrow from "../assets/arrow3.png";
import person from "../assets/person.png";

const Hero = () => {
  return (
    <>
      {/* Mobile View */}
      <section id="home">
      <div className="lg:hidden flex flex-col justify-between px-4 pt-20">
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 text-center">
            Challenge Your <br /> Knowledge Beyond <br /> Limits
          </h1>

          <p className="text-sm md:text-lg font-medium text-center mb-6">
            Dive into a variety of quizzes tailored to your <br /> interests and
            skill levels. Ready to test your limits?
          </p>

          <div className="flex justify-center">
            <button
              className="bg-[#fbc72e] text-black text-sm md:text-lg font-medium px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-yellow-500 transition"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Mobile App Coming Soon - Circular Design */}
            <div className="absolute bottom-0 left-0 flex items-center justify-center w-20 h-20 md:w-28 md:h-28 border-2 border-yellow-400 rounded-full">
              <p className="text-center text-black text-[8px] sm:text-[12px] md:text-[12px] font-semibold">
                Mobile app <br /> coming soon!
              </p>
            </div>
            <img src={landing2} alt="Mobile Hero" className="w-full mt-6" />
          </div>

          <div
            className="rounded-lg p-4 w-64 md:w-72 my-4"
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderImage:
                "linear-gradient(to bottom left, rgba(251, 199, 46, 1), rgba(251, 199, 46, 0)) 1",
            }}
          >
            <div className="mb-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, idx) => (
                  <img
                    key={idx}
                    src={person}
                    alt={`Team member ${idx + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <span className="font-normal text-xl md:text-2xl">
                  Powered by
                </span>
                <span className="font-medium text-2xl md:text-4xl mx-2">
                  15
                </span>
                <span className="font-normal text-xl md:text-2xl">minds</span>
              </div>
            </div>
            <p className="text-gray-700 text-xs md:text-sm">
              This app is a testament to the dedication and creativity of 15
              incredible minds, united to empower students through engaging
              quizzes.
            </p>
            <div className="flex justify-end mt-2">
              <img
                src={arrow}
                alt="Arrow icon"
                className="w-4 h-4"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div
        className="hidden lg:block bg-cover bg-center lg:h-screen w-full pt-10"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="inset-0 bg-gradient-to-r via-white/80 to-transparent flex flex-col lg:flex-row h-full p-8 md:p-16">
          {/* Left Section */}
          <div className="w-full text-black flex flex-col items-center lg:items-start justify-center gap-y-6">
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight mb-4 text-center lg:text-left">
              Challenge Your <br /> Knowledge Beyond <br /> Limits
            </h1>
            <p className="text-lg lg:text-2xl font-regular text-center lg:text-left mb-4">
              Dive into a variety of quizzes tailored to your <br /> interests
              and skill levels. Ready to test your limits?
            </p>
            <button
              className="hidden md:flex items-center bg-[#fbc72e] text-black text-lg lg:text-2xl font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full h-full flex flex-col justify-center items-center relative">
            {/* App Coming Soon Badge */}
            <div className="absolute top-6 right-0 flex items-center justify-center w-40 h-40 border-2 border-yellow-400 rounded-full">
              <p className="text-center text-black text-sm lg:text-lg font-semibold">
                Mobile app <br /> coming soon!
              </p>
            </div>

            {/* Powered by 15 minds */}
            <div
              className="absolute bottom-0 right-0 xl:bottom-0 rounded-lg p-4 w-64 lg:w-72"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to bottom left, rgba(251, 199, 46, 1), rgba(251, 199, 46, 0)) 1",
              }}
            >
              <div className="mb-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, idx) => (
                    <img
                      key={idx}
                      src={person}
                      alt={`Team member ${idx + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <span className="font-normal text-xl lg:text-2xl">
                    Powered by
                  </span>
                  <span className="font-medium text-2xl lg:text-4xl mx-2">
                    15
                  </span>
                  <span className="font-normal text-xl lg:text-2xl">minds</span>
                </div>
              </div>
              <p className="text-gray-700 text-xs lg:text-sm">
                This app is a testament to the dedication and creativity of 15
                incredible minds, united to empower students through engaging
                quizzes.
              </p>
              <div className="flex justify-end mt-2">
                <img
                  src={arrow}
                  alt="Arrow icon"
                  className="w-4 h-4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Hero;
