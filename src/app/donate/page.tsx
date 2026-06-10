import Link from "next/link";

export default function DonatePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      <img
        src="/uploads/news/donate.png"
        alt="Donation Background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-100"
      />

      <Link
        href="/"
        className="absolute top-6 left-6 z-20 text-white font-semibold text-sm transition-all bg-black/40 hover:bg-black/70 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20 shadow-lg hover:scale-105 active:scale-100 flex items-center gap-1.5"
      >
        <span>← Kembali ke Beranda</span>
      </Link>
    </main>
  );
}
