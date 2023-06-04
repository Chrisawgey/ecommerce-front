import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body{
    padding:0;
    margin: 1;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  
  );
}
