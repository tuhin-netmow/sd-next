'use client'
import React from 'react';
import Link from 'next/link';

export default function HomePricing() {
  return (
    <>
    <style jsx>{`
        .sqdk-pricing{
          background-image: url('/images/home/pricing_bg.png');
        }
      `}</style>
      <section className="sqdk-pricing">
            <div className="container">
                <div className="pricing-heading">
                  <h3>Our Pricing</h3>
                  <h2>Ready to manage your sports club with SquadDeck?</h2>
                </div>
            </div>
        <div className="sqdk-pricing-inner">
            <div className="container">
                <div className="sqdk-pricing-table">
                    <div className="sqdk-single-pricing-table">
                        <div className="pricing-table-heading">
                            <div className="icon">
                                <img src="/images/home/starter_icon.png" alt="" />
                            </div>
                            <h4>Starter Package</h4>
                        </div>
                        <div className="price">
                            <p><span>$120</span><small>/ mo</small></p>
                        </div>
                        <div className="pricing-btn-wrapper">
                            <Link href="/pricing" className="pricing-btn">View Details</Link>
                        </div>
                    </div>
                    <div className="sqdk-single-pricing-table">
                        <div className="pricing-table-heading">
                            <div className="icon">
                                <img src="/images/home/pro-icon.png" alt="" />
                            </div>
                            <h4>Pro Package</h4>
                        </div>
                        <div className="price">
                            <p><span>$120</span><small>/ mo</small></p>
                        </div>
                        <div className="pricing-btn-wrapper">
                            <Link href="/pricing" className="pricing-btn">View Details</Link>
                        </div>
                    </div>
                    <div className="sqdk-single-pricing-table">
                        <div className="pricing-table-heading">
                            <div className="icon">
                                <img src="/images/home/business-icon.png" alt="" />
                            </div>
                            <h4>Business Package</h4>
                        </div>
                        <div className="price">
                            <p><span>$120</span><small>/ mo</small></p>
                        </div>
                        <div className="pricing-btn-wrapper">
                            <Link href="/pricing" className="pricing-btn">View Details</Link>
                        </div>
                    </div>
                    <div className="sqdk-single-pricing-table">
                        <div className="pricing-table-heading">
                            <div className="icon">
                                <img src="/images/home/business-icon.png" alt="" />
                            </div>
                            <h4>Enterprise</h4>
                        </div>
                        <div className="price">
                            <p><span>$120</span><small>/ mo</small></p>
                        </div>
                        <div className="pricing-btn-wrapper">
                            <Link href="/pricing" className="pricing-btn">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
