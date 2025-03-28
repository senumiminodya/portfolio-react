import Swal from 'sweetalert2';

function FeedbackSection() {
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget; // Use event.currentTarget instead of event.target
        const formData = new FormData(form);

        formData.append("access_key", "bf80dab3-9f09-4045-869b-4306a3de2899");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const res = await response.json();

            if (res.success) {
                console.log("Success:", res);
                form.reset(); // Reset form after successful submission
                Swal.fire({
                    icon: "success",
                    title: "Feedback Submitted!",
                    text: "Thank you for your feedback.",
                    confirmButtonColor: "#3085d6"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Submission Failed",
                    text: "Please try again.",
                    confirmButtonColor: "#d33"
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: "error",
                title: "An Error Occurred",
                text: "Please try again later.",
                confirmButtonColor: "#d33"
            });
        }
    };

    return (
        <section className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
            <div className="w-full max-w-3xl">
                <h1 className="text-3xl md:text-7xl font-bold text-center text-white font-amatic mb-8">
                    FEEDBACK
                </h1>
                <form onSubmit={onSubmit} className="flex flex-col space-y-6">
                    <div>
                        <h3 className="text-white text-xl md:text-2xl font-mono">Feedback Type:</h3>
                        <div className="flex flex-wrap gap-4 mt-2">
                            {["Comments", "Suggestions", "Questions"].map((type, index) => (
                                <label key={index} className="flex items-center space-x-2 text-white text-base md:text-lg font-mono">
                                    <input type="radio" name="feedbackType" value={type} className="w-4 h-4 md:w-5 md:h-5" defaultChecked={index === 0} />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white text-xl md:text-2xl font-mono">Describe Your Feedback:</h3>
                        <textarea
                            name="message"
                            className="w-full h-32 md:h-40 bg-yellow-500 p-4 rounded-md mt-2 resize-none"
                            placeholder="Enter your message here"
                            required
                        ></textarea>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-white text-xl md:text-2xl font-mono">Name:</h3>
                            <input
                                type="text"
                                name="name"
                                className="w-full h-10 bg-yellow-500 p-2 rounded-md mt-2"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-white text-xl md:text-2xl font-mono">E-mail:</h3>
                            <input
                                type="email"
                                name="email"
                                className="w-full h-10 bg-yellow-500 p-2 rounded-md mt-2"
                                placeholder="Enter your E-mail"
                                required
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
