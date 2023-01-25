import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export default function Home() {

    const Navigation = dynamic(() => import('../components/navBar'), {
        suspense: true,
    });

    return (
        <>
            <Head>
                <title>SSR CLOUD BLANK</title>
                <meta
                  name={'description'}
                  content={'White soft ssr blank'}
                />
                <meta
                  name={'viewport'}
                  content={'width=device-width, initial-scale=1'}
                />
                <link
                  rel={'icon'}
                  href={'/favicon.ico'}
                />
            </Head>
            <main>
                <h1>HOME</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <Navigation/>
                </Suspense>
            </main>
        </>
    );
}
