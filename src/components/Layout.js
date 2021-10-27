import styled, { createGlobalStyle } from "styled-components";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Content>{children}</Content>;
    </>
  );
}

const Content = styled.div`
  margin-bottom: 3em;
`;

const GlobalStyle = createGlobalStyle`
:root {
      font-size: 18px;
}
* + * {
      margin-top: 1.5em;
}
*,
  *:before,
  *:after {
    box-sizing: border-box;
  }
@font-face{
      font-family: 'Rubik', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
}
body {
      margin: 0;
      padding: 0;
      font-family: 'Rubik', sans-serif;

}
#root {
      margin-top: 0;
}


input { 
      color: inherit;
}
`;

export default Layout;
