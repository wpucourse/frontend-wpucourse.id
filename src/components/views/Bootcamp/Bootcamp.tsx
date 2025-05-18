import Image from "next/image";
import Link from "next/link";
import Discount from "./Discount";

const Bootcamp = () => {
  return (
    <div className="container px-4 py-16 pt-28 lg:flex-row lg:px-0">
      <section className="flex flex-col items-center gap-4 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="mb-4 text-3xl font-bold !leading-snug text-gray-700 lg:text-5xl">
            Mulai Belajar Skill Baru Bersama
            <span className="text-wpu-primary"> WPU Bootcamp</span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            Ingin upgrade skill atau punya kemampuan yang lebih baik?
            Bergabunglah dengan WPU Bootcamp dan mulai belajar skill baru yang
            sesuai dengan kebutuhan industri. Kami menyediakan kurikulum yang
            terstruktur serta mentor yang berpengalaman di bidangnya.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="#offer"
              className="rounded-xl bg-wpu-primary px-5 py-3 font-semibold text-white"
            >
              Pilih Bootcamp
            </Link>
            <Link
              href="https://wa.me/6285190062005"
              className="rounded-xl border border-wpu-primary px-5 py-3 font-semibold text-wpu-primary"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:p-8">
          <Image
            src="/images/bootcamp/hero.png"
            width={1000}
            height={1000}
            alt="mern"
            className="h-full w-full"
          />
        </div>
      </section>
      <section id="#offer" className="container mt-32 px-4 lg:px-0">
        <h2 className="mb-2 text-3xl font-bold text-wpu-primary lg:text-4xl">
          Bootcamp Tersedia
        </h2>
        <p className="mb-4 text-gray-700 lg:text-lg">
          Kami menyediakan bootcamp yang dapat membantu kamu dalam mengembangkan
          keterampilan digital.
        </p>
        <div className="mb-8 h-1 w-[100px] rounded-full bg-wpu-primary" />
        <Discount />
      </section>
    </div>
  );
};

export default Bootcamp;
