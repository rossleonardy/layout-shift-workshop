import React from "react";
import useFetch from "use-http";

import "./style.css";

interface Offer {
  uuid: string;
  flag: string;
  amount: string;
  term: string;
  monthly: string;
  callouts: string[];
}

interface OfferCardProps {
  uuid: string;
}

export const OfferCard = ({ uuid }: OfferCardProps) => {
  const { loading, error, data } = useFetch<Offer>(
    `http://localhost:8787/offer/${uuid}`,
    {},
    []
  );

  // return <LoadingOfferCard />;

  if (loading) {
    return <LoadingOfferCard />;
  } else if (!data || error) {
    return <div>Error</div>;
  } else {
    return (
      <div className="offerCard">
        <div className="flag">{data.flag}</div>
        <div className="offerBody">
          <img
            className="wordmark"
            src={`http://localhost:8787/wordmark/${uuid}`}
          />
          <div className="amount">
            <h4>Amount</h4>
            <div>{data.amount}</div>
          </div>
          <div className="term">
            <h4>Term</h4>
            <div>{data.term}</div>
          </div>
          <div className="monthly">
            <h4>Monthly</h4>
            <div>{data.monthly}</div>
          </div>
          <div className="continue">CONTINUE</div>
          <div className="callouts">
            {data.callouts.map((callout, i) => (
              <div key={i} className="calloutPill">
                {callout}
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    );
  }
};

const LoadingOfferCard = () => {
  return (
    <div className="offerCard">
      <div className="flag"></div>
      <div className="offerBody">
        <div className="wordmark">loading your offer</div>
        <div className="amount">
          <h4>Amount</h4>
          <div>...</div>
        </div>
        <div className="term">
          <h4>Term</h4>
          <div>...</div>
        </div>
        <div className="monthly">
          <h4>Monthly</h4>
          <div>...</div>
        </div>
        <div className="continue">CONTINUE</div>
        <div className="callouts">
          <div className="calloutPill" />
          <div className="calloutPill" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export const OfferCardList = ({ offersData }: { offersData: string[] }) => {
  return (
    <div className="offerCardList">
      {offersData.map((uuid) => (
        <OfferCard uuid={uuid} key={uuid} />
      ))}
    </div>
  );
};
