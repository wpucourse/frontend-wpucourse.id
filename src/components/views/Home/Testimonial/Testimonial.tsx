import { cn } from "@/lib/utils";
import Marquee from "@/components/common/Marquee";

const reviews = [
  {
    name: "Satrio Adi Prakoso",
    body: "Puas banget selama mengikuti kelas di wpucourse sini, ada sesi tanya jawab juga dan response nya cepat.",
  },
  {
    name: "Mario Achmad Taufik",
    body: "Puas banget belajar di WPU Course, materi lengkap dan terstruktur, penyampaiannya juga enak jadi mudah dimengerti.",
  },
  {
    name: "Reza Fahlevi",
    body: "Course fullstack javascript paling keren, menggunakan tech stack terupdate, materi sangat profesional dibuat dari 0.",
  },
  {
    name: "Justine Hezekiel Ramli",
    body: "Materi sangat berbobot sangat berguna di industri dan menarik sekali untuk diikuti.",
  },
  {
    name: "Eep Syaiful Nurohman",
    body: "Saya senang dengan video yg ditayangkan cukup lancar dan quality bisa di custom.",
  },
  {
    name: "Fahmi Azzuhri Efki",
    body: "Selama saya menggunakan platform WPU Course penyajian video pembelajaran sudah bagus karena materi mudah dimengerti.",
  },
  {
    name: "Anang Kurniawan",
    body: "Platform ini memberikan kemudahan dalam mengakses materi dan mendukung proses pembelajaran secara keseluruhan.",
  },
  {
    name: "Aditya Dewani",
    body: "Kualitas audio video bagus, dan bagi saya yang baru belajar sangat mudah mengerti.",
  },
  {
    name: "Febrian Andi Nugroho",
    body: "Materi dan penjelasan dalam video bagus karena dibuat seolah-olah sedang mengerjakan real project dengan tim yang mempunyai role masing-masing.",
  },
  {
    name: "Abdurrohman Rifai",
    body: "Video nya sangat beginner friendly dan saya yang belum belajar typescript saja sudah agak paham mengenai typescript.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, body }: { name: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="font-semibold text-wpu-primary dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-xs lg:text-sm">{body}</blockquote>
    </figure>
  );
};

function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="container px-4 lg:px-0">
        <h1 className="mb-2 text-4xl font-bold text-wpu-primary lg:text-5xl">
          Testimonial
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Kami percaya bahwa pengalaman terbaik datang dari student yang telah
          menyelesaikan course di WPU Course.
        </p>
        <div className="mb-8 h-1 w-[100px] rounded-full bg-wpu-primary" />
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </section>
  );
}

export default Testimonial;
