function Footer() {
    return (
        <footer className="bg-gray-300 py-10 px-6 text-gray-900">
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
                {/* Working Days and Hours */}
                <div>
                    <h3 className="text-2xl font-mono">Working Days & Hours</h3>
                    <p className="text-lg font-mono">Mon-Fri / 8.00AM - 6.00PM</p>
                    <p className="text-lg font-mono">Sat-Sun / 8.00AM - 2.00PM</p>
                </div>

                {/* Contact Details */}
                <div>
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                        <img src="/assets/index_page_images/footer_images/address%20icon.png" alt="address" className="w-6 h-6" />
                        <h3 className="text-2xl font-mono ml-2">Address</h3>
                    </div>
                    <p className="text-lg font-mono">47/12 A, Bandaragama West,</p>
                    <p className="text-lg font-mono">Bandaragama</p>

                    <div className="flex items-center justify-center lg:justify-start mt-4">
                        <img src="/assets/index_page_images/footer_images/phone%20no%20icon.png" alt="phone" className="w-6 h-6" />
                        <h3 className="text-2xl font-mono ml-2">Phone</h3>
                    </div>
                    <p className="text-lg font-mono">(+94)763533726</p>

                    <div className="flex items-center justify-center lg:justify-start mt-4">
                        <img src="/assets/index_page_images/footer_images/email%20icon.png" alt="email" className="w-6 h-6" />
                        <h3 className="text-2xl font-mono ml-2">Email</h3>
                    </div>
                    <a href="mailto:senumiminodya456@gmail.com" className="text-lg font-mono text-blue-600 hover:underline">
                        senumiminodya456@gmail.com
                    </a>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-2xl font-mono">Services</h3>
                    <p className="text-lg font-mono">Web Development</p>
                    <p className="text-lg font-mono">Software Development</p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-2xl font-mono">Social Media</h3>
                    <div className="flex justify-center lg:justify-start space-x-4 mt-2">
                        <img src="/assets/index_page_images/footer_images/whatsapp%20icon.png" alt="whatsapp" className="w-8 h-8" />
                        <img src="/assets/index_page_images/footer_images/telegram%20icon.png" alt="telegram" className="w-8 h-8" />
                        <img src="/assets/index_page_images/footer_images/facebook%20icon.png" alt="facebook" className="w-8 h-8" />
                    </div>
                </div>
            </div>

            {/* Powered By Section */}
            <div className="text-center lg:text-right bg-gray-300 py-4 px-6 mt-6">
                <p className="text-lg font-mono">Powered by Senumi Minodya</p>
            </div>
        </footer>
    );
}

export default Footer;
