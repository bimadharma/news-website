import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '@/types/types';

export default function MainNewsCard({ item }: { item: NewsItem }) {
  const date = new Date(item.created_at).toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <Link 
      href={`/news/${item.slug}`} 
      className="flex flex-col md:flex-row bg-[#D3E4F4] rounded-2xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
    >
      {/* Teks Kiri */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-[#177BC7] transition-colors leading-snug">
            {item.title}
          </h3>
          <p className="text-[13px] text-gray-600 mt-2">
            {date} | {item.author} | {item.category}
          </p>
          <p className="text-sm text-gray-800 mt-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
            {/* Fallback excerpt jika tidak ada konten */}
            Human Initiative terus berupaya memberikan kebermanfaatan yang lebih bermakna dengan dukungan multipihak melalui program ini...
          </p>
        </div>
        <div className="text-right mt-4 text-[#177BC7] text-sm font-medium">
          Selengkapnya...
        </div>
      </div>

      {/* Gambar Kanan */}
      <div className="w-full md:w-[35%] relative h-56 md:h-auto shrink-0">
        {item.image_url ? (
          <Image src={item.image_url} alt={item.title} fill unoptimized className="object-cover" />
        ) : (
          <div className="w-full h-full bg-slate-300" />
        )}
      </div>
    </Link>
  );
}