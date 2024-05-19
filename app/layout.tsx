import { Spotlight } from "@/components/spotlight";
import { Clock, Github } from "lucide-react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Link from "next/link";
import AnimatedCursor from "react-animated-cursor";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Time",
  description: "Knowsewwsw322w the time around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="flex h justify-center bg-[#060712]">
          <ul className="menu menu-horizontal rounded-box mt-6 flex">
            <li>
              <Link href="/" className="tooltip tooltip-bottom" data-tip="Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/time"
                className="tooltip tooltip-bottom text-white"
                data-tip="Time"
              >
                <Clock />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/GreenKeewi"
                className="tooltip tooltip-bottom text-white"
                data-tip="Github"
              >
                <Github />
              </Link>
            </li>
          </ul>
        </div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <AnimatedCursor
          innerSize={8}
          outerSize={32}
          color="217, 218, 243"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
