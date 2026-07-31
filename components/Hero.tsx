import Image from 'next/image';
import { profile } from '@/data/site';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center pt-14 pb-20 md:pb-24">
      <Reveal>
        <div className="eyebrow">About Sherwin</div>
        <h1 className="font-display font-semibold text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-3.5 text-[17px] text-ink-soft max-w-[46ch] leading-relaxed">{profile.tagline}</p>

        <div className="flex gap-3.5 mt-8 flex-wrap">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn btn-ghost" href="#work">
            View featured work
          </a>
        </div>

        <div className="flex gap-9 mt-12 flex-wrap">
          <div className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.05em]">
            Location
            <strong className="block font-body text-sm text-ink font-semibold normal-case tracking-normal mt-1">
              {profile.locationShort}
            </strong>
          </div>
          <div className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.05em]">
            Experience
            <strong className="block font-body text-sm text-ink font-semibold normal-case tracking-normal mt-1">
              {profile.experience}
            </strong>
          </div>
          <div className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.05em]">
            Education
            <strong className="block font-body text-sm text-ink font-semibold normal-case tracking-normal mt-1">
              {profile.education}
            </strong>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <figure className="ticked p-3.5 border border-line bg-card">
          <div className="relative w-full aspect-[4/5]">
            <Image
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              fill
              className="object-cover grayscale-[15%]"
              priority
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-soft text-center">
            Portrait — {profile.locationShort}
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
