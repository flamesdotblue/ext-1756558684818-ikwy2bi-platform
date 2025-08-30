import { useRef, useState } from "react";
import { Upload, Image as ImageIcon, RotateCw, Sparkles } from "lucide-react";

export default function CustomizerPreview() {
  const fileRef = useRef(null);
  const [bg, setBg] = useState("#f4f5f7");
  const [accent, setAccent] = useState("#6d28d9");
  const [imageSrc, setImageSrc] = useState("");
  const [gloss, setGloss] = useState(true);
  const [label, setLabel] = useState("Your Name");

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    }
  };

  const reset = () => {
    setBg("#f4f5f7");
    setAccent("#6d28d9");
    setImageSrc("");
    setGloss(true);
    setLabel("Your Name");
  };

  return (
    <section id="customize" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Build your custom case
            </h2>
            <p className="mt-2 text-slate-600">Choose colors, add artwork, and preview it live. What you see is what we print.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <label className="text-sm font-medium text-slate-700">Case color</label>
                <div className="mt-3 flex items-center gap-3">
                  <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="h-10 w-14 rounded cursor-pointer border border-slate-300" />
                  <div className="text-sm text-slate-600">Pick a base tone</div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <label className="text-sm font-medium text-slate-700">Bumper accent</label>
                <div className="mt-3 flex items-center gap-3">
                  <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} className="h-10 w-14 rounded cursor-pointer border border-slate-300" />
                  <div className="text-sm text-slate-600">Edge color</div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <label className="text-sm font-medium text-slate-700">Artwork</label>
                <div className="mt-3 flex items-center gap-3">
                  <button onClick={() => fileRef.current?.click()} className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
                    <Upload className="h-4 w-4" /> Upload image
                  </button>
                  <input ref={fileRef} onChange={onFileChange} type="file" accept="image/*" className="hidden" />
                  {imageSrc ? (
                    <span className="text-xs text-slate-600 truncate">Image added</span>
                  ) : (
                    <span className="text-xs text-slate-500">PNG, JPG</span>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <label className="text-sm font-medium text-slate-700">Personal text</label>
                <input value={label} onChange={(e) => setLabel(e.target.value)} className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Add a name or phrase" />
                <div className="mt-3 flex items-center gap-2">
                  <input id="gloss" type="checkbox" checked={gloss} onChange={(e) => setGloss(e.target.checked)} className="h-4 w-4" />
                  <label htmlFor="gloss" className="text-sm text-slate-700">Gloss finish</label>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button onClick={reset} className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
                <RotateCw className="h-4 w-4" /> Reset
              </button>
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-white text-sm font-medium hover:bg-slate-800">
                <Sparkles className="h-4 w-4" /> Order this design
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-[320px] sm:w-[360px] h-[640px] sm:h-[720px]">
              {/* Phone shadow */}
              <div className="absolute inset-0 blur-2xl rounded-[2.2rem] bg-black/10" />

              {/* Phone body */}
              <div className="relative z-10 w-full h-full rounded-[2.2rem] p-[12px]" style={{ background: accent }}>
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden" style={{ background: bg }}>
                  {/* Camera bump */}
                  <div className="absolute top-4 left-4 w-28 h-28 rounded-2xl bg-slate-900/90 shadow-lg border border-white/10">
                    <div className="absolute top-2 left-2 w-9 h-9 rounded-full bg-black/80 border border-white/10" />
                    <div className="absolute top-2 right-2 w-9 h-9 rounded-full bg-black/80 border border-white/10" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-black/80 border border-white/10" />
                  </div>

                  {/* Artwork layer */}
                  {imageSrc ? (
                    <div className="absolute inset-0">
                      <img src={imageSrc} alt="Artwork" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/0" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="flex flex-col items-center text-slate-500">
                        <div className="h-16 w-16 rounded-xl bg-white/70 backdrop-blur border border-white/60 flex items-center justify-center">
                          <ImageIcon className="h-8 w-8" />
                        </div>
                        <p className="mt-3 text-sm">Upload an image to fill the case</p>
                      </div>
                    </div>
                  )}

                  {/* Label */}
                  {label && (
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                      <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wide" style={{ background: "rgba(255,255,255,0.85)", color: "#0f172a" }}>
                        {label}
                      </span>
                    </div>
                  )}

                  {/* Gloss overlay */}
                  {gloss && (
                    <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" style={{ background: "linear-gradient(60deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%)" }} />
                  )}

                  {/* Bezel notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
