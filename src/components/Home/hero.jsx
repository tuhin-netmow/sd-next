import React from "react";

export default function Hero() {
  return (
    <>
      <section className="sqdk-hero">
        <div className="container">
          <div className="sqdk-hero-content">
            <div className="sqdk-hero-left">
              <div className="sqdk-hero-text-content">
                <h3
                  className="wow animate__animated animate__fadeInDown"
                  data-wow-delay=".1s"
                >
                  #1 Sports Club Management Software
                </h3>
                <h1
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  Sports Academy Management Made Simple
                </h1>
                <div
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-delay="1s"
                >
                  <ul className="hero-features-lists">
                    <li>Individual Player and Team management</li>
                    <li>Live Chat, dedicate website with mobile Apps</li>
                    <li>Sports equipment based Shop management</li>
                  </ul>
                </div>
                <div
                  className="sqdk-hero-btn-container wow animate__animated animate__fadeInUp"
                  data-wow-delay="1.5s"
                >
                  <a
                    href="/register"
                    className="btn-common btn-primary btn-hero mt-btn"
                  >
                    Book A Free Demo Now
                  </a>
                </div>
              </div>
            </div>
            <div className="sqdk-hero-right">
              <div className="sqdk-hero-images">
                <img
                  src="/images/home/mac_desktop.png"
                  alt="Mac Desktop"
                  loading="lazy"
                />
                <div className="video-iframe">
                  <iframe
                    className="hero-iframe"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qXlePLytMvo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                  <a
                    href="https://www.youtube.com/watch?v=qXlePLytMvo"
                    className="video-player"
                  >
                    <svg
                      width="2rem"
                      height="2.5rem"
                      viewBox="0 0 33 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.4857 16.8109C32.819 17.5807 32.8191 19.5052 31.4857 20.275L3.07143 36.68C1.7381 37.4498 0.0714284 36.4876 0.0714285 34.948L0.0714299 2.13796C0.07143 0.598358 1.7381 -0.363893 3.07143 0.405908L31.4857 16.8109Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
