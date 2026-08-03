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

interface Service {
  name: string;
  fnName: string;
  file: string;
  description: string;
  accent: string;
}

const services: Service[] = [
  {
    name: 'Custom WordPress Development',
    fnName: 'customWordPressDevelopment',
    file: '~/services/custom-wordpress-development.php',
    description:
      'Custom themes, plugins, templates, Gutenberg/ACF components, custom post types, taxonomies, and functionality built around specific business requirements.',
    accent: '#E4A34A',
  },
  {
    name: 'WooCommerce & eCommerce',
    fnName: 'wooCommerceAndEcommerce',
    file: '~/services/woocommerce-ecommerce.php',
    description:
      'Custom WooCommerce functionality, product experiences, checkout improvements, integrations, and performance optimization for online stores.',
    accent: '#5FA8D3',
  },
  {
    name: 'Web Integrations',
    fnName: 'webIntegrations',
    file: '~/services/web-integrations.js',
    description:
      'REST APIs, third-party services, forms, CRM integrations, payment services, analytics, and custom data-driven functionality.',
    accent: '#A78BFA',
  },
  {
    name: 'Performance & Optimization',
    fnName: 'performanceAndOptimization',
    file: '~/services/performance-optimization.js',
    description:
      'Improving Core Web Vitals, page speed, caching, images, database performance, and third-party scripts to create faster and more reliable websites.',
    accent: '#E8795A',
  },
  {
    name: 'Modern Web Development',
    fnName: 'modernWebDevelopment',
    file: '~/services/modern-web-development.tsx',
    description:
      'React, Next.js, headless CMS architectures, JavaScript applications, and API-driven web experiences.',
    accent: '#4FBFA8',
  },
  {
    name: 'Maintenance & Problem Solving',
    fnName: 'maintenanceAndProblemSolving',
    file: '~/services/maintenance-problem-solving.sh',
    description:
      'Debugging complex WordPress issues, security problems, migrations, hosting issues, plugin conflicts, and ongoing website maintenance.',
    accent: '#E4739B',
  },
];

type Row =
  | { type: 'class-open' }
  | { type: 'class-close' }
  | { type: 'blank' }
  | { type: 'method-open'; index: number }
  | { type: 'comment'; index: number }
  | { type: 'method-close'; index: number };

function buildRows(): Row[] {
  const rows: Row[] = [{ type: 'class-open' }, { type: 'blank' }];
  services.forEach((_, i) => {
    rows.push({ type: 'method-open', index: i });
    rows.push({ type: 'comment', index: i });
    rows.push({ type: 'method-close', index: i });
    if (i < services.length - 1) rows.push({ type: 'blank' });
  });
  rows.push({ type: 'class-close' });
  return rows;
}

const rows = buildRows();

function lineNumberFor(index: number) {
  return rows.findIndex((r) => r.type === 'method-open' && r.index === index) + 1;
}

export default function WhatIDo() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      className="py-20 md:py-24 border-t border-line items-center"
    >
      <div className="mx-auto">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <div className="eyebrow uppercase">services</div>
          <h2 className="font-display font-semibold text-[24px] md:text-[32px] mb-5 leading-tight">
            What I Do
          </h2>
          <p className="text-ink-soft leading-relaxed text-[15.5px] max-w-[44ch] mb-4 last:mb-0">
            Six functions, one goal: websites that are fast, flexible, and built to
            hold up under real business requirements.
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
              <span className="font-mono text-xs text-[#8B8F9C]">what-i-do.php</span>
            </div>
          </div>

          {/* Code body */}
          <div className="py-4 sm:py-5">
            {rows.map((row, i) => {
              const idx = 'index' in row ? row.index : null;
              const isActive = idx !== null && active === idx;
              const accent = idx !== null ? services[idx].accent : undefined;

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
                ? services[active].file
                : `${services.length} services · hover to preview`}
            </span>
            <span className="hidden shrink-0 items-center gap-3 font-mono text-[11px] text-[#6B7280] sm:flex sm:text-xs">
              <span>{active !== null ? `Ln ${lineNumberFor(active)}, Col 3` : 'UTF-8'}</span>
              <span className="flex items-center gap-1.5 text-[#7EC699]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7EC699] motion-safe:animate-pulse" />
                Available for projects
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
    case 'class-open':
      return (
        <span className="font-mono text-sm text-[#E7E5DE] sm:text-[15px]">
          <span className="text-[#A78BFA]">class </span>WhatIDo {'{'}
        </span>
      );
    case 'class-close':
      return (
        <span className="font-mono text-sm text-[#E7E5DE] sm:text-[15px]">{'}'}</span>
      );
    case 'blank':
      return <span className="block h-5">&nbsp;</span>;
    case 'method-open': {
      const s = services[row.index];
      return (
        <span className="pl-4 font-mono text-sm sm:pl-6 sm:text-[15px]">
          <span className="font-semibold" style={{ color: s.accent }}>
            {s.fnName}
          </span>
          <span className="text-[#E7E5DE]">() {'{'}</span>
        </span>
      );
    }
    case 'comment': {
      const s = services[row.index];
      return (
        <p className="pl-8 pr-2 font-sans text-[13.5px] leading-relaxed text-[#8FA98B] sm:pl-10 sm:text-[14.5px]">
          // {s.description}
        </p>
      );
    }
    case 'method-close':
      return (
        <span className="pl-4 font-mono text-sm text-[#E7E5DE] sm:pl-6 sm:text-[15px]">
          {'}'}
        </span>
      );
  }
}