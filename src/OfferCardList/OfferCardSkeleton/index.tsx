import React from 'react';

export const OfferCardSkeleton = () => {
  return (
    <div className="offerCard">
      <div className="flag">
        <span className="skeleton-loader" />
      </div>
      <div className="offerBody">
        <span className="skeleton-loader" />
        <div className="amount">
          <h4>Amount</h4>
          <div>
            <span className="skeleton-loader" />
          </div>
        </div>
        <div className="term">
          <h4>Term</h4>
          <div>
            <span className="skeleton-loader" />
          </div>
        </div>
        <div className="monthly">
          <h4>Monthly</h4>
          <div>
            <span className="skeleton-loader" />
          </div>
        </div>
        <div className="continue">CONTINUE</div>
        <div className="callouts">
          <span className="skeleton-loader" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

//<div className="skeleton-loader">Loading</div>;
