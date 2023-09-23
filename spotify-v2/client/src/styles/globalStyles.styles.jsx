import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
}

@font-face {
 font-family: "Gotham";
 src: local("Gotham"),
  url("./fonts/Gotham.ttf") format("truetype");
}


a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyles;