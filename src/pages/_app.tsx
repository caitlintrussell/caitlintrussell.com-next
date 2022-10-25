import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-color: #e9dbb9; // #e9dbb9
    font-family: 'Montserrat', sans-serif;

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
      user-select: none;
      pointer-events: none;
    }

    h2 {
      font-size: 1.25rem;
      letter-spacing: .25rem;
      
    }
}
* {
    box-sizing: border-box;
}

@media screen and (prefers-reduced-motion: reduce) {
  .animate { animation: none !important; }
}
`

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)
export default App
