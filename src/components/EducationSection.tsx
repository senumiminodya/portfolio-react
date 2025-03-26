function EducationSection() {
    const educationData = [
        {
            title: "GCE O/L",
            institution: "Bandaragama Central College",
            details: "I have passed GCE O/L with 7As and 2Bs."
        },
        {
            title: "GCE A/L",
            institution: "Bandaragama Central College",
            details: "I have passed GCE A/L with C, C, S in Maths stream."
        },
        {
            title: "Bachelor of Information Technology",
            institution: "University of Colombo",
            details: "I'm following BIT at the University of Colombo."
        },
        {
            title: "Graduate Diploma in Software Engineering",
            institution: "Institute of Software Engineering",
            details: "I'm following the GDSE programme at IJSE."
        }
    ];

    return (
        <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-yellow-500 p-6 lg:p-16 lg:gap-30">
            {/* Left Side */}
            <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="text-5xl lg:text-7xl font-bold font-amatic leading-tight">MY</h1>
                <h1 className="text-5xl lg:text-7xl font-bold font-amatic leading-tight">EDUCATION</h1>
            </div>

            {/* Right Side */}
            <div className="space-y-6 w-full max-w-2xl">
                {educationData.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <img src="/src/assets/index_page_images/body_images/my%20education/black%20circle.png" alt="icon" className="w-6 h-6 lg:w-8 lg:h-8" />
                        <div>
                            <h3 className="text-xl lg:text-2xl font-jetbrains font-bold">{edu.title}</h3>
                            <p className="text-md lg:text-lg font-mono">({edu.institution})</p>
                            <p className="text-md lg:text-lg font-mono text-gray-800">{edu.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EducationSection;

