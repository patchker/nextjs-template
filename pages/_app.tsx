import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import store from '../store/store';
import { Provider } from 'react-redux';
function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <Provider store={store}>

        <Layout>
            <Component {...pageProps} />

        </Layout>
        </Provider>

    )
}

export default App;

