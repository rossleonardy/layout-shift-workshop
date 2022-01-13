import React from "react";
import useFetch from "use-http";
import "./style.css";

export interface HeadlineContent {
  headline: string;
  subhead: string;
}

export const Headline = ({
  headlineData,
}: {
  headlineData: HeadlineContent;
}) => {
  return (
    <div className="headline">
      <h1>{headlineData.headline}</h1>
      <h5>{headlineData.subhead}</h5>
    </div>
  );
};
