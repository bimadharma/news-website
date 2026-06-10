
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Endpoint Yii2: /api/news/view?slug=<slug>
 */
export async function getSingleNewsBySlug(slug: string) {
  const url = `${API_BASE_URL}/news/view?slug=${slug}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // cache 1 jam
  });

  if (!res.ok) {
    if (res.status === 404) {
      return null;
    }

    throw new Error('Gagal mengambil data berita.');
  }

  return res.json();
}

/**
 * Ambil daftar berita dengan pagination
 * Endpoint: /api/news?page=1
 */
export async function getAllNews(page: number = 1) {
  const url = `${API_BASE_URL}/news?page=${page}`;

  const res = await fetch(url, {
    next: { revalidate: 1800 }, // cache 30 menit
  });

  if (!res.ok) {
    throw new Error('Gagal mengambil daftar berita.');
  }

  return res.json();
}