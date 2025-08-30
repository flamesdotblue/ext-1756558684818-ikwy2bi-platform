import { useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CustomizerPreview from "./components/CustomizerPreview";
import Testimonials from "./components/Testimonials";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-500" />
            <span className="font-semibold tracking-tight">CaseCrafter</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#customize" className="hover:text-slate-900 transition">Customize</a>
            <a href="#testimonials" className="hover:text-slate-900 transition">Reviews</a>
          </nav>
          <a href="#customize" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800 transition">Start Designing</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <CustomizerPreview />
        <Testimonials />
      </main>

      <footer className="border-t border-slate-200 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-500" />
            <span className="font-semibold">CaseCrafter</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} CaseCrafter Inc. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#features">Features</a>
            <a className="hover:text-slate-900" href="#customize">Customize</a>
            <a className="hover:text-slate-900" href="#testimonials">Reviews</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
