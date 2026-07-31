import { profile, socials } from '@/data/site';

export default function Footer() {
  return (
    <footer className="max-w-[1120px] mx-auto px-7 py-9">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="font-mono text-xs text-ink-soft">
          {profile.name} — {profile.role} · © {new Date().getFullYear()}
        </div>
        <div className="flex gap-5 font-mono text-xs uppercase tracking-[0.05em]">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:text-accent transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
