function MySkillsSection() {
    return (
        <section className="flex flex-col md:flex-row justify-around items-center min-h-screen bg-yellow-500 p-6">
            {/* Center - Title (Appears First on Small Screens) */}
            <div className="text-center mb-6 md:mb-0 md:w-1/3 order-1 md:order-2" data-aos="fade-up">
                <h1 className="my-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-amatic">MY</h1>
                <h1 className="my-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-amatic">SKILLS</h1>
            </div>

            {/* Left Side - Soft Skills (Second on Small Screens) */}
            <div className="text-center mb-6 md:mb-0 md:w-1/3 order-3 md:order-3">
                <h3 className="font-mono text-2xl mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-lg font-mono">
                    {["Communication Skills", "Teamwork & Collaboration", "Problem Solving", "Adaptability", "Time Management", "Critical Thinking", "Empathy", "Leadership", "Self-Motivation"].map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            {/* Right Side - Technical Skills  */}
            <div className="text-center mb-6 md:w-1/3 order-1 md:order-1">
                <h3 className="font-mono text-2xl mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                    {[
                        "css", "java", "github", "javaScript", "html", "expressJS",
                        "git", "hibernate", "linux", "mongodb", "python", "react",
                        "spring-boot", "sql", "windows"
                    ].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={`/assets/index_page_images/body_images/my%20skills/${tech}%20icon.png`}
                                alt={tech}
                                title={tech}
                                className="h-12 w-12"
                            />
                            <p className="text-sm mt-1 capitalize">{tech.replace(/-/g, ' ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MySkillsSection;
