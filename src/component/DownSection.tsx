import Logo from "../assets/logo-text.png";

const DownSection = () => {
    return (
        <div className="bg-white border-t border-gray-200 mt-12 container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

            <div>
                <img src={Logo} alt="Dev Stack" className="h-8 mb-3" />
                <p className="text-sm text-gray-500 mb-4">
                    Curated tools, technologies, and resources for developers building<br />
                    modern software.
                </p>
                <ul className="flex gap-4 items-center text-sm text-gray-600">
                    <li className="hover:text-gray-900 cursor-pointer">GitHub</li>
                    <li className="hover:text-gray-900 cursor-pointer">Twitter</li>
                    <li className="hover:text-gray-900 cursor-pointer">LinkedIn</li>
                </ul>
            </div>

            <div>
                <h2 className="font-semibold text-sm text-gray-900 mb-3 tracking-wide">PRODUCT</h2>
                <ul className="flex flex-col gap-2 text-sm text-gray-500">
                    <li className="hover:text-gray-900 cursor-pointer">Home</li>
                    <li className="hover:text-gray-900 cursor-pointer">Technologies</li>
                    <li className="hover:text-gray-900 cursor-pointer">Projects</li>
                </ul>
            </div>

            <div>
                <h2 className="font-semibold text-sm text-gray-900 mb-3 tracking-wide">COMPANY</h2>
                <ul className="flex flex-col gap-2 text-sm text-gray-500">
                    <li className="hover:text-gray-900 cursor-pointer">About</li>
                    <li className="hover:text-gray-900 cursor-pointer">Company</li>
                    <li className="hover:text-gray-900 cursor-pointer">Careers</li>
                </ul>
            </div>

            <div>
                <h2 className="font-semibold text-sm text-gray-900 mb-3 tracking-wide">LEGAL</h2>
                <ul className="flex flex-col gap-2 text-sm text-gray-500">
                    <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
                    <li className="hover:text-gray-900 cursor-pointer">Terms of Service</li>
                </ul>
            </div>

        </div>
    );
};

export default DownSection;