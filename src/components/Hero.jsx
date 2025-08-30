import { motion } from "framer-motion";
import { Sparkles, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-200 via-violet-200 to-fuchsia-200 blur-3xl opacity-70 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-6">
              <Sparkles className="h-4 w-4 text-fuchsia-600" />
              New: Live 3D preview and MagSafe options
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Design your perfect phone case in minutes
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Upload art, pick materials, and personalize every detail. Premium protection meets your unique style.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#customize" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800 transition">
                Start Designing
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-900 font-medium hover:bg-slate-50 transition">
                See Features
              </a>
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative mx-auto w-72 h-[520px] rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-[10px] shadow-2xl">
              <div className="absolute -right-6 top-10 rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-lg px-4 py-3 text-sm hidden md:flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-700" />
                iPhone 15 Pro Max
              </div>
              <div className="relative w-full h-full rounded-[1.6rem] bg-white overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 top-2 h-6 w-24 rounded-full bg-slate-200" />
                <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(99,102,241,0.15),rgba(56,189,248,0)_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500" />
                </div>
                <div className="absolute inset-0 opacity-30 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
