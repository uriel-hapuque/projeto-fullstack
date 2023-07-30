import { styled } from "styled-components";

export const StyledRegisterPage = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 35px;
    margin-bottom: 15px;
    animation: changeColor 3s infinite;
  }
  @keyframes changeColor {
    0% {
      color: red;
    }

    50% {
      color: green;
    }

    100% {
      color: blue;
    }
  }
  h2 {
    font-size: 25px;
  }
`;
