import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { rootStore } from '../store/rootReducer';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={rootStore}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp
