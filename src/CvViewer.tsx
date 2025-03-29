import React from "react";

const CvViewer: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center">
        <iframe
            src="/Senumi-Minodya.pdf"
            title="CV Viewer"
            className="w-full h-full border-none"
        ></iframe>
        </div>
    );
};

export default CvViewer;

