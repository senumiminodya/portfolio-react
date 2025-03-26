function FeedbackSection() {
    return (
        <section className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
            <div className="w-full max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-center text-white font-amatic mb-8">
                    FEEDBACK
                </h1>
                <form className="flex flex-col space-y-6">
                    <div>
                        <h3 className="text-white text-xl md:text-2xl font-mono">Feedback Type:</h3>
                        <div className="flex flex-wrap gap-4 mt-2">
                            {["Comments", "Suggestions", "Questions"].map((type, index) => (
                                <label key={index} className="flex items-center space-x-2 text-white text-base md:text-lg font-mono">
                                    <input type="radio" name="feedbackType" className="w-4 h-4 md:w-5 md:h-5" defaultChecked={index === 0} />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white text-xl md:text-2xl font-mono">Describe Your Feedback:</h3>
                        <textarea
                            className="w-full h-32 md:h-40 bg-yellow-500 p-4 rounded-md mt-2 resize-none"
                            placeholder="Enter your message here"
                        ></textarea>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-white text-xl md:text-2xl font-mono">Name:</h3>
                            <input
                                type="text"
                                className="w-full h-10 bg-yellow-500 p-2 rounded-md mt-2"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-white text-xl md:text-2xl font-mono">E-mail:</h3>
                            <input
                                type="email"
                                className="w-full h-10 bg-yellow-500 p-2 rounded-md mt-2"
                                placeholder="Enter your E-mail"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full md:w-48 h-12 bg-gray-400 text-gray-900 font-mono text-lg font-bold rounded-md transition transform hover:bg-yellow-500 hover:scale-105"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default FeedbackSection;
