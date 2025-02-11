import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";

const responses = [
  {
    keyword: /^halo|hi|kembali ke menu utama$/i,
    response: "Halo saya Kang APIP WPU, apa yang ingin kamu tanyakan?",
    option: ["Pembayaran", "Course", "Login & Registrasi", "Chat Admin"],
  },
  {
    keyword:
      /^chat admin|masih bermasalah|gagal karena sebab lain|sudah aktivasi tapi tidak bisa login$/i,
    response: (
      <div>
        <p>Silakan hubungi admin melalui WhatsApp berikut ini:</p>
        <Link
          href="https://api.whatsapp.com/send?phone=6285190062005"
          target="_blank"
          className="font-semibold text-wpu-primary"
        >
          +62 851-9006-2005
        </Link>
      </div>
    ),
    option: ["Kembali ke menu utama"],
  },
  // payment
  {
    keyword: /^pembayaran$/i,
    response: "Ada yang bisa kami bantu terkait pembayaran?",
    option: [
      "Sudah bayar tapi tidak bisa akses course",
      "Metode pembayaran yang bisa digunakan",
      "Tidak bisa beli course",
    ],
  },
  {
    keyword: /^sudah bayar tapi tidak bisa akses course$/i,
    response: (
      <div>
        Coba masuk ke halaman <b>transaksi</b> kemudian masuk ke{" "}
        <b>detail transaksi</b> melalui <b>action</b> kemudian klik tombol{" "}
        <b>refresh</b>.
      </div>
    ),
    option: ["Masih bermasalah", "Kembali ke menu utama"],
  },
  {
    keyword: /^tidak bisa beli course$/i,
    response: "Apa penyebab kamu tidak bisa beli course?",
    option: ["Gagal karena tertolak pihak payment", "Gagal karena sebab lain"],
  },
  {
    keyword: /^gagal karena tertolak pihak payment$/i,
    response:
      "Coba untuk mengganti metode pembayaran dengan melakukan proses checkout ulang untuk course yang kamu beli.",
    option: ["Masih bermasalah", "Kembali ke menu utama"],
  },
  {
    keyword: /^metode pembayaran yang bisa digunakan$/i,
    response:
      "Metode pembayaran yang bisa digunakan dapat di cek pada halaman checkout course",
    option: ["Kembali ke menu utama"],
  },
  // course
  {
    keyword: /^course$/i,
    response: "Ada yang bisa kami bantu terkait course?",
    option: [
      "Informasi umum",
      "Informasi detail course",
      "Cara gabung diskusi discord",
    ],
  },
  {
    keyword: /^informasi umum$/i,
    response: (
      <div className="space-y-2">
        <div>
          <h4 className="font-bold">Durasi Akses Kelas:</h4>
          <p>Lifetime (Akses Selamanya)</p>
        </div>
        <div>
          <h4 className="font-bold">Jenis Pembelajaran:</h4>
          <p>Pembelajaran berupa video tutorial</p>
        </div>
        <div>
          <h4 className="font-bold">Live Session:</h4>
          <p>
            Sekali-kali ada sharing session live oleh mentor yang kemudian di
            record dan di upload di platform pembelajaran
          </p>
        </div>
      </div>
    ),
    option: ["Kembali ke menu utama"],
  },
  {
    keyword: /^cara gabung diskusi discord$/i,
    response:
      "Cek di halaman course yang sudah dibeli terdapat video tutorial join discord",
    option: ["Masih bermasalah", "Kembali ke menu utama"],
  },
  {
    keyword: /^informasi detail course$/i,
    response: "Pilih course yang ingin kamu cari tahu",
    option: ["Belajar MERN Stack", "Belajar Laravel"],
  },
  {
    keyword: /^belajar mern stack$/i,
    response: (
      <div>
        <p>Silakan buka informasi selengkapnya di:</p>
        <Link
          href="https://belajarmern.id"
          target="_blank"
          className="font-semibold text-wpu-primary"
        >
          belajarmern.id
        </Link>
      </div>
    ),
    option: ["Kembali ke menu utama"],
  },
  {
    keyword: /^belajar laravel$/i,
    response: (
      <div>
        <p>Silakan buka informasi selengkapnya di:</p>
        <Link
          href="https://belajarlaravel.id"
          target="_blank"
          className="font-semibold text-wpu-primary"
        >
          belajarlaravel.id
        </Link>
      </div>
    ),
    option: ["Kembali ke menu utama"],
  },
  {
    keyword: /^login & registrasi$/i,
    response: "Ada yang bisa kami bantu terkait login & registrasi?",
    option: [
      "Tidak bisa login",
      "Tidak bisa registrasi",
      "Sudah aktivasi tapi tidak bisa login",
      "Email aktivasi tidak muncul",
    ],
  },
  {
    keyword: /^tidak bisa login$/i,
    response:
      "Coba periksa kembali email dan password kamu dan pastikan kamu sudah melakukan aktivasi email yang sudah kami kirimkan ke email kamu. Jika lupa password gunakan fitur lupa password.",
    option: [
      "Masih bermasalah",
      "Sudah aktivasi tapi tidak bisa login",
      "Email aktivasi tidak muncul",
      "Kembali ke menu utama",
    ],
  },
  {
    keyword: /^tidak bisa registrasi$/i,
    response:
      "Pastikan username dan email yang digunakan belum terdaftar di platform kami.",
    option: [
      "Masih bermasalah",
      "Sudah aktivasi email tapi tidak bisa login",
      "Email aktivasi tidak muncul",
      "Kembali ke menu utama",
    ],
  },
  {
    keyword: /^email aktivasi tidak muncul$/i,
    response: "Cek di inbox, tab promotion atau spam.",
    option: ["Masih bermasalah", "Kembali ke menu utama"],
  },
];

const Chatbot = () => {
  const [openChat, setOpenChat] = useState(false);
  const [botLoading, setBotLoading] = useState(false);
  const [conversation, setConversation] = useState([
    {
      role: "system",
      content: "Halo saya Kang APIP WPU, apa yang ingin kamu tanyakan?",
      option: ["Pembayaran", "Course", "Login & Registrasi", "Chat Admin"],
    },
  ]);

  const chatbotRef = useRef<HTMLDivElement>(null);

  const handleChat = (message: string) => {
    const element = chatbotRef.current;
    setConversation((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
        option: [],
      },
    ]);

    setBotLoading(true);
    element?.scrollTo({
      top: element.scrollHeight + 10,
    });
    setTimeout(() => {
      const botLogic: any = responses.find((item) =>
        item.keyword.test(message),
      );
      setConversation((prev) => [
        ...prev,
        {
          role: "system",
          content: botLogic?.response || (
            <div>
              <p>
                Maaf, saya tidak mengerti pertanyaan Anda. Silahkan hubungi
                Whatsapp admin:
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=6285190062005"
                target="_blank"
                className="font-semibold text-wpu-primary"
              >
                +62 851-9006-2005
              </Link>
            </div>
          ),
          option: botLogic?.option || ["Kembali ke menu utama"],
        },
      ]);
      setBotLoading(false);
      element?.scrollTo({
        top: element.scrollHeight + 10,
      });
    }, 2000);
  };
  return (
    <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8">
      <div
        className={cn(
          "absolute bottom-16 right-0 w-[calc(100vw-2rem)] origin-bottom-right scale-0 rounded-xl bg-white shadow-lg transition-all lg:right-0 lg:w-96",
          {
            "scale-100 transition-all": openChat,
          },
        )}
      >
        <div className="flex w-full items-center gap-2 rounded-t-xl bg-wpu-primary p-4 shadow-lg">
          <Image
            src="/general/bot.png"
            alt="Logo WPU"
            width={50}
            height={50}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h1 className="font-bold text-white">Kang APIP WPU</h1>
            <p className="text-sm text-gray-100">
              Asisten Pintar & Interaktif Platform WPU
            </p>
          </div>
        </div>
        <div
          className="relative flex h-[50vh] w-full flex-col gap-2 overflow-y-scroll p-4"
          ref={chatbotRef}
        >
          {conversation.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex w-full flex-col gap-3",
                item?.role === "system" ? "items-start" : "items-end",
              )}
            >
              <div
                className={cn(
                  "w-fit max-w-[90%] rounded-xl px-4 py-2 text-sm",
                  item?.role === "system"
                    ? "bg-gray-200"
                    : "bg-wpu-primary/80 text-white",
                )}
              >
                {item?.content}
              </div>
              {item.option.length > 0 && (
                <div className="mb-4 flex max-w-[90%] flex-wrap gap-2">
                  {item?.option.map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-2 rounded-full border border-wpu-primary px-3 py-1 text-xs text-wpu-primary hover:bg-gray-100 lg:text-sm"
                      onClick={() => handleChat(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {botLoading && (
            <div className="mt-4 flex w-full justify-start gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-wpu-primary" />
              <div className="h-2 w-2 animate-pulse rounded-full bg-wpu-primary" />
              <div className="h-2 w-2 animate-pulse rounded-full bg-wpu-primary" />
            </div>
          )}
        </div>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            handleChat(e.target[0].value);
            e.target[0].value = "";
          }}
          className="flex w-full rounded-b-xl border-t border-gray-100 p-4"
        >
          <input
            placeholder="Tulis Pesan..."
            className="flex-1 text-sm caret-wpu-primary focus:outline-none"
            type="text"
          />
          <button type="submit" className="flex items-center gap-2">
            <IoSend className="cursor-pointer text-2xl text-wpu-primary" />
          </button>
        </form>
      </div>
      <div
        className="cursor-pointer gap-2 rounded-full bg-wpu-primary p-4 text-2xl text-white transition-all"
        onClick={() => setOpenChat(!openChat)}
      >
        {openChat ? <RiCloseLargeFill /> : <HiChatBubbleBottomCenterText />}
      </div>
    </div>
  );
};

export default Chatbot;
