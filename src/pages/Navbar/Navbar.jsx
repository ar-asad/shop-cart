import { Link } from "react-router-dom";


const Navbar = () => {
    const menuItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Product",
            path: "/product"
        },

    ];
    return (
        <div className="flex justify-between pt-5 pb-4 ps-0 pr-0 border-b-2 border-gray-400">
            <h3 className="text-2xl"><span className="font-bold">shop</span>cart</h3>
            <div className="flex gap-8">
                {
                    menuItems.map((item, i) =>
                        <li className="font-semibold list-none " key={i}><Link to={item.path}>{item.name}</Link></li>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;