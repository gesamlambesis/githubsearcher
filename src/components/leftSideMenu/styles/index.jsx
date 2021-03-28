import styled from "styled-components";

export const Item = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: space-between;

  border-bottom: ${(props) => (!props.isLastItem ? "1px solid #e1e4e8" : "")};
  border-left: ${(props) => (props.isSelected ? "1px solid #f9826c" : "")};

  &:hover {
    background-color: #f6f8fa;
  }
`;

export const QuantityLabel = styled.label`
  background-color: ${(props) =>
    props.hasItems ? "#6a737d" : "rgb(209 213 218 / 50%)"};
  color: ${(props) => (props.hasItems ? "#FFFF" : "")};
  padding: 0 6px;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  width: 231px;
  margin-right: 24px;
  margin-bottom: 16px;
`;

export const LanguajesContainer = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  width: 200px;
  margin-right: 24px;
  margin-bottom: 16px;
  height: 97px;
  padding: 16px;
`;

export const LanguajesTitle = styled.label`
  font-weight: 600;
  font-size: 14px;
`;

export const LanguajeRow = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #f6f8fa;
  }
`;