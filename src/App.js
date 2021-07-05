import "./styles.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export default function App() {
  const details = [
    {
      title: "FREE",
      rate: "$0",
      offers: [
        "👍Single User",
        "👍5GB Storage",
        "👍Unlimited Public Projects",
        "👍Community Access",
        "👎Unlimited Private Projects",
        "👎Dedicated Phone Support",
        "👎Free Subdomain",
        "👎Monthly Status Reports"
      ]
    },
    {
      title: "PLUS",
      rate: "$9",
      offers: [
        "👍5 User",
        "👍50GB Storage",
        "👍Unlimited Public Projects",
        "👍Community Access",
        "👍Unlimited Private Projects",
        "👍Dedicated Phone Support",
        "👍Free Subdomain",
        "👎Monthly Status Reports"
      ]
    },
    {
      title: "PRO",
      rate: "$49",
      offers: [
        "👍Unlimited User",
        "👍150GB Storage",
        "👍Unlimited Public Projects",
        "👍Community Access",
        "👍Unlimited Private Projects",
        "👍Dedicated Phone Support",
        "👍 Unlimited Free Subdomain",
        "👍Monthly Status Reports"
      ]
    }
  ];

  return (
    <div className="Team">
      <div className="Main">
        {details.map((pricelist) => (
          <Content
            title={pricelist.title}
            rate={pricelist.rate}
            offers={pricelist.offers}
          />
        ))}
      </div>
    </div>
  );
}
//passing data through props
function Content({ title, rate, offers }) {
  return (
    <div className="Content">
      <Card
        className="Cards"
        style={{ backgroundColor: "whitesmoke", width: "300px" }}
      >
        <h4>{title}</h4>
        <h1>{rate}</h1>
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          {offers.map((steps) =>
            //conditional rendering
            steps.indexOf("👎") ? (
              <li style={{ padding: "10px" }}>{steps}</li>
            ) : (
              <li style={{ padding: "10px", opacity: "0.5" }}>{steps}</li>
            )
          )}
        </ul>

        <Button variant="contained" color="primary">
          More details
        </Button>
      </Card>
    </div>
  );
}
