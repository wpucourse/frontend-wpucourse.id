import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <main className="container flex w-full flex-col-reverse items-center gap-16 px-4 py-16 pt-28 lg:flex-row lg:px-0">
      <div className="w-full lg:w-1/2">
        <h1 className="mb-4 text-3xl font-bold text-wpu-primary lg:text-5xl">
          Kontak Kami
        </h1>
        <p className="mb-4 text-gray-700 lg:text-lg">
          Kontak ini dapat digunakan untuk diskusi mengenai kerja sama bisnis
          bersama WPU Course, dan untuk student yang mengalami kendala dalam
          menggunakan platform WPU Course atau ingin berkonsultasi terkait
          course.
        </p>
        <p className="mb-4 text-gray-700 lg:text-lg">
          Operasional WPU Course dapat melayani pada hari Senin s/d Jumat mulai
          dari pukul 08.00 WIB s/d 17.00 WIB.
        </p>
        <Link href="https://wa.me/6285190062005" target="_blank">
          <button className="rounded-xl border bg-wpu-primary px-4 py-3 text-center font-semibold text-white">
            Kontak Melalui WhatsApp
          </button>
        </Link>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          alt="contact"
          src="/general/contact.svg"
          width={1080}
          height={1080}
        />
      </div>
    </main>
  );
};

export default Contact;
