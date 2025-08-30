import { Truck, Shield, Sparkles, Image as ImageIcon, RotateCw } from "lucide-react";

const features = [
  {
    title: "Premium materials",
    desc: "Shock-absorbing TPU, scratch-resistant coating, and MagSafe-ready magnets.",
    icon: Shield,
  },
  {
    title: "Unlimited creativity",
    desc: "Upload photos, logos, or AI art. Full-bleed printing with vibrant colors.",
    icon: ImageIcon,
  },
  {
    title: "Fast production",
    desc: "Ships in 48 hours worldwide with real-time order tracking.",
    icon: Truck,
  },
  {
    title: "Hassle-free redo",
    desc: "Change your design after ordering within 2 hours at no extra cost.",
    icon: RotateCw,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Crafted to protect. Designed to impress.</h2>
          <p className="mt-3 text-slate-600">Every CaseCrafter case is engineered for daily life while giving you full creative control.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="h-12 w-12 rounded-xl bg-white shadow flex items-center justify-center text-fuchsia-600">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold">Studio-grade print quality</h4>
              <p className="text-slate-600">UV-cured inks and 1200 DPI detail deliver crisp lines, deep blacks, and color accuracy that lasts.</p>
            </div>
            <a href="#customize" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800 transition">Try the Designer</a>
          </div>
        </div>
      </div>
    </section>
  );
}
