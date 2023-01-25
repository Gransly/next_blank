import '../styles/globals.css';

import type { AppProps } from 'next/app';
import AppWrapper from 'packages/user/src/components/appWrapper';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppWrapper
          {...pageProps}
        >
            <Component {...pageProps}/>
        </AppWrapper>
    );
}
