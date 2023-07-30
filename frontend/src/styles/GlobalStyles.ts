import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`  
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  #root{
    background-color: #23262b;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    height: 100%;

    .modal{
      color: #23262b;
      border-radius: 5px;
      .modalHeader{
        display: flex;
        justify-content: space-between;
      }
      h3{
        display: flex;
        align-items: center;
        margin-right: 5px;
      }
    }
    input{
      height: 20px;
      border-radius: 3px;
    }
    label{
      margin-block: 5px;
    }
    a{
      button{
        width: 100px;
        font-family: 'Roboto', sans-serif;
      }
    }
  }
`;
