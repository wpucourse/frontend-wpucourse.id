import { cn } from "@/lib/utils";
import Marquee from "@/components/common/Marquee";

const reviews = [
  {
    name: "Satrio Adi Prakoso",
    body: "Puas banget sih selama mengikuti kelas di wpucourse sini, kalau ada kendala atau sesi tanya tanya juga ada dan response nya cepat sih, Mantap.",
  },
  {
    name: "Mario Achmad Taufik",
    body: "Puas banget belajar di WPU Course, materi lengkap dan terstruktur, penyampaiannya juga enak jdi mudah dimengerti.",
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
    body: "Materi dan penjelasan dalam video sudah bagus karena dibuat seolah-olah sedang mengerjakan real project dengan tim yang mempunyai role masing-masing.",
  },
  {
    name: "Abdurrohman Rifai",
    body: "Video nya sangat beginner friendly dan saya yang belum belajar typescript saja sudah agak paham mengenai typescript contoh interface dan type ketika deklarasi function.",
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
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="font-medium text-wpu-primary dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function Testimonial() {
  return (
    <section className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="mb-4 text-5xl font-bold text-wpu-primary">Testimonial</h1>
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
      <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
    </section>
  );
}

export default Testimonial;
