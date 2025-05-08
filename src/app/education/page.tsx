

import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function EducationPage(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
        <header className="container mx-auto px-60 pt-20">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold">Ishaan Sinha</Link>
            <div className="space-x-5">
          <Link href="/education"><Button variant="ghost" className='font-semibold'>Education</Button></Link>
          </div>
          </nav>
        </header>
  
        <main className="container mx-auto px-60 py-12">

        <div className="flex justify-between items-baseline mb-1">
          <h3 className="text-l font-semibold">Harvard University</h3>
          <span className="text-gray-600">2024 — 2028</span>
        </div>
        <p className="italic text-m">A.B. in Mathematics and Computer Science (4.0)</p>

        <div>
        <h3 className="text-m font-semibold mb-2 pt-2">Undergraduate Technical Coursework:</h3>
        <ul className="list-disc pl-5 pt-2 space-y-2 text-sm">
          <li>Studies in Algebra and Group Theory (Math 55a)</li>
          <li> Studies in Real and Complex Analysis (Math 55b)</li>
          <li> Differential Topology (Math 132)</li>
          <li> Introduction to Theoretical Computer Science (CS 1210)</li>
          <li> Data Structures and Algorithms (CS 1240)</li>
          <li> Machine Learning (CS 1810)</li>
          <li> Introduction to Probability (Stat 110)</li>
          <li> Introduction to Statistical Inference (Stat 111)</li>
      
        </ul>
        <h3 className="text-m font-semibold mb-2 pt-2">Graduate Technical Coursework:</h3>
        <ul className="list-disc pl-5 pt-2 space-y-2 text-sm">
        <li>Quantum Learning Theory (CS 2233)</li>
        <li>High Dimensional Information Processing (APMTH 254)</li>
        <li> Differential Analysis (MIT 18.155)</li>
        <li> Probability (Stat 210)</li>
        <li> AI Alignment (CS 2881R)</li>
        <li>Optimized Democracy (CS 2380)</li>
        </ul>
      </div>

      <div className="flex justify-between items-baseline mb-1 pt-8">
          <h3 className="text-l font-semibold">Princeton University</h3>
          <span className="text-gray-600">2022 — 2024</span>
        </div>
        <p className="italic text-l">Dual Enrollment</p>

        <div>
        <h3 className="text-m font-semibold mb-2 pt-2">Technical Coursework:</h3>
        <ul className="list-disc pl-5 pt-2 space-y-2 text-sm">
          <li>Single Variable Analysis (MAT215)</li>
          <li> Multivariable Analysis (MAT300)</li>
          <li> Linear Algebra (MAT217)</li>
          <li> Topology (MAT365)</li>
          <li> Fourier Analysis (MAT325)</li>
           <li> Measure Theory (MAT425)</li>
        </ul>
      </div>

      <div className="flex justify-between items-baseline mb-1 pt-8">
          <h3 className="text-l font-semibold">South Brunswick High School</h3>
          <span className="text-gray-600">2020 — 2024</span>
        </div>
        <p className="italic text-l">Valedictorian (Top 1/750, 4.0)</p>



        </main>
        </div>

    )

}