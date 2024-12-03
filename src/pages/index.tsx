import Header from '@/components/common/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto">
      <Header
        canonical="https://wpucourse.id/"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course"
        page="home"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, belajar mern, belajar react, belajar nextjs"
      />
      <nav className="h-20 w-full flex justify-between items-center">
        <Image
          src="/general/logo-full.png"
          alt="logo"
          width={160}
          height={100}
        />
        <Link href="https://belajarmern.id" target="_blank">
          <button className="text-white font-bold bg-wpu-primary py-2 px-4 rounded-full hover:opacity-80">
            Learn More
          </button>
        </Link>
      </nav>
      <section className="relative mb-20">
        <Link href="https://belajarmern.id" target="_blank">
          <Image src="/home/hero.png" alt="logo" width={1600} height={960} />
        </Link>
        <div className="absolute bottom-0 left-0 w-[32.5%] h-[17%] bg-wpu-primary rounded-md flex justify-center items-center md:rounded-xl lg:rounded-3xl">
          <h1 className="text-[60%] text-white font-bold md:text-[100%] lg:text-[200%]">
            Featured Course
          </h1>
        </div>
      </section>
    </main>
  );
}
