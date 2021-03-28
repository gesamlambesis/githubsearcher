import React from "react"
import {
  Item,
  QuantityLabel,
  Wrapper,
  LanguajesContainer,
  LanguajesTitle,
  LanguajeRow,
} from './styles';

const ITEMS = [
  {
    label: "Repositories",
    quantiy: 0,
  },
  {
    label: "Code",
    quantiy: 0,
  },
  {
    label: "Commits",
    quantiy: 0,
  },
  {
    label: "Issues",
    quantiy: 0,
  },
  {
    label: "Discussions",
    quantiy: 0,
  },
  {
    label: "Packages",
    quantiy: 0,
  },
  {
    label: "Marketplace",
    quantiy: 0,
  },
  {
    label: "Topics",
    quantiy: 0,
  },
  {
    label: "Wikis",
    quantiy: 0,
  },
  {
    label: "Users",
    quantiy: 0,
  },
];

const LeftSideMenu = ({ userQuantity }) => {
  return (
    <div>
      <Wrapper>
        {ITEMS.map((item, index) => (
          <Item
            isLastItem={index === ITEMS.length - 1}
            isSelected={item.label === "Users"}
          >
            <label>{item.label}</label>
            <QuantityLabel hasItems={item.label === "Users" ? true : false}>
              {item.label === "Users" ? userQuantity : item.quantiy}
            </QuantityLabel>
          </Item>
        ))}
      </Wrapper>

      <LanguajesContainer>
        <div style={{ marginBottom: "8px" }}>
          <LanguajesTitle>Languajes</LanguajesTitle>
        </div>

        <LanguajeRow>
          <label style={{ padding: "6px 12px", fontSize: "12px" }}>
            Javascript
          </label>
          <label>💕</label>
        </LanguajeRow>
      </LanguajesContainer>
    </div>
  );
};

export default LeftSideMenu;
