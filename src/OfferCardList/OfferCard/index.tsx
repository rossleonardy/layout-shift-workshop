import React from 'react';

interface Offer {
  uuid: string;
  flag: string;
  amount: string;
  term: string;
  monthly: string;
  callouts: string[];
}
interface Props {
  offerData: Offer;
}

export const OfferCard = ({
  offerData: { uuid, flag, amount, term, monthly, callouts },
}: Props) => {
  return (
    <div className="offerCard">
      <div className="flag">{flag}</div>
      <div className="offerBody">
        <img
          className="wordmark"
          src={`http://localhost:8787/wordmark/${uuid}`}
        />
        <div className="amount">
          <h4>Amount</h4>
          <div>{amount}</div>
        </div>
        <div className="term">
          <h4>Term</h4>
          <div>{term}</div>
        </div>
        <div className="monthly">
          <h4>Monthly</h4>
          <div>{monthly}</div>
        </div>
        <div className="continue">CONTINUE</div>
        <div className="callouts">
          {callouts.map((callout, i) => (
            <div key={i} className="calloutPill">
              {callout}
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

//<div className="skeleton-loader">Loading</div>;
