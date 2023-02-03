import Link from 'next/link';
import * as process from 'process';

export default function About() {
    return (
        <div>
            <h1>
                {process.env.NEXT_PUBLIC_ABOUT_TITLE}
            </h1>
            <Link href={'/'}>Home</Link>
        </div>
    );
}
