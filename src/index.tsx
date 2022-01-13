import React from "react";
import { render } from "react-dom";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Headline, HeadlineContent } from "./Headline";
import { OfferCardList } from "./OfferCardList";

import "./style.css";
import useFetch from "use-http";

const App = () => {
  return (
    <div>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
};

const Content = () => {
  const {
    loading: offersLoading,
    error: offersError,
    data: offersData,
  } = useFetch<string[]>("http://localhost:8787/offerList", {}, []);

  const {
    loading: headlineLoading,
    error: headlineError,
    data: headlineData,
  } = useFetch<HeadlineContent>(
    `http://localhost:8787/headlineContent`,
    {},
    []
  );

  if (offersLoading || headlineLoading) {
    return (
      <div className="loading">Stay Tuned, loading your fantastic offers</div>
    );
  }

  if (offersError || headlineError || !offersData || !headlineData) {
    return <div>error</div>;
  }

  return (
    <>
      <Headline headlineData={headlineData} />
      <OfferCardList offersData={offersData} />
    </>
  );
};

const container = document.getElementById("container");
console.log(container);
render(<App />, container);
