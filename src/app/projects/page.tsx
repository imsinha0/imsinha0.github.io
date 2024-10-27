

import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function ProjectsPage(){

    return (

        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            <header className="container mx-auto px-60 py-20">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold">Ishaan Sinha</Link>
                    <div className="space-x-4">
                        <Link href="/projects"><Button variant="ghost">Projects</Button></Link>
                        <Link href="/writings"><Button variant="ghost">Writings</Button></Link>
                        <Link href="/blog"><Button variant="ghost">Blog</Button></Link>
                        <Link href="/research"><Button variant="ghost">Research</Button></Link>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-gray-600 mt-4">Welcome to my projects page! Here, I showcase some of the projects I've worked on. I hope you enjoy looking through them!</p>
            </main>

            <footer className="container mx-auto px-4 py-8 mt-12 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Ishaan Sinha. All rights reserved.</p>
            </footer>
        </div>

    )

}