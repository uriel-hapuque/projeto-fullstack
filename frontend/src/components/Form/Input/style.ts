import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 100%;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 38.5px;

    border-radius: 3px;

    background-color: gray;

    padding-left: 13px;

    color: black;

    margin-top: 15px;
  }
`;
