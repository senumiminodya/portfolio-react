function LatestProjects ()  {
    const projects = [
        {
            title: "Class Management System",
            description: "This is a Mern stack system with JWT authentication, Bcrypt, Mongoose ODM, and Mongo DB.",
            imgSrc: "/assets/index_page_images/body_images/what_I_had_done_latest/class_management_system.jpg",
            link: "https://github.com/senumiminodya/Class-Management-System-Front-End.git"
        },
        {
            title: "Crop Monitoring System",
            description: "This is a Java SpringBoot system with JWT authentication, Hibernate ORM, and MySQL, efficient database operations, and seamless client-server communication.",
            imgSrc: "/assets/index_page_images/body_images/what_I_had_done_latest/crop_monitoring_system.jpg",
            link: "https://github.com/senumiminodya/Crop-Management-System.git"
        },
        {
            title: "Chat Application",
            description: "This is a chat application built using Java Socket Programming.",
            imgSrc: "/assets/index_page_images/body_images/what_I_had_done_latest/chat_application_image.png",
            link: "https://github.com/senumiminodya/group-chat-app.git"
        },
        {
            title: "Library Management System",
            description: "This is a library management system built using ORM Concept.",
            imgSrc: "/assets/index_page_images/body_images/what_I_had_done_latest/library.png",
            link: "https://github.com/senumiminodya/book-worm.git"
        },
        {
            title: "POS System",
            description: "This is a POS system for a grocery shop.",
            imgSrc: "/assets/index_page_images/body_images/what_I_had_done_latest/pos_system.png",
            link: "https://github.com/senumiminodya/store-stream-pos-system.git"
        }
    ];
    return (
        <section className="bg-yellow-500 text-white py-16 px-4 md:px-8 lg:px-16">
            <div className="flex justify-center mb-10">
                <h1 className="text-3xl md:text-6xl text-black font-bold text-center leading-tight">WHAT I HAD DONE LATEST</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center">
                        <img src={project.imgSrc} alt={project.title} className="w-full max-w-xs h-48 object-cover rounded-lg"/>
                        <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                        <p className="text-base mt-2">{project.description}</p>
                        <a href={project.link} className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestProjects;
