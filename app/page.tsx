import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills';
import Projects from "@/components/main/Projects";
import Image from 'next/image'
import Intro from '@/components/main/intro';
import Encryption from "@/components/main/Encryption";
import Contact from "@/components/main/contact";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Intro />
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
