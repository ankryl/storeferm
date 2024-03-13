import React, { useState } from "react";
import {
  ConotrollColumn,
  ControllSection,
  OrderWrapper,
  CheckboxLabel,
  ProductSwiper,
  StyledButton,
  PriceValue,
  PriceLabel,
  Address,
} from "./styles";

import Title, { TitleSize } from "../../ui/title/title";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import { SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import ProductItem from "../../ui/product-item/product-item";

export default function OrderPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const [address, setAddress] = useState("");
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };
  return products && products.length ? (
    <OrderWrapper as="form">
      <ConotrollColumn>
        <ControllSection>
          <Title as="h2" size={TitleSize.EXTRA_SMALL}>Выберите продукты</Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            products={products}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
            options={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
          />
        </ControllSection>
        <ControllSection>
          <Title size={TitleSize.EXTRA_SMALL}>Сделать заказ</Title>
          <Address
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel>Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <StyledButton
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Купить
          </StyledButton>
        </ControllSection>
      </ConotrollColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        modules={[Pagination, Mousewheel, Scrollbar]}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction",
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </OrderWrapper>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}
