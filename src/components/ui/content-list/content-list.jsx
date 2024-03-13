import React from "react";
import { Option, Property, List } from "./styles";

export default function ContentList({ list = [], delimeter = ": " }) {
  return (
    <List>
      {list.map((option, index) => (
        <Option key={`tab${index * 10}`}>
          <Property>
            {option.property}
            {delimeter}
          </Property>
          {option.value}
        </Option>
      ))}
    </List>
  );
}
