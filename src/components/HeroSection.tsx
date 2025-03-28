import './HeroSection.css'
import {useNavigate} from "react-router-dom";
function HeroSection() {
    const navigate = useNavigate(); // Hook to navigate between pages
    return (
        <section className="flex flex-col-reverse mt-[64px] md:flex-row justify-center items-center min-h-screen bg-gray-800 text-white px-4 py-8 md:py-12">

            {/* Hero Left Side (Bottom on Mobile, Left on Desktop) */}
            <div className="flex flex-col items-center my-[10px] md:items-start text-center md:text-left w-full md:w-1/3">
                <h3 className="text-lg md:text-3xl font-mono">Full Stack Developer</h3>
                <h3 className="text-lg md:text-3xl font-mono">Sri Lanka</h3>
                <div className="flex gap-3 md:gap-4 mt-4">
                    <a href="https://www.linkedin.com/in/senumi-minodya-026a70246/" target="_blank"
                       rel="noopener noreferrer">
                        <img
                            src="/assets/index_page_images/header_images/linkedin_logo.png"
                            alt="LinkedIn"
                            className="w-8 h-8 md:w-12 md:h-12 cursor-pointer hover:scale-110 transition-transform"
                        />
                    </a>
                    <a href="https://web.facebook.com/senumi.perera.98/" target="_blank"
                       rel="noopener noreferrer">
                        <img src="/assets/index_page_images/header_images/facebook_logo.png" alt="Facebook"
                             className="w-8 h-8 md:w-12 md:h-12 cursor-pointer hover:scale-110 transition-transform"/>
                    </a>
                    <a href="https://github.com/senumiminodya" target="_blank"
                       rel="noopener noreferrer">
                        <img src="/assets/index_page_images/header_images/github_logo.png"
                             alt="GitHub"
                             className="w-8 h-8 md:w-12 md:h-12 cursor-pointer hover:scale-110 transition-transform"/>
                    </a>

                </div>
                {/* View CV Button */}
                <button
                    onClick={() => navigate("/view-cv")}
                    className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-black font-bold rounded-lg text-sm md:text-base hover:bg-white hover:text-yellow-500 transition-all"
                >
                    <i className="fa-solid fa-download pr-2"></i> View CV
                </button>
            </div>

            {/* Hero Center (Moves to Top on Mobile) */}
            <div className="profile rounded-l-full relative w-40 h-52 my-[10px] md:w-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 order-3">
                <img
                    src="/assets/index_page_images/header_images/photo.png"
                    alt="My Profile Picture"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Hero Right Side (Top on Mobile, Right on Desktop) */}
            <div className="w-full my-[10px] md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right font-bold font-sans order-2">
                <h1 className="text-2xl md:text-6xl my-4 md:my-6">SENUMI</h1>
                <h1 className="text-2xl md:text-6xl my-4 md:my-6">MINODYA</h1>
            </div>

        </section>
    );
}

export default HeroSection;
