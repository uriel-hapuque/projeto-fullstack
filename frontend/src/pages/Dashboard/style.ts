import { styled } from "styled-components";

export const StyledDashboard = styled.div`
  padding: 20px;
  h1 {
    margin-inline: 20px;
  }

  h2 {
    font-size: 25px;
    margin: 20px;
  }
  header {
    display: flex;
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-block: 30px;
    .dashOwner {
      font-size: 30px;
    }
    div {
      display: flex;
      justify-content: space-between;
      margin-inline: 20px;
      button {
        width: 150px;
        height: 50px;
      }
    }
  }
  ul {
    margin-inline: 20px;

    li {
      padding: 15px;
      border: 1px solid #fff;
      margin-block: 15px;
      button {
        margin-top: 15px;
        margin-right: 10px;
      }
    }
  }
`;
