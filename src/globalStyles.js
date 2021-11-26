import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";
import style from "./styleConstants.js";

const GlobalStyle = createGlobalStyle`
${reset}
  body {
    background:  rgb(241, 248, 246);
    font-family: 'Poppins', sans-serif;
  }

  button {
    background-color: ${style.black};
  color: white;
  border-radius: 20px;
  padding: 10px 0;
  min-width: 80px;
  cursor: pointer;
  }

  h2{
    text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin: 20px 30px;
  }

  button:hover {
    background-color: darkgreen;
    color: ${style.white};  }

  input {
    padding:10px;
    border-radius: 20px;
    border:2px solid ${style.black};
    margin: 10px 0px;
    font-family: 'Poppins', sans-serif;

  }

  textarea {
    padding:10px;
    border-radius: 20px;
    border:2px solid ${style.black};
    margin: 10px 0px;
    font-family: 'Poppins', sans-serif;

  }
`;

export default GlobalStyle;
