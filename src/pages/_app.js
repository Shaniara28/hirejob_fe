import '@/styles/globals.css';
import { wrapper, store } from '../redux/store';
import { Provider } from 'react-redux';

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);
