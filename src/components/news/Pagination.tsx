import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  pageCount: number;
}

export default function Pagination({
  currentPage,
  pageCount,
}: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1 mt-8">
      {/* Prev */}
      <Link
        href={`/news?page=${Math.max(1, currentPage - 1)}`}
        className="px-3 py-1.5 border border-gray-300 text-gray-600 rounded hover:bg-gray-100"
      >
        &lt;
      </Link>

      {/* Pages */}
      {pages.map((page) => (
        <Link
          key={page}
          href={`/news?page=${page}`}
          className={`px-3 py-1.5 border rounded ${
            currentPage === page
              ? 'bg-[#177BC7] text-white border-[#177BC7]'
              : 'border-gray-300 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next */}
      <Link
        href={`/news?page=${Math.min(pageCount, currentPage + 1)}`}
        className="px-3 py-1.5 border border-gray-300 text-gray-600 rounded hover:bg-gray-100"
      >
        &gt;
      </Link>
    </div>
  );
}