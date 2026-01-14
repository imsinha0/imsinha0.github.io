
export default function EducationPage(){
    return(
        <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 sm:px-6 lg:px-60 py-8">

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0 mb-1">
          <h3 className="text-l font-semibold">Harvard University</h3>
          <span className="text-gray-600 text-sm sm:text-base">2024 — 2028</span>
        </div>
        <p className="italic text-m mb-4">A.B. in Mathematics and Computer Science</p>
        <p className="text-xs text-gray-500 mb-4">* denotes graduate-level courses</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-m font-semibold mb-2">Mathematics:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Studies in Algebra and Group Theory (Math 55a)</li>
              <li>Studies in Real and Complex Analysis (Math 55b)</li>
              <li>Algebraic Geometry (Math 137)</li>
              <li>Algebraic Combinatorics (MIT 18.212)</li>
              <li>Mathematical Foundations of High Dimensional Information Processing (APMTH 254) *</li>
              <li>Differential Analysis I and II (MIT 18.155, 18.156) *</li>
            </ul>
          </div>

          <div>
            <h3 className="text-m font-semibold mb-2">Computer Science:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Introduction to Theoretical Computer Science (CS 1210)</li>
              <li>Data Structures and Algorithms (CS 1240)</li>
              <li>Machine Learning (CS 1810)</li>
              <li>Quantum Learning Theory (CS 2233) *</li>
              <li>AI Alignment (CS 2881R) *</li>
              <li>Foundations of Reinforcement Learning (CS 2824) *</li>
              <li>Spectral Graph Theory (CS 2252) *</li>
            </ul>
          </div>

          <div>
            <h3 className="text-m font-semibold mb-2">Statistics:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Introduction to Probability (Stat 110)</li>
              <li>Introduction to Statistical Inference (Stat 111)</li>
              <li>Probability I and II (Stat 210, 212) *</li>
              <li>Linear and Generalized Linear Models (Stat 244) *</li>
            </ul>
          </div>
        </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0 mb-1 pt-6 sm:pt-8">
          <h3 className="text-l font-semibold">South Brunswick High School</h3>
          <span className="text-gray-600 text-sm sm:text-base">2020 — 2024</span>
        </div>
        <p className="italic text-l mb-2">Valedictorian (Top 1/750, 4.0)</p>
        <p className="text-xs sm:text-sm mb-2 leading-relaxed">
          <span className="font-semibold">Princeton University:</span>{' '}
          Single Variable Analysis (MAT215), Multivariable Analysis (MAT300), Linear Algebra (MAT217), Topology (MAT365), Fourier Analysis (MAT325), Measure Theory (MAT425)
        </p>

        </main>
        </div>

    )

}