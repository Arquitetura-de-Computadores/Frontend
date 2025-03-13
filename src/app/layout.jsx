import Link from "next/link";
import Image from "next/image";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col">
        <div className="flex flex-grow">
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-[#FFFFFF]">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image src="/Logo.png" alt="" width={150} height={150} />
            </Link>
            <Menu />
          </div>
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F5F6FA] overflow-scroll scrollbar-hide text-black" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="mb-7.5">
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
