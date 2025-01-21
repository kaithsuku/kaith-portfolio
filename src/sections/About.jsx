
const About = () => {
  return (
    <section className='c-space my-20' >
        <div className=' grid xl:grip-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src='/assets/grid1.png' alt="grid1" className="w-full h-fit sm:h-[276px] object-contain" />
                    <div>
                        <p className="grid-headtext">Hi, I'm Suraj</p>
                        <p className="grid-subtext">I am a full-stack developer with a passion for building beautiful and functional websites, with over 1 year and 6 months of experience</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src='/assets/grid2.png' alt="grid2" className="w-full h-fit sm:h-[276px] object-contain" />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialize in Javascript/Typescript and have experience with React, Next.js, Angular, Node.js, and other related technologies</p>
                    </div>
                    </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fir flex justify-center items-center">

                    </div>
            </div>

            </div>
        </div>

    </section>
  )
}

export default About
