import { profile } from '@/data/site';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 border-t border-line grid md:grid-cols-2 gap-16 items-start">
      <Reveal>
        <div className="eyebrow">Contact</div>
        <h2 className="font-display font-semibold text-[28px] md:text-[40px] leading-tight">
          Let&apos;s build
          <br />
          something.
        </h2>
        <p className="mt-4 text-ink-soft text-[15px] leading-relaxed max-w-[42ch]">
          Interested in working together? I&apos;m based in {profile.timezoneLabel} and keep flexible hours to
          overlap with teams in Europe and beyond. I&apos;ll get back to you as soon as I can.
        </p>
      </Reveal>

      <Reveal>
        <div className="border-t border-line">
          <div className="flex justify-between items-center py-4 border-b border-line">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">Email</span>
            <a className="text-[15px] font-medium hover:text-accent transition-colors" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-line">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">Phone</span>
            <a className="text-[15px] font-medium hover:text-accent transition-colors" href={`tel:${profile.phoneHref}`}>
              {profile.phone}
            </a>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-line">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">Location</span>
            <span className="text-[15px] font-medium">{profile.location}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
