import { Star, Shield } from "lucide-react";

const reviews = [
  {
    name: "Avery L.",
    body: "Insanely good print quality. Colors are exactly like my artwork and the case feels premium.",
    rating: 5,
  },
  {
    name: "Jordan P.",
    body: "Super easy to design and it arrived in two days. Dropped my phone and it held up perfectly.",
    rating: 5,
  },
  {
    name: "Sam K.",
    body: "Love the MagSafe strength and the glossy finish. My new go-to gift idea!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Trusted by creators and casemakers</h2>
            <p className="mt-2 text-slate-600">5-star protection with gallery-worthy prints.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <Shield className="h-4 w-4 text-emerald-600" /> Lifetime print guarantee
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{r.body}”</p>
              <div className="mt-4 text-sm font-medium text-slate-900">{r.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a href="#customize" className="inline-flex items-center rounded-md bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition">Design yours now</a>
        </div>
      </div>
    </section>
  );
}
