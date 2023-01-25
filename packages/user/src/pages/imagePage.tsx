import Image from 'next/image';
import Link from 'next/link';
export default function ImagePage() {
    return (
        <div>
            <div>
                <h1>IMAGE PAGE</h1>
                <Link href={'/'}>Home</Link>
            </div>
            <Image
              src={'/picture.jpg'}
              alt={'Unsplash'}
              width={500}
              height={500}
              loading={'lazy'}
            />
            <Image
              src={'/picture2.jpg'}
              alt={'Unsplash'}
              width={500}
              height={500}
              loading={'lazy'}
            />
            <Image
              src={'/picture.jpg'}
              alt={'Unsplash'}
              width={500}
              height={500}
              loading={'lazy'}
            />
            <Image
              src={'/picture2.jpg'}
              alt={'Unsplash'}
              width={500}
              height={500}
              loading={'lazy'}
            />
            <Image
              src={'/picture.jpg'}
              alt={'Unsplash'}
              width={500}
              height={500}
              loading={'lazy'}
            />
            <Image
              src={'/picture2.jpg'}
              alt={'Unsplash'}
              width={500}
              height={500}
              loading={'lazy'}
            />
            <Image
              src={'/picture.jpg'}
              alt={'Unsplash'}
              width={500}
              height={500}
              loading={'lazy'}
            />
        </div>
    );
}
