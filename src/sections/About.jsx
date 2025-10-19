import CopyEmailButton from "../components/CopyEmailButton";
import SocialMediaButton from "../components/SocialMediaButton";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";


const About = () => {
  return (
    <section id="about" className="c-space section-spacing scroll-mt-28 md:scroll-mt-36">
        <h2 className="[font-family:nebulax] Biggesthead text-center">ABOUT ME</h2>
        <div className="grid grid-cols-1 gap-4 mt-12 relative">
            {/* background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl -z-10"></div>
            
            {/*G1*/}
            <div className="flex items-end grid-default-color p-0 h-[25rem] md:h-[30rem] relative overflow-hidden rounded-2xl">
              <img
                src="assets/yay.jpg"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="z-10 p-6">
                <p className="headtext [font-family:nebulax] text-shadow-2xs">Hi, I'm Hishirusai </p>
                <p className="subtext [font-family:montlight] text-5xl font-medium text-neutral-100">
                  I create beautiful digital illustrations and artistic designs, bringing imagination to life through visual storytelling.
                </p>
              </div>
              <div className="absolute inset-x-0 pointer-evets-none -bottom-2 h-2/3 sm:h-2/3 bg-gradient-to-t from-black" />
            </div>

            {/*G2-4*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/*G2*/}
              <div className="grid-blue-color h-[15rem] relative overflow-hidden rounded-2xl p-6">
                <div className="z-10 w-[50%]">
                <p className="headtext [font-family:nebulax]">Creative Hours</p>
                <p className="subtext">
                Art commissions currently unavailable
                </p>
              </div>
              <figure className="absolute left-[30%] top-[10%]">
              <Globe />
              </figure>
              </div>
              
              {/*G3*/}
              <div className="grid-reddish-color h-[15rem] relative overflow-hidden rounded-2xl p-6">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                  <p className="text-center headtext">
                    Do you want to start a project together?
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    <CopyEmailButton />
                    <SocialMediaButton />
                  </div>
                </div>
              </div>

              {/*G4*/}
              <div className="grid-blue-color h-[15rem] relative overflow-hidden rounded-2xl p-6">
                <figure className="absolute left-[12%] top-[12%] md:scale-100">
                  <Frameworks 
                    outerRadius={120} 
                    innerRadius={60} 
                    outerIconSize={32} 
                    innerIconSize={15} 
                  />
                </figure>
                <div className="z-10 w-[50%] ml-auto text-right">
                  <p className="headtext [font-family:nebulax]" >Art Tools</p>
                  <p className="subtext">
                    I specialize in various digital art tools and illustration techniques
                  </p>
                </div>
              </div>

            </div>

            {/*G5*/}
            <div className="grid-black-color h-[20rem] relative overflow-hidden rounded-2xl p-6">
            
            <img
            src="assets/image.png"
            className="absolute inset-0 w-full h-full object-cover z-0"
            />
            
            {/* 30% black transparent overlay */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <div className="relative z-10">
            <p className="Biggertext [font-family:nebulax]">
            THE ARTISTICALLY <br /> CREATIVE VISION
            </p>
            <p className="subtext">
              I used to be the person who was drawn to artworks and <br />
              creative designs, never imagining I'd create them myself. <br />
              Over time, that curiosity pulled me deeper. I started <br />
              learning and experimenting, and now, I'm creating the <br />
              very things I once admired. <br /> <br />
              My journey shows inspiration can turn into creation.
            </p>
            </div>

            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
            </div>

        </div>
        
    </section>
  )
}

export default About