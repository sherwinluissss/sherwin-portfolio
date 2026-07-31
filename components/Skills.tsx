import { skillGroups } from '@/data/site';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="capabilities" className="py-20 md:py-24 border-t border-line">
      <Reveal>
        <div className="eyebrow">Capabilities</div>
        <h2 className="font-display font-semibold text-[24px] md:text-[32px] mb-7">What I work with</h2>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-3 gap-px bg-line border border-line">
          {skillGroups.map((g) => (
            <div key={g.group} className="bg-card p-7">
              <h3 className="font-mono text-sm uppercase tracking-[0.05em] mb-5">{g.group}</h3>
              {g.items.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between py-2.5 ${i !== 0 ? 'border-t border-line' : ''}`}
                >
                  <span className="text-[14.5px]">{item.name}</span>
                  <span className="chip">{item.level}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
