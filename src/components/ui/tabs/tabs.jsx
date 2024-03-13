import React, { useState } from "react";
import { TitleText, TitleList, Content, TitleButton } from "./styles";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton key={item.title} >
                  <TitleText $isSelect={activeTab === index}>
                    {item.title}
                  </TitleText>
                </TitleButton>
              );
            }
            return (
              <TitleButton key={item.title} onClick={() => setActiveTab(index)}>
                <TitleText>
                  {item.title}
                </TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  );
}
