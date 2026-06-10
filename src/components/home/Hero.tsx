import Image from 'next/image';

export default function Hero() {
  const title = "Human Initiative";
  const description = "Human Initiative merupakan organisasi kemanusiaan global yang terus berupaya memberikan kebermanfaatan yang lebih bermakna dengan dukungan multipihak.";

  return (
    <section className="relative h-[60vh] md:h-screen w-full overflow-hidden transition-all duration-300">
      
      <Image
        src="/uploads/news/home.png" 
        alt="Human Initiative Indonesia Hero Background"
        fill
        className="object-cover" 
        priority 
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-4 md:space-y-6 max-w-4xl">
          <div className="bg-[#78B8C9] px-5 py-2 md:px-8 md:py-3">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">
              {title}
            </h1>
          </div>

          <p className="text-white text-sm md:text-xl lg:text-2xl font-normal text-center max-w-3xl mx-auto drop-shadow-md">
            {description}
          </p>

        </div>
      </div>

    </section>
  );
}