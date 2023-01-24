import styled from "styled-components";

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  row-gap: 2em;
`;

export const INPUT = styled.input`
  width: 33rem;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const BUTTON = styled.button`
  background-color: rgb(0, 157, 224);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
`;