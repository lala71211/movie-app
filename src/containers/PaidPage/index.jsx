import React from "react";
import PageTitle from "../../components/PageTitle";
import PriceCard from "../../components/PriceCard";
import Features from "../../components/Features/Features";

function PaidPage() {
  const priceCards = [
    {
      id: 1,
      title: "Basic",
      price: "Free",
      expired: "7 days",
      resolution: "720p Resolution",
      Feature: "Limited Availability",
      support: false,
    },
    {
      id: 2,
      title: "Premium",
      price: "$19.99",
      expired: "1 month",
      resolution: "Full HD",
      support: true,
    },
    {
      id: 3,
      title: "Cinematic",
      price: "$39.99",
      expired: "2 months",
      resolution: "Ultra HD",
      support: true,
    },
  ];

  return (
    <React.Fragment>
      <PageTitle title="Pricing" location="Pricing" />

      <div className="section">
        <div className="container">
          <div className="row">
            {/* <!-- plan features --> */}
            <div className="col-12">
              <ul className="row plan-features">
                <li className="col-12 col-md-6 col-lg-4">
                  1 month unlimited access!
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  Stream on your phone, laptop, tablet or TV.
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  1 month unlimited access!
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  Thousands of TV shows, movies & more.
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  You can even Download & watch offline.
                </li>
                <li className="col-12 col-md-6 col-lg-4">
                  Thousands of TV shows, movies & more.
                </li>
              </ul>
            </div>
            {/* <!-- end plan features --> */}

            {/* <!-- price --> */}
            {priceCards.map((card) => {
              return <PriceCard {...card} key={card.id} />;
            })}

            {/* <!-- end price --> */}
          </div>
        </div>
      </div>

      <Features />
    </React.Fragment>
  );
}

export default PaidPage;
