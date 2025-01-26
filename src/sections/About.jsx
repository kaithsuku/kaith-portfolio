import Globe from "react-globe.gl";
import { color } from "three/tsl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kaithakkalsuraj123@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };  


  return (
    <section className="c-space my-20" id="about">
      <div className=" grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Suraj</p>
              <p className="grid-subtext">
                I am a full-stack developer with a passion for building
                beautiful and functional websites, with over 1 year and 6 months
                of experience
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid2"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript, Python and have experience with
                MERN/MEAN stack, Next.js, Firebase and other related technologies
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fir flex justify-center items-center">
                <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={
                    [{
                        lat: 28.53, lng: 77.39,
                        text: "I'm Here :) ",
                        color: 'white',
                        size : 20,
                    }]
                }
                />
            </div>
            <div>
              <p className="grid-headtext">I can work remotely accross most timezones</p>
              <p className="grid-subtext">
                I am based in New Delhi, India, and I am open to working with
                clients from all over the world
              </p>
              <a href='#contact' className='w-fit'>
              <Button name="Contact Me" isBeam containerClass='w-full mt-10' />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid3.png" alt="grid3" className="w-full h-fit sm:h-[266px] object-contain"/>
                <div>
                    <p className="grid-headtext">My Passion for Coding</p>
                    <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession - It is my Passion</p>
                </div>
            </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
                <img src="/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] h-fit sm:h-[276px] object-cover sm:object-top"/>
                <div className="space-y-2">
                    <p className="grid-subtext text-center">Contact Me</p>  
                    <div className='copy-container' onClick={handleCopy}>
                        <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" className="w-6 h-6"/>
                        <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">kaithakkalsuraj123@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
