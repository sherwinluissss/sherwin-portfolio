import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatIDo from '@/components/WhatIDo';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-[1120px] mx-auto px-7">
        <Hero />
        <About />
        <Skills />
        <WhatIDo />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
