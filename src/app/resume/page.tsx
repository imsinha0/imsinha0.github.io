


export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
            <iframe 
                src="/IshaanResume.pdf" 
                title="Resume" 
                className="w-full h-[90vh] md:w-[75%] border rounded-lg"
            ></iframe>
        </div>
    );
}
