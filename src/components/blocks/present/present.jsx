import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { StyledPresentText, StyledPresent } from "./styles";

export default function Present() {
  return (
    <StyledPresent>
      <Title size={TitleSize.BIG}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <StyledPresentText>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </StyledPresentText>
    </StyledPresent>
  );
}
