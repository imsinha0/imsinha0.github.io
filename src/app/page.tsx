import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="container mx-auto px-60 pt-20">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">Ishaan Sinha</Link>
          <div className="space-x-5">
        <Link href="/education"><Button variant="ghost">Education</Button></Link>
        </div>
        </nav>
      </header>

      <main className="container mx-auto px-60 py-12">
        <div className="flex items-start">
          <div className="flex-1">
            <p className="text-black mt-4 text-sm">
              I am an undergraduate student at <Link href="https://www.harvard.edu/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800">Harvard University </Link>
              studying mathematics and computer science. I&apos;m interested in deep generative modeling, biologically plausible models, and AI applications to science.
            </p>

            <p className="text-black mt-4 text-sm">
                Currently, I am a student researcher at Harvard&apos;s <Link href="https://cse-lab.seas.harvard.edu/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800">Computer Science and Engineering Lab</Link>, working on diffusion models for text-to-video modeling. I am also a student researcher at the <Link href="https://klab.tch.harvard.edu/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800">Kreiman Lab</Link>, associated with Harvard Medical School and Boston Children&apos;s Hospital, working on understanding visual search in biological and artifical intelligence.
            </p>

            <p className="text-black mt-4 text-sm">
              Previously, I was a student researcher at the <Link href="https://sites.google.com/view/nikhil-muralidhar" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800">Scientific Artificial Intelligence Lab</Link> at the Stevens Institute of Technology, advised by Professor Nikhil Muralidhar.
              I was selected as a <Link href="https://www.societyforscience.org/regeneron-sts/2024-scholars/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800">Regeneron Science Talent Search Scholar</Link> for my work on West Nile Virus modeling.
            </p>
          </div>

          <div className="ml-8">
            <Image
              src="/ishaan2.jpg"
              alt="Picture of me"
              width={300}
              height={500}
                className="rounded-lg"
            />
          </div>
        </div>

        <p className="text-black mt-4 text-sm">
            <Link href="mailto:imsinha@college.harvard.edu" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800" > [Email]</Link> / <Link href="https://github.com/imsinha0" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800"> [Github]</Link> / <Link href="https://www.linkedin.com/in/imsinha1/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800"> [LinkedIn]</Link> / <Link href="https://x.com/imsinha0" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800"> [X]</Link>
        </p>

        <div className='space-y-10 pt-8'>
        <h1 className="text-2xl mt-8">Research</h1>
        <p className="text-black mt-4 text-sm"> I believe that studying intelligence, at the intersection of deep learning and the sciences, will increase AI capabilities. </p>
        
        <div className="flex items-start">
        <Image src="/fancypipeline.png" alt="West Nile Virus Research" width={300} height={500} className="rounded-lg" />
        <div className="ml-8 pl-8">
        <p className="text-black font-bold mt-4 text-sm"> Characterizing West Nile Virus Dynamics With Explainable Machine Learning </p>
        <p className='text-black text-sm'> <b>Ishaan Sinha</b>, Nikhil Muralidhar </p>
        <p className='text-black text-sm'> Regeneron Science Talent Search</p>
        <Link href="wnv.pdf" rel="noopener noreferrer" target="_blank" className="text-sm text-blue-600 hover:text-blue-800">Project</Link>
        </div>
        </div>
        </div>

        <div className='space-y-10 pt-8'>
            <h1 className="text-2xl mt-8">Projects</h1>
            <p className="text-black mt-4 text-sm"> Software is an effective mean to add value to people&apos;s lives. I like to make cool projects that people will enjoy!</p>
            <div className="flex items-start">
                <Image src="/colorchess2.png" alt="Color Chess" width={200} height={500} className="rounded-lg" />
                <div className="ml-8 pl-8">
                <p className="text-black font-bold mt-4 text-sm"> Color Chess </p>
                <p className='text-black text-sm'> A chess variant with each player constrained to move to a color chosen by the other player. </p>
                <p className='text-black text-sm'> Built using NextJS, ShadcnUI, TailwindCSS</p>
                <Link href="https://github.com/imsinha0/colorchess" rel="noopener noreferrer" target="_blank" className="text-sm text-blue-600 hover:text-blue-800">Project</Link>
                </div>
            </div>
        </div>

        <div className='space-y-10 pt-8'>
            <h1 className="text-2xl mt-8">Other</h1>
            
            <p className="text-black mt-4 text-sm">
                Outside of research and projects, I love playing <Link href="https://www.chess.com/member/bob321326" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:text-blue-800">bullet chess</Link>, reading philosophy, and watching tennis.
                I am constantly motivated by the desire to create products to ease the human experience.
                 </p>

        </div>

        

      </main>

    </div>
  )
}