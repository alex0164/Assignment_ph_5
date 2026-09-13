

const Footer = () => {
    return (
        <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-white  text-gray-600 h-20 width-full">
            <div>© 2026 Dev Stack. All rights reserved.</div>
            <div className="flex gap-4 items-center">
                <ul className="flex gap-4 items-center text-sm text-gray-600">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;