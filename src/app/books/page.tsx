export default function BooksPage() {
    const books = [
        {
            title: "Searching for Bobby Fischer",
            author: "Fred Waitzkin",
            year: 2025,
            thoughts: "Chess from the perspective of a father and son. Transcends the game of chess into a look at a father's love for his son."
        },
        {
            title: "The Count of Monte Cristo",
            author: "Alexander Dumas",
            year: 2025,
            thoughts: "A story of revenge and redemption."
        },
        {
            title: "Surely You're Joking, Mr. Feynman!",
            author: "Richard P. Feynman",
            year: 2024,
            thoughts: "Humorously recounts Feynman's life and experiences, opens eyes to other side of Feynman's personality."
        },
        {
            title: "Ender's Game",
            author: "Orson Scott Card",
            year: 2023,
            thoughts: "Dystopian society showing the value of perception over truth."
        },
        {
            title: "The End of Everything",
            author: "Katie Mack",
            year: 2023,
            thoughts: "Explores the end of the universe and the nature of time."
        }
    ];

    // Sort by year in reverse chronological order (newest first)
    const sortedBooks = [...books].sort((a, b) => b.year - a.year);

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 sm:px-6 lg:px-60 py-8 sm:py-12">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Reading</h1>
                <div className="space-y-4 sm:space-y-6">
                    {sortedBooks.map((book, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-2">
                                <div className="flex-1">
                                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{book.title}</h2>
                                    <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                                </div>
                                <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded self-start sm:self-auto">
                                    {book.year}
                                </span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed mt-3">{book.thoughts}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
