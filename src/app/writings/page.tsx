import Link from 'next/link';

export default function WritingPage(){

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 sm:px-6 lg:px-60 py-12">
                <h1 className="text-4xl font-bold">Writings</h1>
                <p className="text-gray-600 mt-4">Welcome to my writings page! Here, I showcase some of the writings I&apos;ve worked on. I hope you enjoy looking through them!</p>
            </main>

            <footer className="container mx-auto px-4 py-8 mt-12 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Ishaan Sinha. All rights reserved.</p>
            </footer>
        </div>

    )
}