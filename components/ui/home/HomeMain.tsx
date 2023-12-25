"use client";
import Lottie from "react-lottie";
import animationData from "../../../public/styles/lotties/about.json";

type HTypes = {};

const HomeMain: React.FC<HTypes> = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="dark:text-red-200">
        {/* <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      /> 
    </div> */}
        <div
          className="hero min-h-[95vh]"
          style={{
            backgroundImage:
              "url(../../../public/styles/images/code.jpg)",
              width:"100%",
              height:"100%"
          }}
          >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
