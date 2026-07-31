import Image from 'next/image';
import { projects } from '@/data/site';
import Reveal from './Reveal';

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-24 border-t border-line">
      <Reveal>
        <div className="eyebrow">Selected Work</div>
        <h2 className="font-display font-semibold text-[24px] md:text-[32px]">Recent projects</h2>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-line bg-card overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-4">
                <div className="font-display font-semibold text-[15px]">{p.name}</div>
                <div className="flex gap-1.5 flex-wrap mt-2.5">
                  <span className="tag">{p.tag}</span>
                  {p.tech && <span className="tag tag-region">{p.tech}</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
