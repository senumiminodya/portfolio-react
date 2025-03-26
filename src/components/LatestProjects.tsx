const projects = [
    {
        title: "Chat Application",
        description: "This is a chat application built using Java Socket Programming.",
        imgSrc: "src/assets/index_page_images/body_images/what%20i%20had%20done%20latest/chat%20application%20image.png",
        link: "https://github.com/senumiminodya/group-chat-application.git"
    },
    {
        title: "Library Management System",
        description: "This is a library management system built using ORM Concept.",
        imgSrc: "src/assets/index_page_images/body_images/what%20i%20had%20done%20latest/library.png",
        link: "https://github.com/senumiminodya/book-worm.git"
    }
];

const assignments = [
    {
        title: "Assignment 01",
        description: "This assignment is about CSS positioning.",
        imgSrc: "src/assets/project_page_images/css%20positioning.png"
    },
    {
        title: "Assignment 02",
        description: "This assignment is about CSS animations.",
        imgSrc: "src/assets/project_page_images/css%20animations.png"
    },
    {
        title: "Assignment 03",
        description: "This is a POS system for a grocery shop.",
        imgSrc: "src/assets/project_page_images/pos%20system.png"
    },
    {
        title: "Assignment 04",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        imgSrc: "src/assets/index_page_images/body_images/what%20i%20had%20done%20latest/project%20image.png"
    }
];

function LatestProjects  () {
    return (
        <section className="bg-yellow-500 text-white py-16 px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-3/5 space-y-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
                            <img src={project.imgSrc} alt={project.title} className="w-48 h-48 object-cover rounded-lg" />
                            <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                            <p className="text-lg mt-2">{project.description}</p>
                            <a href={project.link} className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">Read More</a>
                        </div>
                    ))}
                </div>
                <div className="text-center md:text-right mt-10 md:mt-0 md:w-1/3">
                    <h1 className="my-[30px] text-5xl md:text-7xl text-black font-bold">WHAT I HAD</h1>
                    <h1 className="my-[30px] text-5xl md:text-7xl text-black font-bold">DONE LATEST</h1>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <button className="bg-gray-900 text-white text-lg font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-110">
                    See More ...
                </button>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {assignments.map((assignment, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                        <img src={assignment.imgSrc} alt={assignment.title} className="w-48 h-48 object-cover rounded-lg mx-auto" />
                        <h1 className="text-2xl font-bold mt-4">{assignment.title}</h1>
                        <p className="text-lg mt-2">{assignment.description}</p>
                        <a href="#" className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestProjects;