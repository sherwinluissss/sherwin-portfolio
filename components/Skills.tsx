'use client';

import { useState } from 'react';
import { JetBrains_Mono, Inter } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
});

interface SkillCategory {
  key: string;
  label: string;
  accent: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    key: 'wordpress',
    label: 'WordPress',
    accent: '#E4A34A',
    skills: [
      'WordPress',
      'Custom Themes',
      'Custom Plugins',
      'Advanced Custom Fields',
      'WooCommerce',
      'Gravity Forms',
      'LearnDash',
      'BuddyBoss',
      'WP-CLI',
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    accent: '#4FBFA8',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'React', 'Next.js', 'Responsive Design'],
  },
  {
    key: 'backend',
    label: 'Backend',
    accent: '#5FA8D3',
    skills: ['PHP', 'MySQL', 'REST APIs', 'WordPress REST API'],
  },
  {
    key: 'headlessAndCms',
    label: 'Headless & CMS',
    accent: '#A78BFA',
    skills: ['Next.js', 'React', 'Sanity', 'Headless WordPress', 'GROQ'],
  },
  {
    key: 'performanceAndSeo',
    label: 'Performance & SEO',
    accent: '#E8795A',
    skills: [
      'Core Web Vitals',
      'PageSpeed Insights',
      'Technical SEO',
      'Caching',
      'CDN',
      'Image Optimization',
    ],
  },
  {
    key: 'devOpsAndWorkflow',
    label: 'DevOps & Workflow',
    accent: '#7EC699',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Vercel', 'Nginx', 'Linux'],
  },
  {
    key: 'designAndCollaboration',
    label: 'Design & Collaboration',
    accent: '#E4739B',
    skills: ['Figma', 'Adobe Photoshop', 'Git-based workflows', 'Remote collaboration'],
  },
];

const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

type Row =
  | { type: 'brace-open' }
  | { type: 'root-open' }
  | { type: 'category'; index: number }
  | { type: 'root-close' }
  | { type: 'brace-close' };

const rows: Row[] = [
  { type: 'brace-open' },
  { type: 'root-open' },
  ...categories.map((_, i) => ({ type: 'category', index: i }) as Row),
  { type: 'root-close' },
  { type: 'brace-close' },
];

function lineNumberFor(index: number) {
  return rows.findIndex((r) => r.type === 'category' && r.index === index) + 1;
}

export default function TechnicalSkills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      className="py-20 md:py-24 border-t border-line items-center"
    >
      <div className="mx-auto">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <div className="eyebrow uppercase">stack</div>
          <h2 className="font-display font-semibold text-[24px] md:text-[32px] mb-5 leading-tight">
            Technical Skills
          </h2>
          <p className="text-ink-soft leading-relaxed text-[15.5px] mb-4 last:mb-0 max-w-[44ch]">
            The tools, languages, and platforms behind every project — grouped
            the way they&apos;d sit in a dependency file.
          </p>
        </div>

        {/* Editor window */}
        <div className="overflow-hidden rounded-lg border border-[#2A2E3A] bg-[#14161C] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
          {/* Tab bar */}
          <div className="flex items-center gap-4 border-b border-[#2A2E3A] bg-[#1B1E27] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex items-center rounded-t border-x border-t border-[#2A2E3A] bg-[#14161C] px-3 py-1.5">
              <span className="font-mono text-xs text-[#8B8F9C]">technical-skills.json</span>
            </div>
          </div>

          {/* Code body */}
          <div className="py-4 sm:py-5">
            {rows.map((row, i) => {
              const idx = row.type === 'category' ? row.index : null;
              const isActive = idx !== null && active === idx;
              const accent = idx !== null ? categories[idx].accent : undefined;

              const handlers =
                idx !== null
                  ? {
                      onMouseEnter: () => setActive(idx),
                      onMouseLeave: () => setActive(null),
                    }
                  : {};

              return (
                <div
                  key={i}
                  {...handlers}
                  className="relative flex px-4 transition-colors duration-150 sm:px-6"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.03)' : 'transparent',
                  }}
                >
                  <span
                    className="absolute left-0 top-0 h-full w-[3px] transition-colors duration-150"
                    style={{ backgroundColor: isActive ? accent : 'transparent' }}
                  />
                  <span className="w-8 flex-shrink-0 select-none pr-3 text-right font-mono text-[11px] text-[#3E4252] sm:w-10 sm:pr-4 sm:text-xs">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1 py-1">
                    <RowContent row={row} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between gap-4 border-t border-[#2A2E3A] bg-[#1B1E27] px-4 py-2.5 sm:px-6">
            <span className="truncate font-mono text-[11px] text-[#6B7280] sm:text-xs">
              {active !== null
                ? `technicalSkills.${categories[active].key}`
                : `${categories.length} categories · hover to expand`}
            </span>
            <span className="hidden shrink-0 items-center gap-3 font-mono text-[11px] text-[#6B7280] sm:flex sm:text-xs">
              <span>
                {active !== null
                  ? `Ln ${lineNumberFor(active)} · ${categories[active].skills.length} skills`
                  : `JSON · ${totalSkills} total`}
              </span>
              <span className="flex items-center gap-1.5 text-[#7EC699]">
                <span aria-hidden="true">✓</span>
                valid JSON
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RowContent({ row }: { row: Row }) {
  switch (row.type) {
    case 'brace-open':
      return <span className="font-mono text-sm text-[#E7E5DE] sm:text-[15px]">{'{'}</span>;
    case 'root-open':
      return (
        <span className="pl-4 font-mono text-sm sm:pl-6 sm:text-[15px]">
          <span className="text-[#4B5063]">&quot;</span>
          <span className="text-[#E7E5DE]">technicalSkills</span>
          <span className="text-[#4B5063]">&quot;: </span>
          <span className="text-[#E7E5DE]">{'{'}</span>
        </span>
      );
    case 'category': {
      const c = categories[row.index];
      return (
        <p className="pl-8 pr-2 font-mono text-[13px] leading-relaxed sm:pl-10 sm:text-[14px]">
          <span className="text-[#4B5063]">&quot;</span>
          <span className="font-semibold" style={{ color: c.accent }}>
            {c.key}
          </span>
          <span className="text-[#4B5063]">&quot;: </span>
          <span className="text-[#E7E5DE]">[ </span>
          {c.skills.map((skill, i) => (
            <span key={skill}>
              <span className="text-[#4B5063]">&quot;</span>
              <span className="text-[#E7E5DE]">{skill}</span>
              <span className="text-[#4B5063]">&quot;</span>
              <span className="text-[#4B5063]">{i < c.skills.length - 1 ? ', ' : ' '}</span>
            </span>
          ))}
          <span className="text-[#E7E5DE]">]</span>
          <span className="text-[#4B5063]">,</span>
        </p>
      );
    }
    case 'root-close':
      return (
        <span className="pl-4 font-mono text-sm text-[#E7E5DE] sm:pl-6 sm:text-[15px]">
          {'}'}
        </span>
      );
    case 'brace-close':
      return <span className="font-mono text-sm text-[#E7E5DE] sm:text-[15px]">{'}'}</span>;
  }
}