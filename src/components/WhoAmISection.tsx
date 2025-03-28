import { useState, useEffect } from "react";
import "./WhoAmISection.css";

function WhoAmI() {
    const text = "Hello! I am Senumi. I am a passionate software engineering student who loves exploring technology and innovation. I enjoy learning new things and working with others to achieve great results. I am committed to improving my skills and contributing to the advancement of technology in every project I work on.";

    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDisplayedText(""); // Reset text
        setIndex(0); // Reset index

        const interval = setInterval(() => {
            setDisplayedText((prev) => text.slice(0, prev.length + 1));
            setIndex((prevIndex) => prevIndex + 1);

            if (index >= text.length - 1) {
                clearInterval(interval);
            }
        }, 50); // Adjust speed here

        return () => clearInterval(interval);
    }, []); // Runs once on mount

    return (
        <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-yellow-500 p-4 sm:p-6 md:gap-16 lg:gap-24">
            {/* Left Side */}
            <div
                className="text-center md:text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-amatic text-gray-900"
                data-aos="fade-right"
            >
                <h1 className="my-2 sm:my-4 md:my-6">WHO</h1>
                <h1 className="my-2 sm:my-4 md:my-6">AM</h1>
                <h1 className="my-2 sm:my-4 md:my-6">I</h1>
            </div>

            {/* Right Side */}
            <div className="flex flex-col max-w-xs sm:max-w-md md:max-w-lg px-4 items-center space-y-4 text-center text-base sm:text-lg md:text-xl font-mono text-gray-900">
                <img
                    src="/assets/index_page_images/body_images/who%20i%20am/black%20circle.png"
                    alt="Circle"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
                <p>{displayedText}<span className="animate-blink">|</span></p>
                <img
                    src="/assets/index_page_images/body_images/who%20i%20am/black%20circle.png"
                    alt="Circle"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
            </div>
        </section>
    );
}

export default WhoAmI;
