import { BackgroundBeams } from '@/components/ui/background-beams';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <Image
            width={100}
            height={100}
            src="/general/logomark.png"
            alt=""
            className="w-1/2 mx-auto z-10"
          />
          <h1 className="text-7xl text-white font-bold text-center">
            Coming Soon
          </h1>
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
