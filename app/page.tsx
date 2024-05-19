import { Spotlight } from "@/components/spotlight";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#060712] text-[#cdcee0] rounded-md flex md:items-center md:justify-center relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Know Time <br />
          like no Other
        </h1>
      </div>
    </main>
  );
}
