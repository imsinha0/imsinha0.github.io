import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 sm:px-6 lg:px-60 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          <div className="flex-1">
            <p className="text-black mt-4 text-sm sm:text-base">
              I am an undergraduate student at <Link href="https://www.harvard.edu/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Harvard University </Link>
              studying mathematics and computer science. I&apos;m interested in the theoretical guarantees of deep learning, deep reinforcement learning, and combinatorial algorithm.
            </p>

            <p className="text-black mt-4 text-sm sm:text-base">
                Currently, I am working on collaborative RL agents with <Link href="https://cogscikid.com" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Dr. Wilka Carvalho</Link>.
                I focus on learning algorithms that incorporate <Link href="https://en.wikipedia.org/wiki/Theory_of_mind" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">theory of mind</Link>.
            </p>

            <p className="text-black mt-4 text-sm sm:text-base">
              Previously, I interned at Amazon Web Services as a Software Development Engineer, working on LLM orchestration for <Link href="https://aws.amazon.com/quicksuite/quicksight/?trk=948706d9-500f-422e-84ab-56d0959f121e&sc_channel=ps&trk=236d2e18-57c9-4cc8-8f9b-97e69c91e12a&sc_channel=ps&ef_id=CjwKCAiA95fLBhBPEiwATXUsxCZktarfrvx-bR8T2gVxUu0JgwhzTSiCTfIdoepfZFGXURi_HgIbFhoCS4sQAvD_BwE:G:s&s_kwcid=AL!4422!3!787179384425!e!!g!!amazon%20quicksite!23329580070!195362137168&gad_campaignid=23329580070&gbraid=0AAAAADjHtp_4c-eAOXHmqq2cDSnOpDjE_&gclid=CjwKCAiA95fLBhBPEiwATXUsxCZktarfrvx-bR8T2gVxUu0JgwhzTSiCTfIdoepfZFGXURi_HgIbFhoCS4sQAvD_BwE" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">AWS Quicksight</Link>.
              I was also selected as a <Link href="https://www.societyforscience.org/regeneron-sts/2024-scholars/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Regeneron Science Talent Search Scholar</Link> for my work on West Nile Virus modeling.
            </p>

            <div className="w-full flex justify-center">
              <p className="text-black text-base sm:text-lg font-medium mb-1 mt-8 sm:mt-10 text-center">
                <Link href="mailto:imsinha@college.harvard.edu" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Email</Link>
                {" / "}
                <Link href="https://github.com/imsinha0" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Github</Link>
                {" / "}
                <Link href="https://www.linkedin.com/in/imsinha1/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">LinkedIn</Link>
                {" / "}
                <Link href="https://x.com/imsinha0" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">X</Link>
              </p>
            </div>
        
          </div>

          <div className="w-full md:w-auto md:ml-8 flex justify-center md:justify-start">
            <Image
              src="/ishaan.jpeg"
              alt="Picture of me"
              width={300}
              height={500}
              className="rounded-lg w-full max-w-[250px] sm:max-w-[300px] h-auto"
            />
          </div>
        </div>



        <div>
        <h1 className="text-2xl sm:text-3xl mt-8">Research</h1>
        <p className="text-black mt-4 text-sm sm:text-base"> I am motivated by the study of intelligence, at the intersection of deep learning and the sciences. </p>
        
        <div className="flex flex-col gap-6 sm:gap-8 mt-5">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-full sm:w-auto flex-shrink-0">
              <Image src="/nicewebrl.png" alt="WebRLResearch" width={300} height={500} className="rounded-lg w-full sm:w-[250px] md:w-[300px] h-auto" />
            </div>
            <div className="flex-1 sm:ml-0">
              <p className="text-black font-bold mt-0 sm:mt-4 text-sm sm:text-base">NiceWebRL: a Python library for human subject
              experiments with reinforcement learning environments</p>
              <p className='text-black text-sm mt-2'> Wilka Carvalho, Vikram Goddla, <b>Ishaan Sinha</b>, Hoon Shin, Kunal Jha</p>
              <Link href="https://arxiv.org/pdf/2508.15693" rel="noopener noreferrer" target="_blank" className="text-sm text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Paper</Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-full sm:w-auto flex-shrink-0">
              <Image src="/aisafety_1.png" alt="AI Safety Research" width={300} height={500} className="rounded-lg w-full sm:w-[250px] md:w-[300px] h-auto" />
            </div>
            <div className="flex-1 sm:ml-0">
              <p className="text-black font-bold mt-0 sm:mt-4 text-sm sm:text-base">Feeling the Strength but Not the Source: Partial Introspection in LLMs</p>
              <p className='text-black text-sm mt-2'> Ely Hahami, Lavik Jain, <b>Ishaan Sinha</b></p>
              <Link href="https://arxiv.org/pdf/2512.12411" rel="noopener noreferrer" target="_blank" className="text-sm text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Paper</Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-full sm:w-auto flex-shrink-0">
              <Image src="/fancypipeline.png" alt="West Nile Virus Research" width={300} height={500} className="rounded-lg w-full sm:w-[250px] md:w-[300px] h-auto" />
            </div>
            <div className="flex-1 sm:ml-0">
              <p className="text-black font-bold mt-0 sm:mt-4 text-sm sm:text-base">Characterizing West Nile Virus Dynamics With Explainable Machine Learning</p>
              <p className='text-black text-sm mt-2'><b>Ishaan Sinha</b>, Nikhil Muralidhar</p>
              <p className='text-black text-sm mt-1'>Regeneron Science Talent Search</p>
              <Link href="wnv.pdf" rel="noopener noreferrer" target="_blank" className="text-sm text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Paper</Link>
            </div>
          </div>
        </div>


        </div>
        <div className='space-y-6 sm:space-y-10'>
            <h1 className="text-2xl mt-8">Projects</h1>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-full sm:w-auto flex-shrink-0">
              <Image src="/am254pic.png" alt="AM254 Project" width={300} height={500} className="rounded-lg w-full sm:w-[250px] md:w-[300px] h-auto" />
            </div>
            <div className="flex-1 sm:ml-0">
              <p className="text-black font-bold mt-0 sm:mt-4 text-sm sm:text-base">Scaling Laws for Image Denoising</p>
              <p className='text-black text-sm mt-2'><b>Ishaan Sinha</b>, Armie Rysmakhanov</p>
              <Link href="AM254_Final_Project-2.pdf" rel="noopener noreferrer" target="_blank" className="text-sm text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">Paper</Link>
            </div>
          </div>
            
        </div>

        <div className='space-y-6 sm:space-y-10'>
            <h1 className="text-2xl sm:text-3xl mt-8">Other</h1>
            
            <p className="text-black mt-4 text-sm sm:text-base">
                I love playing <Link href="https://www.chess.com/member/bob321326" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-500 transition-all duration-200">bullet chess</Link>, reading philosophy, and watching tennis.
                I am constantly motivated by the desire to create products to ease the human experience.
                 </p>

        </div>

        

      </main>

    </div>
  )
}