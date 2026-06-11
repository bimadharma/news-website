import Link from "next/link";

export default function DonatePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      <img
        src="/uploads/news/donate.png"
        alt="Donation Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/10" />

      <Link
        href="/"
        className="absolute top-6 left-6 z-20 rounded-full bg-[#157EC9] px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-[#0f6aa8] transition"
      >
        ← Kembali ke Beranda
      </Link>
    </main>
  );
}
