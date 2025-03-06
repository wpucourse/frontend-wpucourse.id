import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { LINKS_FOOTER, LINKS_SOCIAL } from "../MainLayout.constants";

const MainLayoutFooter = () => {
  return (
    <footer className="container mx-auto mt-16 bg-neutral-800 text-white md:mt-32 lg:mb-8 lg:rounded-2xl">
      <div className="flex flex-col gap-8 px-6 py-8 md:px-12 md:py-12">
        <div className="flex w-full flex-col gap-8 md:flex-row md:gap-20">
          <div className="flex w-full flex-col gap-2 md:w-1/3">
            <Image
              src="/general/logo-full-white.png"
              alt="logo"
              width={180}
              height={100}
            />
            <p className="mt-4 text-sm leading-relaxed lg:text-base">
              WPU Course adalah platform pembelajaran untuk membantu kamu
              menjadi digital talent terbaik.
            </p>
            <div className="mt-4 flex flex-col items-start gap-4 xl:flex-row">
              <div className="flex items-center justify-center gap-1 text-sm text-neutral-300">
                <FaLocationDot className="text-2xl" />
                <p> Bandung, Indonesia</p>
              </div>
              <Link
                href="https://wa.me/6285190062005"
                target="_blank"
                className="flex items-center justify-center gap-1 text-sm text-neutral-300"
              >
                <MdLocalPhone className="text-2xl" />
                <p>+62 851-9006-2005</p>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-8 md:w-2/3 md:flex-nowrap">
            {LINKS_FOOTER.map((links) => (
              <div
                className="flex w-2/5 flex-col gap-4 md:w-1/3"
                key={`footer-${links.title}`}
              >
                <h2 className="mb-2 font-bold">{links.title}</h2>
                {links.items.map((link) => (
                  <Link
                    href={link.href as string}
                    className="w-fit text-neutral-400 hover:text-neutral-200"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-4 border-t-2 border-neutral-700 pt-4 md:flex-row lg:items-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} WPU Course. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {LINKS_SOCIAL.map((social) => (
              <Link
                href={social.href}
                key={social.title}
                className="text-3xl text-neutral-400 hover:text-neutral-200"
                target="_blank"
                aria-label={social.title}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainLayoutFooter;
