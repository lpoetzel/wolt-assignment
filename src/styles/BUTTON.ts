import styled from "styled-components";

interface Props {
  opacity: string;
  pointer: string;
}

export const BUTTON = styled.button<Props>`
  background-color: rgb(0, 157, 224);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => props.pointer};

  &:hover {
    background-color: rgb(0, 137, 204);
  }

  &:active {
    background-color: rgb(0, 117, 184);
  }
`;
