import { useEffect, useState } from "react";
import { Heart, Send } from "lucide-react";
import { toast } from "sonner";

interface FanMessage {
  id: string;
  name: string;
  message: string;
  ts: number;
}

const STORAGE_KEY = "zoktay_fan_wall_v1";

const seed: FanMessage[] = [
  { id: "s3", name: "poseic", message: "zoktay ♡ forever, the special one", ts: Date.now() - 3600000 },
];

const FanWall = () => {
  const [messages, setMessages] = useState<FanMessage[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setMessages(JSON.parse(raw) as FanMessage[]);
      } else {
        setMessages(seed);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      }
    } catch {
      setMessages(seed);
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const t = text.trim();
    if (!n || !t) {
      toast.error("Ad və mesaj boş ola bilməz");
      return;
    }
    if (t.length > 240) {
      toast.error("Mesaj 240 simvoldan çox ola bilməz");
      return;
    }
    const newMsg: FanMessage = {
      id: crypto.randomUUID(),
      name: n.slice(0, 32),
      message: t,
      ts: Date.now(),
    };
    const next = [newMsg, ...messages].slice(0, 80);
    setMessages(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setText("");
    toast.success("Mesajın duvara eklendi ♡");
  };

  return (
    <section id="fanwall" className="relative px-4 py-24 sm:py-32 overflow-hidden bg-[#0a0a0a]">
      
      {/* Arxa plan gradienti */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-[#0a0a0a]" />
      
      {/* Yüngül mavi toxunuş */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3b82f620_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Başlıq */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-body text-[10px] uppercase tracking-[0.6em] text-[hsl(var(--love-sky)/0.7)]">
            fan wall
          </p>
          <h2 className="text-gradient-soft font-display text-4xl italic sm:text-6xl">
            Fan Duvarı
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm font-light text-[hsl(var(--love-mist)/0.75)] sm:text-base">
            Zoktay evrenine bir iz bırakın. Duygularınız sadece sizinle, anılarınız burada saklı. 💙
          </p>
        </div>

        {/* Mesaj göndərmə formu */}
        <form
          onSubmit={submit}
          className="glass-card mx-auto mb-12 flex max-w-3xl flex-col gap-4 rounded-3xl p-6 sm:p-8"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adın"
            maxLength={32}
            className="w-full rounded-2xl border border-[hsl(var(--love-mist)/0.12)] bg-white/5 px-5 py-3.5 font-body text-sm text-white placeholder:text-[hsl(var(--love-mist)/0.4)] outline-none transition focus:border-[hsl(var(--love-sky)/0.5)]"
          />
          
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Mesajını ilet... "
            maxLength={240}
            rows={4}
            className="w-full resize-y rounded-2xl border border-[hsl(var(--love-mist)/0.12)] bg-white/5 px-5 py-3.5 font-body text-sm text-white placeholder:text-[hsl(var(--love-mist)/0.4)] outline-none transition focus:border-[hsl(var(--love-sky)/0.5)]"
          />

          <div className="flex items-center justify-between pt-2">
            <span className="font-body text-xs text-[hsl(var(--love-mist)/0.5)]">
              {text.length}/240
            </span>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--love-sky)/0.5)] bg-[hsl(var(--love-sky)/0.15)] px-6 py-3 font-body text-sm font-medium uppercase tracking-widest text-white transition hover:bg-[hsl(var(--love-sky)/0.25)] active:scale-95"
            >
              <Send className="h-4 w-4" />
              Göndər
            </button>
          </div>
        </form>

        {/* Mesaj kartları */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((m) => (
            <article
              key={m.id}
              className="glass-card group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--love-sky)/0.4)] hover:bg-white/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-xl italic text-[hsl(var(--love-mist))]">
                  @{m.name}
                </span>
                <Heart className="h-4 w-4 text-pink-400" fill="currentColor" />
              </div>
              
              <p className="font-body text-[15px] leading-relaxed text-[hsl(var(--love-mist)/0.85)]">
                {m.message}
              </p>
              
              <p className="mt-5 text-[10px] uppercase tracking-widest text-[hsl(var(--love-mist)/0.4)]">
                {new Date(m.ts).toLocaleDateString("az-AZ", {
                  day: "2-digit",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FanWall;