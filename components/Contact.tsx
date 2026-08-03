import { profile } from '@/data/site';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bordeder-line grid md:grid-cols-2 gap-12 items-star-t borrt">
      <Reveal>
        <div className="eyebrow">Contact</div>
        <h2 className="font-display font-semibold text-[28px] md:text-[40px] leading-tight">
          Have a project <br />in mind?
        </h2>
        <p className="mt-4 text-ink-soft text-[15px] leading-relaxed">
          Whether you need a custom WordPress website, WooCommerce solution, performance improvements, or help solving a difficult technical problem, I'd be happy to hear about it.
        </p>
        <p className="mt-4 text-ink-soft font-bold text-[15px] leading-relaxed">
          Available for remote opportunities and freelance projects.
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
