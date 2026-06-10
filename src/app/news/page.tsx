import { getAllNews } from "@/lib/newsApi";
import { NewsItem } from "@/types/types";
import MainNewsCard from "@/components/news/MainNewsCard";
import SidebarNewsCard from "@/components/news/SidebarNewsCard";
import Pagination from "@/components/news/Pagination";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
  }>;
}) {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;

  const mainNewsResult = await getAllNews(currentPage);

  const sidebarNewsResult = await getAllNews(1);
  const sidebarNews = sidebarNewsResult.data.slice(0, 6) as NewsItem[];

  return (
    <main className="container mx-auto px-6 py-12 min-h-screen">

      {/* Header */}
      <div className="flex justify-end mb-8">
        <div className="hidden lg:block">
          <div className="bg-[#177BC7] text-white px-8 py-2.5 rounded-full inline-block font-bold text-lg">
            Berita Terkait
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Main Content */}
        <div className="w-full lg:w-[65%] flex flex-col gap-6">

          {mainNewsResult.data.length > 0 ? (
            mainNewsResult.data.map((item: NewsItem) => (
              <MainNewsCard
                key={item.slug}
                item={item}
              />
            ))
          ) : (
            <p className="text-center py-10 text-gray-500">
              Belum ada berita.
            </p>
          )}

          <Pagination
            currentPage={currentPage}
            pageCount={mainNewsResult.pagination.page_count}
          />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[35%]">

          <div className="bg-[#177BC7] text-white px-8 py-2.5 rounded-full inline-block font-bold text-lg lg:hidden mb-6">
            Berita Terkait
          </div>

          <div className="border-[3px] border-[#315783] rounded-3xl p-6 flex flex-col gap-5">
            {sidebarNews.map((item: NewsItem) => (
              <SidebarNewsCard
                key={`sidebar-${item.slug}`}
                item={item}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}