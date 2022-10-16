import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-color: #E9DBB7;

    a {
        color: inherit;
        text-decoration: none;
    }
}
* {
    box-sizing: border-box;
}`

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)
export default App
