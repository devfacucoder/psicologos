import { useEffect, useState } from "react";
import "./App.css";
import datos from "./datos.json";

function App() {
  const [indice, setIndice] = useState(0);
  const [faqAbierta, setFaqAbierta] = useState(0);

  const { psicologa, navegacion, inicio, reseñas, sobremi, preguntas, contacto } =
    datos;

  useEffect(() => {
    document.title = `${psicologa.nombre} · ${psicologa.rol}`;
  }, [psicologa]);

  return (
    <div className="bg-blue-800 min-h-screen w-full overflow-x-clip flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="flex items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white font-semibold text-lg select-none">
              {psicologa.iniciales}
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-slate-800 leading-tight">
                {psicologa.nombre}
              </h2>
              <p className="text-sm font-light text-slate-500 leading-tight">
                {psicologa.titulo}
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navegacion.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-blue-800 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
          >
            {contacto.botonHeader}
          </a>
        </div>
      </header>
      <section
        id="inicio"
        className="relative w-full min-h-screen overflow-hidden bg-slate-950"
      >
        <div
          className="absolute inset-0 bg-img"
          style={{ backgroundImage: `url(${inicio.imagenFondo})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-950/60" aria-hidden="true" />
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-white/20 backdrop-blur">
            {inicio.badge}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {inicio.titulo}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            {inicio.descripcion}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-600 active:scale-95"
            >
              {inicio.botonContactar}
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all hover:bg-white/20 active:scale-95"
            >
              {inicio.botonSobreMi}
            </a>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="relative">
              <div
                className="absolute -inset-5 rounded-full border-2 border-dashed border-white/20"
                aria-hidden="true"
              />
              <img
                className="relative h-48 w-48 rounded-full object-cover shadow-2xl ring-4 ring-white/40 md:h-72 md:w-72"
                src={psicologa.foto}
                alt={`${psicologa.nombre}, ${psicologa.rol}`}
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-white md:text-xl">
                {psicologa.nombre}
              </p>
              <p className="text-sm text-slate-300">{psicologa.rol}</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {inicio.checks.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm text-slate-200"
              >
                <svg
                  className="h-4 w-4 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="flex min-h-screen flex-col items-center justify-center w-full bg-slate-50 px-6 py-16">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-800">
            {reseñas.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {reseñas.titulo}
          </h2>
        </div>

        <div className="flex w-full max-w-xl flex-col gap-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            {reseñas.items.map((t, i) => (
              <div
                key={t.nombre}
                className="flex flex-col items-center gap-6 p-8 transition-all duration-500 md:p-10"
                style={{
                  display: i === indice ? "flex" : "none",
                  animation:
                    i === indice ? "fadeSlide 0.5s ease-in-out" : undefined,
                }}
              >
                <div className="relative">
                  <img
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-blue-100"
                    src={t.imagen}
                    alt={`Foto de ${t.nombre}`}
                  />
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.8 4.4 23l1.4-6.2-4.8-4.3 6.4-.6L10 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <p className="text-center text-lg leading-relaxed text-slate-700">
                  "{t.texto}"
                </p>

                <div className="text-center">
                  <p className="text-base font-semibold text-slate-900">
                    {t.nombre}
                  </p>
                  <p className="text-sm text-slate-500">{t.rol}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() =>
                setIndice(
                  (indice - 1 + reseñas.items.length) % reseñas.items.length,
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-md transition-all hover:bg-blue-800 hover:text-white active:scale-95"
              aria-label="Anterior reseña"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {reseñas.items.map((t, i) => (
                <button
                  key={t.nombre}
                  onClick={() => setIndice(i)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    i === indice
                      ? "w-8 bg-blue-800"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir a la reseña ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIndice((indice + 1) % reseñas.items.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-md transition-all hover:bg-blue-800 hover:text-white active:scale-95"
              aria-label="Siguiente reseña"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section
        id="sobre-mi"
        className="flex w-full items-center justify-center bg-slate-50 px-6 py-16"
      >
        <div className="flex w-full max-w-5xl flex-col gap-12 md:flex-row md:items-center">
          <div className="relative mx-auto w-full max-w-sm md:w-1/2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <img
                className="h-[420px] w-full object-cover"
                src={psicologa.foto}
                alt={`${psicologa.nombre}, ${psicologa.rol}`}
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-white px-6 py-4 text-center shadow-lg ring-1 ring-slate-100">
              <p className="text-base font-semibold text-slate-900">
                {psicologa.nombre}
              </p>
              <p className="text-sm text-slate-500">{psicologa.rol}</p>
            </div>
          </div>

          <div className="md:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-800">
              {sobremi.badge}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {sobremi.titulo}
            </h2>
            {sobremi.parrafos.map((parrafo) => (
              <p
                key={parrafo}
                className="mt-6 text-base leading-relaxed text-slate-700"
              >
                {parrafo}
              </p>
            ))}
            <ul className="mt-8 space-y-3">
              {sobremi.lista.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border-l-4 border-blue-800 bg-blue-50 p-5">
              <p className="text-sm italic leading-relaxed text-slate-700">
                "{sobremi.cita}"
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-800 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
            >
              {sobremi.boton}
            </a>
          </div>
        </div>
      </section>

      <section
        id="preguntas-frecuentes"
        className="flex w-full flex-col items-center bg-white px-6 py-16"
      >
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-800">
            {preguntas.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {preguntas.titulo}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
            {preguntas.descripcion}
          </p>
        </div>

        <div className="w-full max-w-2xl">
          {preguntas.items.map((item, i) => {
            const abierta = i === faqAbierta;
            return (
              <div
                key={item.pregunta}
                className={`mb-4 overflow-hidden rounded-2xl border transition-colors ${
                  abierta
                    ? "border-blue-200 bg-blue-50/60 shadow-sm"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setFaqAbierta(abierta ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={abierta}
                >
                  <span className="text-base font-semibold text-slate-800">
                    {item.pregunta}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      abierta
                        ? "rotate-180 bg-blue-800 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {abierta && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.respuesta}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="contacto"
        className="flex w-full items-center justify-center bg-blue-800 px-6 py-20"
      >
        <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {contacto.titulo}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-blue-100">
            {contacto.descripcion}
          </p>
          <a
            href={`mailto:${contacto.email}`}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-800 shadow-md transition-all hover:bg-blue-50 active:scale-95"
          >
            {contacto.botonEmail}
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;