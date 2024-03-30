import Image from 'next/image';
import { HoverEffect } from './components/HoverEffect';
import Navbar from './components/global/navbar';
import { ContainerScroll } from './components/global/container-scroll-animation';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <section
        className="
      h-screen 
      w-full  
      bg-neutral-950 
      rounded-md  
      !overflow-visible 
      relative 
      flex 
      flex-col 
      items-center  
      antialiased"
      >
        <div className="flex flex-col">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Testar Gratuitamente
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automatize seu trabalho com Nodify
                </h1>
              </div>
            }
          >
            <Image
              src={`https://ui.aceternity.com/linear.webp`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
    </main>
  );
}
