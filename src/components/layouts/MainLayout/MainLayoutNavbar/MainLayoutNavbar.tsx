import useScrollHeight from "@/hooks/useScrollHeight";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LINK_NAVBAR } from "../MainLayout.constants";
import { IoChevronDownOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const MainLayoutNavbar = () => {
  const { scrollHeight } = useScrollHeight();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarItemOpen, setSidebarItemOpen] = useState("");

  useEffect(() => {
    setSidebarOpen(false);
  }, [router.asPath]);
  return (
    <header
      className={cn(
        "fixed top-4 z-50 flex h-20 w-full items-center justify-between transition-all",
        {
          "top-0 border-gray-100 bg-white bg-clip-padding shadow-lg backdrop-blur-md backdrop-filter":
            scrollHeight > 20,
        },
      )}
    >
      <nav
        className={cn(
          "container mx-4 flex h-full items-center justify-between rounded-2xl bg-gray-100 bg-opacity-10 bg-clip-padding px-6 backdrop-blur-sm backdrop-filter transition-all sm:mx-auto",
          {
            "border-none px-0 shadow-none backdrop-blur-none backdrop-filter-none":
              scrollHeight > 20,
          },
        )}
      >
        <Link href="/">
          <Image
            src="/general/logo-full.png"
            alt="logo"
            width={120}
            height={100}
            className="h-8 w-auto lg:h-12"
          />
        </Link>
        <div className="hidden h-full items-center gap-8 lg:flex">
          {LINK_NAVBAR.map((item) => (
            <div
              className="group flex h-full cursor-pointer items-center"
              key={item.title}
            >
              {item.type === "link" ? (
                <Link
                  href={item.href as string}
                  className={cn(
                    "flex items-center gap-2 text-base font-medium text-neutral-500 transition-all hover:text-wpu-primary",
                    {
                      "font-semibold text-wpu-primary":
                        item.href === router.pathname,
                    },
                  )}
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
                    <div className="container rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg">
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
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="https://learn.wpucourse.id/auth/register" target="_blank">
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
          className="flex flex-col items-center justify-center lg:hidden"
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
            "absolute left-0 right-0 top-full mx-auto w-full animate-navbar py-4 transition-all duration-300 ease-out lg:hidden",
            sidebarOpen ? "block" : "hidden",
            {
              "left-4 right-4 w-[calc(100%-2rem)]": scrollHeight > 20,
            },
          )}
        >
          <div className="container px-0">
            <div className="flex w-full flex-col gap-4 rounded-xl border border-neutral-200 bg-white px-8 py-6 shadow-lg">
              {LINK_NAVBAR.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full border-b border-neutral-200 pb-4 text-neutral-600"
                >
                  {item.type === "link" ? (
                    <Link
                      href={item.href as string}
                      className={cn("w-full font-semibold", {
                        "text-wpu-primary": item.href === router.pathname,
                      })}
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
                                  <p className="text-sm">{item.description}</p>
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
                className="w-full rounded-md border border-wpu-primary py-2 text-center font-semibold text-wpu-primary"
              >
                Daftar
              </Link>
              <Link
                href="https://learn.wpucourse.id/auth/login"
                className="w-full rounded-md border border-wpu-primary bg-wpu-primary py-2 text-center font-semibold text-white"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainLayoutNavbar;
