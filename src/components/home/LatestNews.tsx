import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllNews } from "@/lib/newsApi";
import { NewsItem } from "@/types/types";

export default async function LatestNews() {
  const newsDataResult = await getAllNews(1);
  const newsData = newsDataResult.data.slice(0, 5) as NewsItem[];

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch (e) {
      return dateString; 
    }
  };

  return (
    <section className="container mx-auto px-6 py-16 transition-all duration-300">
     
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          Latest News
        </h2>
        <div className="h-0.5 w-64 md:w-96 bg-[#1f73b7]"></div>
      </div>

      {/* Container Geser Horizontal */}
      <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
        {newsData.map((item, index) => {
          return (
            <Link
              href={`/news/${item.slug}`}
              key={item.slug}
              className={`snap-center shrink-0 w-[85vw] md:w-[350px] relative h-[420px] group rounded-3xl overflow-hidden transition-all hover:scale-[1.02] active:scale-100 shadow-lg ${
                index === 0
                  ? "border-[3px] border-[#0ea5e9]"
                  : "border border-gray-200"
              }`}
            >
          
              {/* Foto Full Satu Card */}
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Transisi Gradasi Hitam (Pekat di bawah, pudar di tengah ke atas) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 via-35% to-transparent" />

              {/* Teks Judul & Tanggal (Rata Tengah / Center) */}
              <div className="absolute bottom-8 left-5 right-5 flex flex-col items-center text-center justify-end z-10">
                <h3 className="text-white text-[16px] md:text-lg font-semibold mb-3 leading-snug tracking-tight">
                  {item.title}
                </h3>
                {/* Hanya Menampilkan Tanggal */}
                <p className="text-sm text-gray-300 font-medium">
                  {formatDate(item.created_at)}
                </p>
              </div>
            </Link>
          );
        })}

        {/* Card Kustom (Lihat lainnya) */}
        <Link
          href="/news"
          className="snap-center shrink-0 w-[85vw] md:w-[350px] relative h-[420px] bg-transparent flex flex-col items-center justify-center gap-4 group transition-all hover:scale-105 active:scale-100"
        >
          {/* Panah dilingkari hitam tebal */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full border-[4px] border-black group-hover:bg-black transition-colors duration-300">
            <ArrowRight className="w-10 h-10 text-black group-hover:text-white stroke-[3] transition-colors" />
          </div>
          <span className="font-bold text-xl text-black tracking-tight">
            Lihat lainnya
          </span>
        </Link>
      </div>

      {/* Tombol Lihat Semua Berita di bagian bawah */}
      <div className="text-center mt-8 flex justify-center">
        <Link
          href="/news"
          className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-10 py-3 rounded-lg flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-100"
        >
          <span>Lihat Semua Berita</span>
        </Link>
      </div>
    </section>
  );
}
