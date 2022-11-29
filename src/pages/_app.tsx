import type { AppProps } from 'next/app'
import Navigation from '../components/navigation'

import '../global.scss'

// intersection observer for long scroller -- pushState onto router when container for page comes into view ??
// but examine

const App = ({ Component, pageProps }: AppProps) => (
  <div className="full-width">
    <Navigation reducePadding={true} />
    <Component {...pageProps} />
  </div>
)
export default App
