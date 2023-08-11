

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#404040" }}>
            <div className="w-11/12 mx-auto text-gray-200 flex justify-between p-8 items-center">
                <h4 className="text-2xl"><span className="font-bold">shop</span>Cart</h4>
                <ul className="flex gap-4">
                    <li className="list-nones">About us</li>
                    <li className="list-nones">Contact</li>
                    <li className="list-nones">Help</li>
                </ul>
                <p>English</p>
            </div>
        </div>
    );
};

export default Footer;