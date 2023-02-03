import styled from "styled-components";

interface Props {
  borderColor: any;
}

export const INPUT = styled.input<Props>`
  width: 260px;
  padding: 12px;
  border: 1.5px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  border-color: ${(props) => props.borderColor};
  outline: none;
`;
