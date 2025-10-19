import { useState } from 'react'
import ChromaGrid from '../components/ChromaGrid'

const Projects = () => {
  // Art projects only
  const artProjects = [
    {
      title: "Uma Musume: Goldship's Golden Victory",
      description: "Expressive Illustration exploring human emotions and expressions",
      image: "./assets/Art1.jpg",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Wuthering Waves: Overtime This!",
      description: "Bold art focusing on form, color, and texture",
      image: "./assets/Art2.jpg",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "PGR: Merciless War",
      description: "Art Illustration focusing on cinematic and overall emotional impact",
      image: "./assets/Art3.jpg",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "At Golden Hour",
      description: "Art Illustration focusing on Landscape and lighting",
      image: "./assets/Art4.jpg",
      gradient: "from-amber-500 to-orange-500"
    }
  ]

  return (
    <section id="work" className="c-space section-spacing scroll-mt-28 md:scroll-mt-36">
    
      <div className="grid grid-cols-1 mb-12">
        
        <div className={`grid-red-color group relative overflow-hidden flex items-center justify-between rounded-2xl p-6 hover:-translate-y-1 duration-200 transition-all`}>
          <div className="relative z-10">
            <p className="headtext [font-family:nebulax]">Art Illustrations</p>
            <p className="subtext">See my illustration pieces</p>
          </div>
          
          <img
            src="./assets/ArtLink.png"
            alt="Art preview"
            className="absolute inset-y-0 right-0 h-full w-1/2 object-cover"
            style={{ WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)", maskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
          />
        </div>

      </div>

      <div className="animate-in slide-in-from-top duration-500">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 [font-family:nebulax]">Art & Illustration Portfolio</h3>
          <p className="subtext max-w-xl mx-auto">
            A collection of digital artworks, illustrations, and creative designs. 
            Each piece tells a story and showcases different artistic techniques.
          </p>
        </div>
        <ChromaGrid items={artProjects} />
      </div>

    </section>
  )
}

export default Projects