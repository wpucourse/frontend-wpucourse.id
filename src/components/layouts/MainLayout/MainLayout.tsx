import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { IoBusiness, IoChevronDownOutline } from "react-icons/io5";
import { Plus_Jakarta_Sans } from "next/font/google";
import { FaBookOpen, FaDiscord, FaNewspaper, FaVideo } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface PropTypes {
  children: ReactNode;
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const LINKS = [
  {
    title: "Tentang Kami",
    type: "link",
    href: "/about",
  },
  {
    title: "Program",
    type: "dropdown",
    items: [
      {
        title: "Online Course",
        description:
          "Belajar melalui video course akses selamanya dan dapatkan sertifikat",
        href: "/program/online-course",
        icon: <FaVideo />,
        isReleased: true,
      },
      {
        title: "Bootcamp",
        description:
          "Belajar secara interaktif untuk tingkatkan kemampuan digital anda",
        href: "#",
        icon: <FaBookOpen />,
        isReleased: false,
      },
      {
        title: "Corporate Training",
        description:
          "Tingkatkan kemampuan melalui pelatihan untuk perusahaan anda",
        href: "#",
        icon: <IoBusiness />,
        isReleased: false,
      },
    ],
  },
  {
    title: "Komunitas",
    type: "dropdown",
    items: [
      {
        title: "WPU Discord Community",
        description:
          "Gabung dengan komunitas IT terbesar di Indonesia dengan lebih dari 50.000+ member",
        href: "https://discord.gg/wpu",
        icon: <FaDiscord />,
        isReleased: true,
      },
      {
        title: "Blog",
        description:
          "Temukan berbagai artikel dan tips untuk meningkatkan kemampuan digital anda",
        href: "#",
        icon: <FaNewspaper />,
        isReleased: false,
      },
    ],
  },
];

const MainLayout = (props: PropTypes) => {
  const { children } = props;
  const [scrollHeight, setScrollHeight] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarItemOpen, setSidebarItemOpen] = useState("");

  useEffect(() => {
    function handleScroll() {
      setScrollHeight(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={`${plusJakartaSans.className} relative`}>
      <div
        className={cn(
          "fixed top-4 z-50 flex h-20 w-full items-center justify-between transition-all",
          {
            "top-0 border-gray-100 bg-gray-100 bg-opacity-10 bg-clip-padding shadow-lg backdrop-blur-sm backdrop-filter":
              scrollHeight > 20,
          },
        )}
      >
        <nav
          className={cn(
            "container mx-4 flex h-full items-center justify-between rounded-2xl border-2 border-gray-100 bg-gray-100 bg-opacity-10 bg-clip-padding px-6 backdrop-blur-sm backdrop-filter transition-all sm:mx-auto",
            {
              "border-none px-0": scrollHeight > 20,
            },
          )}
        >
          <Image
            src="/general/logo-full.png"
            alt="logo"
            width={120}
            height={100}
            className="h-8 w-fit md:h-12"
          />
          <div className="hidden h-full items-center gap-8 md:flex">
            {LINKS.map((item) => (
              <div
                className="group flex h-full cursor-pointer items-center"
                key={item.title}
              >
                {item.type === "link" ? (
                  <Link
                    href={item.href as string}
                    className="flex items-center gap-2 text-base font-medium text-neutral-500 transition-all hover:text-neutral-600"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-base font-medium text-neutral-500 transition-all group-hover:text-neutral-600">
                      {item.title}
                      <IoChevronDownOutline className="transition-all group-hover:rotate-180" />
                    </div>
                    <div className="absolute left-0 right-0 top-full mx-auto hidden w-4/5 animate-navbar rounded-xl p-3 transition-all group-hover:block">
                      <div className="container rounded-2xl border-2 border-gray-100 bg-white bg-opacity-95 bg-clip-padding p-8 shadow-lg backdrop-blur-3xl backdrop-filter">
                        <h2 className="mb-4 text-xl font-bold">{item.title}</h2>
                        <div className="grid grid-cols-3 gap-6">
                          {item.type === "dropdown" &&
                            item?.items?.map((item) => (
                              <Link
                                href={item.isReleased ? item.href : "#"}
                                className={cn(
                                  "flex cursor-pointer gap-4 text-neutral-700",
                                  {
                                    "hover:text-wpu-primary": item.isReleased,
                                  },
                                )}
                                key={item.title}
                              >
                                <div
                                  className={cn("text-4xl", {
                                    "text-wpu-primary": item.isReleased,
                                  })}
                                >
                                  {item.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                  <h4 className="font-bold">
                                    {item.title}{" "}
                                    {!item.isReleased && (
                                      <span className="ml-2 rounded-full bg-neutral-700 px-2 py-1 text-[8px] text-white opacity-50">
                                        Segera Hadir
                                      </span>
                                    )}
                                  </h4>
                                  <p className="text-sm !text-neutral-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="https://learn.wpucourse.id/auth/register"
              target="_blank"
            >
              <button className="rounded-lg border border-wpu-primary px-4 py-2 font-bold text-wpu-primary hover:opacity-80">
                Daftar
              </button>
            </Link>
            <Link href="https://learn.wpucourse.id/auth/login" target="_blank">
              <button className="rounded-lg bg-wpu-primary px-4 py-2 font-bold text-white hover:opacity-80">
                Masuk
              </button>
            </Link>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex flex-col items-center justify-center md:hidden"
          >
            <span
              className={cn(
                "block h-0.5 w-6 rounded-sm bg-neutral-500 transition-all duration-300 ease-out",
                sidebarOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5",
              )}
            />
            <span
              className={cn(
                "my-0.5 block h-0.5 w-6 rounded-sm bg-neutral-500 transition-all duration-300 ease-out",
                sidebarOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-sm bg-neutral-500 transition-all duration-300 ease-out",
                sidebarOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5",
              )}
            />
          </button>
          <div
            className={cn(
              "absolute left-0 right-0 top-full mx-auto w-full animate-navbar py-4 transition-all duration-300 ease-out md:hidden",
              sidebarOpen ? "block" : "hidden",
            )}
          >
            <div className="container px-4 sm:px-0">
              <div className="flex w-full flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-100 px-8 py-6">
                {LINKS.map((item) => (
                  <div
                    key={item.title}
                    className="flex w-full border-b-2 border-b-neutral-200 pb-4 text-neutral-600"
                  >
                    {item.type === "link" ? (
                      <Link
                        href={item.href as string}
                        className="w-full font-semibold"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <div className="flex w-full flex-col">
                        <div
                          className="flex w-full items-center justify-between font-semibold"
                          onClick={() =>
                            setSidebarItemOpen(
                              sidebarItemOpen === item.title ? "" : item.title,
                            )
                          }
                        >
                          {item.title}
                          <IoChevronDownOutline
                            className={cn("transition-all", {
                              "rotate-180": sidebarItemOpen === item.title,
                            })}
                          />
                        </div>

                        {sidebarItemOpen === item.title && (
                          <div className="mt-4 flex flex-col gap-4">
                            {item?.items?.map((item) => (
                              <Link
                                href={item.href as string}
                                className="w-full"
                                key={item.title}
                              >
                                <div className="flex gap-4">
                                  <div
                                    className={cn("mt-1 text-2xl", {
                                      "text-wpu-primary": item.isReleased,
                                    })}
                                  >
                                    {item.icon}
                                  </div>
                                  <div>
                                    <h4
                                      className={cn(
                                        "flex items-center font-semibold hover:opacity-80",
                                        {
                                          "text-wpu-primary": item.isReleased,
                                        },
                                      )}
                                    >
                                      {item.title}
                                      {!item.isReleased && (
                                        <span className="ml-2 rounded-full bg-neutral-700 px-2 py-1 text-[8px] text-white opacity-50">
                                          Segera Hadir
                                        </span>
                                      )}
                                    </h4>
                                    <p className="text-sm">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="https://learn.wpucourse.id/auth/register"
                  className="w-full rounded-md border border-wpu-primary py-3 text-center font-semibold text-wpu-primary"
                >
                  Daftar
                </Link>
                <Link
                  href="https://learn.wpucourse.id/auth/login"
                  className="w-full rounded-md border border-wpu-primary bg-wpu-primary py-3 text-center font-semibold text-white"
                >
                  Masuk
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>{children}</div>
    </main>
  );
};

export default MainLayout;
