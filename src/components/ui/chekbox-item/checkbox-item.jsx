import React from "react";
import "./styles.css";

// чекбокс
export default function Checkbox({
  onClick,
  labelComponent, // Компонент для отображения label
  isChecked, // выбранно ли значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <label>
      <input
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </label>
  );
}

