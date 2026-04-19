const Bio = () => {
  const cards = [
    {
      title: "Sanatçı",
      body: "ZOKTAY: Bir sesten daha fazlası, bir duruştan çok daha derin. Yeni neslin en güçlü manifestosu ve poseic'in sönmeyen ışığı.",
    },
    {
      title: "Vizyon",
      body: "Her nota bir hikaye, her şarkı bir manifest. poseic ♥ zoktay enerjisiyle, müziğin en saf ve en parlak halini keşfediyoruz. Işığın peşinden gel.",
    },
    {
      title: "Manifest",
      body: "Sıradanlığa karşı bir manifest. Duyguların en yüksek tonda dışavurumu.",
    },
  ];

  return (
    /*
      ÖNCƏKİ: 3 ayrı arxa plan div-i (gradient + noise + əsas rəng)
      İNDİ: section-bg class → CSS ::before / ::after pseudo-elementləri
      Eyni görünüş, 2 az DOM elementi, sıfır inline style
    */
    <section id="bio" className="section-bg py-24 sm:py-32">

      <div className="relative z-10 mx-auto max-w-6xl px-4">

        {/* Başlıq hissəsi */}
        <div className="mb-14 text-center">
          <p className="mb-2 font-body text-[10px] uppercase tracking-[0.6em] text-[hsl(var(--love-sky)/0.7)]">
            biography
          </p>
          <h2 className="text-gradient-soft font-display text-4xl italic sm:text-6xl">
            Zeynep Sude Oktay
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-sm font-light leading-relaxed text-[hsl(var(--love-mist)/0.8)] sm:text-base">
            Sonsuz bir frekansta yankılanan gençliğin sesi. poseic için her ritim bir yemin, her şarkı ise anlatılmamış bir hikaye. Kulisten kalbe uzanan o ince çizgide, Zoktay'ın büyüleyici yankısı.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="glass-card group relative overflow-hidden rounded-3xl p-7 sm:p-9 transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--love-sky)/0.4)] hover:bg-white/5"
              style={{ animation: `fade-in 0.7s ${i * 0.12}s both` }}
            >
              <div className="absolute right-5 top-5 font-display text-3xl italic text-[hsl(var(--love-sky)/0.25)] sm:text-4xl">
                0{i + 1}
              </div>

              <h3 className="font-display text-3xl italic text-[hsl(var(--love-mist))] sm:text-4xl">
                {c.title}
              </h3>

              <div className="my-5 h-px w-12 bg-gradient-soft opacity-60" />

              <p className="font-body text-sm font-light leading-relaxed text-[hsl(var(--love-mist)/0.85)] sm:text-base">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;

