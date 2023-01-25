import { ReactNode } from 'react';
import { PropsForMetaTag } from 'packages/user/src/interface/propsForMetaTag';
import Head from 'next/head';

type AppWrapperProps ={
    children: ReactNode;
} & PropsForMetaTag;

export default function AppWrapper(props: AppWrapperProps) {
    const { children, title } = props;
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <main>
                {children}
            </main>
        </div>
    );
}
