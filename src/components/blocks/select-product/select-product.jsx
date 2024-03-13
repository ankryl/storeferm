import React from "react";
import { ListProduct } from "./styles";
import {Li} from "../../ui/elements/index"

export default function SelectProduct() {
  return (
    <ListProduct>
      <Li>
        <label>Филе бедра цыпленка</label>
        <input type="checkbox"></input>
      </Li>
      <Li>
        <label>Филе бедра гуся</label>
        <input type="checkbox"></input>
      </Li>
      <Li>
        <label>Мякоть бедра говяжья</label>
        <input type="checkbox"></input>
      </Li>
      <Li>
        <label>Грудка цыпленка на кости</label>
        <input type="checkbox"></input>
      </Li>
      <Li>
        <label>Голень цыпленка</label>
        <input type="checkbox"></input>
      </Li>
    </ListProduct>
  );
}
