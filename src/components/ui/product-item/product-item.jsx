import React from "react";
import Title, {TitleSize} from "../title/title";
import { ControllSection, Image, Content, Price } from "./styles";
import Tabs from "../tabs/tabs";
import ContentList from "../content-list/content-list";

export default function ProductItem({ product }) {
  const tabs = [
    {
      title: "Oписание",
      content: product.description,
    },
    {
      title: "Характеристики",
      content: <ContentList list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <ContentList list={product.structure} />,
    },
  ];
  return (
    <ControllSection>
      <Image src={product.image} />
      <Content>
        <Title as="h3" size={TitleSize.SMALL}>{product.name}</Title>
        <Tabs tabs={tabs} tabIndex={1} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </Content>
    </ControllSection>
  );
}
