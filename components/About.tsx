import { profile } from '@/data/site';
import Reveal from './Reveal';

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Timezone', value: `${profile.timezoneLabel} (Asia/Manila)` },
  { label: 'Experience', value: `${profile.experience}, freelance & agency work` },
  { label: 'Focus', value: 'Wordpress, Shopify, Woocommerce, integrations' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-line grid md:grid-cols-2 gap-16 items-center">
      <Reveal>
        <div className="eyebrow">About</div>
        <h2 className="font-display font-semibold text-[24px] md:text-[32px] mb-5 leading-tight">
          Building reliable web experiences, from Mindanao to the world.
        </h2>
        {profile.bio.map((p, i) => (
          <p key={i} className="text-ink-soft leading-relaxed text-[15.5px] mb-4 last:mb-0 last:font-bold">
            {p}
          </p>
        ))}
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-2 gap-px bg-line border border-line">
          {facts.map((f) => (
            <div key={f.label} className="bg-card p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.07em] text-signal mb-2">{f.label}</div>
              <div className="text-[14.5px] font-medium">{f.value}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
