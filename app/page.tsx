import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#060712] text-[#cdcee0] flex md:items-center md:justify-center relative overflow-hidden">
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Know Time <br />
          like no Other
        </h1>
        <div className="flex justify-center"></div>
        <Link href="/time">
          <button className="group/button p-4 px-2 relative inline-flex h-7 w-8 items-center justify-center overflow-hidden rounded-full bg-[#989ddd] font-medium text-white transition-all duration-300 hover:w-24">
            <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
              Check it Out!
            </p>
            <div className="absolute right-1.5">
              <svg
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-white"
              >
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"></path>
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </main>
  );
}
