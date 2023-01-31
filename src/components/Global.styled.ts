import styled from "styled-components";

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  row-gap: 1em;
`;

export const INPUT = styled.input`
  width: 260px;
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
export const ICON = styled.i`
  position: absolute;
  padding-right: 10px;
  padding-bottom:13px;
`;
export const DIV = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 650px;
`