import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import LatestNews from "@/components/home/LatestNews";
import { getSingleNewsBySlug } from "@/lib/newsApi";
import { NewsDetail } from "@/types/types";

function formatDate(dateString?: string) {
  if (!dateString) {
    return "-";
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getArticleContent(news: NewsDetail) {
  return (
    news.content ??
    news.description ??
    news.body ??
    news.article ??
    "Isi berita belum tersedia."
  );
}

function isProbablyHtml(text: string) {
  return /<[^>]+>/.test(text);
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await getSingleNewsBySlug(slug);
  const news = (response?.data ?? response) as NewsDetail | null;

  if (!news) {
    notFound();
  }

  const articleContent = getArticleContent(news);

  return (
    <main className="bg-gradient-to-b from-background via-background to-muted/20">
      <section className="container mx-auto px-6 py-10 md:py-14">
        <div className="mx-auto mb-10 max-w-4xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full bg-[#157EC9] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#126BAA]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Berita
          </Link>
        </div>

        <article className="mx-auto max-w-4xl">
          <header className="space-y-8 text-center">
            <h1 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {news.title ?? "Judul berita belum tersedia"}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>{formatDate(news.created_at)}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/70" />
              <span>{news.author ?? "Unknown author"}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/70" />
              <span>{news.category ?? "Uncategorized"}</span>
            </div>

            {news.image_url ? (
              <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-lg">
                <img
                  src={news.image_url}
                  alt={news.title ?? "News image"}
                  className="h-[240px] w-full object-cover md:h-[440px]"
                />
              </div>
            ) : null}
          </header>

          <div className="mt-10 rounded-3xl border border-border bg-background/80 p-6 shadow-sm md:p-10">
            {isProbablyHtml(articleContent) ? (
              <div
                className="prose prose-neutral max-w-none text-justify prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            ) : (
              <p className="whitespace-pre-line text-justify text-base leading-8 text-foreground/90 md:text-lg">
                {articleContent}
              </p>
            )}
          </div>
        </article>
      </section>

      <LatestNews />
    </main>
  );
}
