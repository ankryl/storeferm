import React from "react";
import Title, { TitleSize } from "../title/title";
import {
  StyledFeature,
  StyledFeatureHeader,
  StyledFeatureOwner,
  StyledFeatureText,
  StyledFeatureImg,
} from "./styles";

export default function FeatureItem({ about, title, image, owner, negative }) {
  return (
    <StyledFeature isNegative={negative}>
      <StyledFeatureHeader>
        <StyledFeatureImg width={56} height={56} src={image} alt={title} />
        <div>
          <StyledFeatureOwner isNegative={negative}>{owner}</StyledFeatureOwner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </StyledFeatureHeader>
      <StyledFeatureText>{about}</StyledFeatureText>
    </StyledFeature>
  );
}
