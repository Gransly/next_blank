import Link from 'next/link';

export default function NavBar() {
    return (
        <ul>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/about'}>About Us</Link>
            </li>
            <li>
                <Link href={'/imagePage'}>Image Post</Link>
            </li>
        </ul>
    );
}
