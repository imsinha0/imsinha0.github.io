import Link from 'next/link';
import { Button } from "@/components/ui/button";


export default function BooksPage() {
    const books = [
        {
            title: "Searching for Bobby Fischer",
            author: "Fred Waitzkin",
            year: 2025,
            thoughts: "Chess from the perspective of a father and son. Transcends the game of chess into a look at a father's love for his son."
        },

        {
            title: "Surely You're Joking, Mr. Feynman!",
            author: "Richard P. Feynman",
            year: 2024,
            thoughts: "Humorously recounts Feynman's life and experiences, opens eyes to other side of Feynman's personality."
        },
        // Add more books as needed
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
        <header className="container mx-auto px-60 pt-20">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">Ishaan Sinha</Link>
          <div className="space-x-5">
        </div>
        </nav>
      </header>

        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-8">
            <div className="container mx-auto max-w-4xl">
                <div className="space-y-6">
                    {books.map((book, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">{book.title}</h2>
                            <p className="text-gray-600">by {book.author}</p>
                            <p className="text-gray-500 text-sm">Read in {book.year}</p>
                            <p className="mt-2 text-gray-700">{book.thoughts}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}
