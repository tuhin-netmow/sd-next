'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HomeTestimonial() {
  const clients = [
    {
      image: "/images/home/clients/client1.jpg",
      name: "Alaa Farthy",
      designation: "Executive Director at Egyptian federation of Sports for all",
      comment: "This app has made it simple and easy to communicate and schedule all information for our parents and players. The mobile app continues to improve making it simple to have information on the go. I can easily move players from one team to the other with the click of a button. I recommend a simple process to delete old information."
    },
    {
      image: "/images/home/clients/client2.jpg",
      name: "Chris Orr",
      designation: "Owner & Managing Director of Pacific Sports Management",
      comment: "SquadDeck team works aggressively to resolve issues when they are identified and is very open to enhancements to the overall program that lend itself to help make a better product. It is the one software that offered complete management of our league, from people to schedules and asset management. It also allowed us to tie in a robust Website into all the other functions the software allows."
    },
    {
      image: "/images/home/clients/client3.jpg",
      name: "Simon Pincic",
      designation: "Operations Manager at Pro Sports Group Australia",
      comment: "SquadDeck has been great to work with. The staff seems to want to truly help the users be successful. The system had plenty of features available to leagues and tournament organizers. It seems to encompass all things we were looking for. Waiting for the statistics and player analysis portion and also to be geared to more individual sports."
    },
    {
      image: "/images/home/clients/client4.jpg",
      name: "Panagiotis Fassas",
      designation: "Millennial Success Coach",
      comment: "We have been using SquadDeck for about a year. Other than a few minor issues, overall, it is working well for us. Now all the coaches have adopted it, and they use it regularly. The scheduling part works well. The organization schedulers add the schedules, then the team coaches can independently manage them on their own. Also, the mobile app. As an admin, it gives me full control over all the teams."
    },
    {
      image: "/images/home/clients/client5.jpg",
      name: "Artur Sahakyan",
      designation: "CEO at FC Noah",
      comment: "SquadDeck has served our association with smart solutions. Now we can manage all our sports, teams and registered members very easily. We also can book and schedule our games in different venues. It has reduced our human effort and we can run our whole association with this system. It also sends us weather updates and sports news as a bonus feature."
    },
    {
      image: "/images/home/clients/client6.jpg",
      name: "Jero Okhidemeh",
      designation: "Chairman at Afemai Football Academy",
      comment: "It was very easy to reach people and manage their activities in our club. Special thanks to SquadDeck for adding some features that we asked for. The software program has served our association well. The app connects all of our members to their account and personalities their experience. The software developers at SportsPlus have provided great support along the way and tailored features to suit our needs better."
    }
  ]

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
        <section className="sqdk-client-testimonial">
          <div className="container">
              <div className="sqdk-section-heading">
                  <h3 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Testimonials</h3>
                  <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">What makes Squad Deck so beloved by clients? </h2>
                  <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">Discover the ways in which Squad Deck has enabled our clientele to enhance their business operations.</p>
              </div>
              <Slider {...settings} >
                {clients.map((client, index)=> {
                  return(
                    <div className="sqdk-single-client-testimonial" key={index}>
                    <div className="client-profile">
                        <div className="client-img">
                            <img src={client.image} alt={client.name} />
                        </div>
                        <div className="client-info">
                            <h4>{client.name}</h4>
                            <p>{client.designation}</p>
                        </div>
                    </div>
                    <div className="client-quote">
                        <p>{client.comment}</p>
                    </div>
                </div>
                  )
                })}
              </Slider>
          </div>
      </section>

    </>
  )
}
