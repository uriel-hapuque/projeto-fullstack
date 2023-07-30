import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);

  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  .modalHeader {
    display: flex;
  }
  .modal {
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
