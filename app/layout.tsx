import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Time",
  description: "Learn the time around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <AnimatedCursor
          innerSize={8}
          outerSize={32}
          color="193, 11, 111"
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
