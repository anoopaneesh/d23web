import React from 'react'

const About = () => {
    return (
        <div className='flex justify-center pb-10 bg-[#050505] text-foreground'>
            <div className='px-8 md:p-0 w-full md:w-2/3 mt-40'>
                <div className='text-4xl md:text-7xl text-heading mb-8 font-bold flex justify-start items-center'>
                    <p className='text-sm md:text-2xl font-light -rotate-90 -translate-x-7'>ABOUT</p>
                    <div className='w-[0.1px] h-20 -translate-x-10 bg-heading'></div>
                    <h2 className='-translate-x-5'>DYUKSHA</h2>
                    <p className='text-transparent text_stroke'>'23</p>
                </div>
                <p className='text-justify text-md pt-8'>Palakkad has increasingly fantastic things tucked away among its fold of the Western Ghats other than the Silent Valley National Park, and among those things is the NSS College of Engineering. It is best described as a place which is bordered by verdurous mountains, rather than walls, where youngsters from all over the state work and live together as a vibrant community. As opposed to portraying it as a scholarly organization, it is best depicted by the name its students gave - Shangri La, Heaven on Earth.
                    <br /> <br />
                    Dyuksha'23 is a remarkable vision, propelled by an incredible reason and brought about by a strong spark which makes one's contemplations break bonds, to sustain a place where nothing and literally nothing is unimaginable. The national-level techno-administrative, social symposium is an amalgamation of science and artistry. It is innovation and technology acting together,catalyzed by inventiveness, to make the panacea. The intention of Dyuksha'23 is to compose a definitive outlay of innovation, business, culture and flair.</p>
            </div>
        </div>
    )
}

export default About