import Image from "next/image";
import { FaChalkboardTeacher, FaDiscord, FaRegFileVideo } from "react-icons/fa";

const Reason = () => {
  return (
    <section id="reason" className="px-4 lg:px-0">
      <div
        className="container rounded-2xl bg-wpu-primary bg-cover bg-center p-8 text-white lg:p-16"
        style={{ backgroundImage: 'url("/home/bg-reason.png")' }}
      >
        <h1 className="mb-4 text-center text-3xl font-extrabold lg:text-4xl">
          Kenapa Harus Belajar Di WPU Course?
        </h1>
        <p className="mx-auto w-full text-center text-white/65 lg:w-2/3 lg:text-lg">
          Temukan pengalaman belajar terbaik dengan mentor berpengalaman dan
          course yang dirancang khusus untukmu sesuai standar industri
        </p>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row">
          <div className="flex w-full flex-col gap-8 lg:w-1/2">
            <div className="flex items-center gap-6 border-b border-white/30 pb-8">
              <div className="w-fit rounded-full border-2 border-white p-4">
                <FaChalkboardTeacher className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold lg:text-2xl">
                  Mentor Terbaik
                </h4>
                <p className="text-white/65">
                  Belajar langsung bersama Pak Sandhika, Kang Avip, Kang Agung
                  dan mentor lainnya.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 border-b border-white/30 pb-8">
              <div className="w-fit rounded-full border-2 border-white p-4">
                <FaRegFileVideo className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold lg:text-2xl">
                  Akses Selamanya
                </h4>
                <p className="text-white/65">
                  Sekali beli course, kamu bisa akses selamanya tanpa batas
                  waktu.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-fit rounded-full border-2 border-white p-4">
                <FaDiscord className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold lg:text-2xl">
                  Connect Komunitas IT Terbesar
                </h4>
                <p className="text-white/65">
                  WPU memiliki komunitas IT terbesar dengan jumlah lebih dari
                  50.000 member.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/home/reason.png"
              alt="wpu"
              width={1920}
              height={1080}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
