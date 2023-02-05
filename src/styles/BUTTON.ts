import styled from "styled-components";

export const BUTTON = styled.button`
  background-color: rgb(0, 157, 224);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: rgb(0, 137, 204);
  }

  &:active {
    background-color: rgb(0, 117, 184);
  }
`;
