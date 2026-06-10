import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '@/types/types';

export default function SidebarNewsCard({ item }: { item: NewsItem }) {
  const date = new Date(item.created_at).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <Link 
      href={`/news/${item.slug}`} 
      className="flex gap-4 group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-colors"
    >
      <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
        {item.image_url ? (
          <Image src={item.image_url} alt={item.title} fill unoptimized className="object-cover" />
        ) : (
          <div className="w-full h-full bg-slate-300" />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[11px] text-gray-500 mb-1">{date}</p>
        <h4 className="text-[13px] font-bold text-black group-hover:text-[#177BC7] line-clamp-3 leading-tight">
          {item.title}
        </h4>
        <span className="text-[11px] text-[#177BC7] font-medium mt-1">Baca Selengkapnya</span>
      </div>
    </Link>
  );
}