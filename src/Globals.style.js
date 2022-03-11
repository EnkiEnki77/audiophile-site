import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
     box-sizing: border-box;
     font-family: 'Manrope', sans-serif;
    caret-color: transparent;
  }

  html,body, .App, #root{
   margin: 0;
   padding: 0;
   width: 100%;
   font-size: 16px;
  }

  a{
      text-decoration: none;
  }

  ul{
      list-style: none;
      margin: 0;
      padding: 0;
  }

 :root{
     --color1: #D87D4A;
     --color2: #101010;
     --color3: #F1F1F1;
     --color4: #FAFAFA;
     --color5: #FBAF85;
     --color6: '#FFFFFF';
     --color7: '#000000';
 }
`;