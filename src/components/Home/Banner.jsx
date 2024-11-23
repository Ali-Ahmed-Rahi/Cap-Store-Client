import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.theupstudio.com/img/hatclub/the-up-studio-architects-designers-hat-club-soho-modular-retail-store-shop-nyc-large.jpg)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-55"></div>
        <div className="hero-content text-white text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">.....WELCOME TO..... <br/>OUR <br />CAP STORE</h1>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
