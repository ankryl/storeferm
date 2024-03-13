import React from "react";
import Present from "../../blocks/present/present";
import FeaturesList from "../../blocks/features-list/features-list";

export default function MainPage({ features }) {
  return (
    <>
      <Present />
      <FeaturesList features={features} />
    </>
  );
}
