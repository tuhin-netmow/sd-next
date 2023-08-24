import React from 'react';

export default function HomeSports() {
  return (
    <>
      <section className="sd-sports">
        <div className="container">
            <div className="sd-row">
                <div className="sd-row-left">
                    <div className="sd-facilities-text">
                        <h3 className="wow animate__animated animate__fadeInDown" data-wow-delay=".1s">Sports</h3>
                        <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay=".5s">We got you covered
                            for all the sports.</h2>
                        <div className="wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                            <ul className="hero-features-lists">
                                <li>Manage multiple sports in a single platform</li>
                                <li>The Most Flexible and secure app</li>
                                <li>Create your own website with powerful CMS</li>
                            </ul>
                        <a href="<?=base_url();?>sports" className="btn-common btn-primary mt-btn">View all sports</a>
                    </div>
                    </div>
                </div>
                <div className="sd-row-right">
                    <div className="sd-sports-inner">
                        <div className="single-sports">
                            <img src="/images/home/sport_rugby.jpg" alt="Rugby" />
                            <a href="#" className="play-btn">
                                <svg width="1rem" height="1.7rem" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.4857 16.8109C32.819 17.5807 32.8191 19.5052 31.4857 20.275L3.07143 36.68C1.7381 37.4498 0.0714284 36.4876 0.0714285 34.948L0.0714299 2.13796C0.07143 0.598358 1.7381 -0.363893 3.07143 0.405908L31.4857 16.8109Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                        <div className="single-sports">
                            <img src="/images/home/sport_basketball.jpg" alt="Basketball" />
                            <a href="#" className="play-btn">
                                <svg width="1rem" height="1.7rem" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.4857 16.8109C32.819 17.5807 32.8191 19.5052 31.4857 20.275L3.07143 36.68C1.7381 37.4498 0.0714284 36.4876 0.0714285 34.948L0.0714299 2.13796C0.07143 0.598358 1.7381 -0.363893 3.07143 0.405908L31.4857 16.8109Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                        <div className="single-sports">
                            <img src="/images/home/sport_football.jpg" alt="Football" />
                            <a href="#" className="play-btn">
                                <svg width="1rem" height="1.7rem" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.4857 16.8109C32.819 17.5807 32.8191 19.5052 31.4857 20.275L3.07143 36.68C1.7381 37.4498 0.0714284 36.4876 0.0714285 34.948L0.0714299 2.13796C0.07143 0.598358 1.7381 -0.363893 3.07143 0.405908L31.4857 16.8109Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                        <div className="single-sports">
                            <img src="/images/home/sport_baseball.jpg" alt="Baseball" />
                            <a href="#" className="play-btn">
                                <svg width="1rem" height="1.7rem" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.4857 16.8109C32.819 17.5807 32.8191 19.5052 31.4857 20.275L3.07143 36.68C1.7381 37.4498 0.0714284 36.4876 0.0714285 34.948L0.0714299 2.13796C0.07143 0.598358 1.7381 -0.363893 3.07143 0.405908L31.4857 16.8109Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                        <div className="single-sports">
                            <img src="/images/home/sport_cricket.jpg" alt="Cricket" />
                            <a href="#" className="play-btn">
                                <svg width="1rem" height="1.7rem" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.4857 16.8109C32.819 17.5807 32.8191 19.5052 31.4857 20.275L3.07143 36.68C1.7381 37.4498 0.0714284 36.4876 0.0714285 34.948L0.0714299 2.13796C0.07143 0.598358 1.7381 -0.363893 3.07143 0.405908L31.4857 16.8109Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                        <div className="single-sports">
                            <img src="/images/home/sport_volleyball.jpg" alt="Volleyball" />
                            <a href="#" className="play-btn">
                                <svg width="1rem" height="1.7rem" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.4857 16.8109C32.819 17.5807 32.8191 19.5052 31.4857 20.275L3.07143 36.68C1.7381 37.4498 0.0714284 36.4876 0.0714285 34.948L0.0714299 2.13796C0.07143 0.598358 1.7381 -0.363893 3.07143 0.405908L31.4857 16.8109Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
