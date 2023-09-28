import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-lg font-bold">Terima kasih telah mengunjungi situs saya!</p>
                <p className="mt-2">Ikuti saya di sosial media:</p>
                <div className="flex justify-center mt-4">
                    <a
                        href="https://github.com/rafiakbar13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rafiakbar13/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 hover:underline"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:rafi@example.com"
                        className="mx-2 hover:underline"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
