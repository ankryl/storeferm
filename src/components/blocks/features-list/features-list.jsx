import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import FeatureItem from "../../ui/feature-item/feature-item";
import Button from "../../ui/button/button";
import {
  StyledFeatures,
  StyledFeatureList,
  StyledFeatureItem,
} from "./styles.js";
import { AppRoute } from "../../../const";

export default function FeaturesList({ features }) {
  return (
    <StyledFeatures>
      {features?.length ? (
        <>
          <Title as="h2">
            Почему фермерские продукты лучше?
          </Title>
          <StyledFeatureList>
            {features.map((feature) => (
              <StyledFeatureItem key={feature.id}>
                <FeatureItem {...feature} />
              </StyledFeatureItem>
            ))}
          </StyledFeatureList>
        </>
      ) : null}
      <Button link={AppRoute.ORDER}>Купить</Button>
    </StyledFeatures>
  );
}
