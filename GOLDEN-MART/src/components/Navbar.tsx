import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";
import Logo from '../images/_2fe58716-bf8b-4f77-95f7-da717102793d.jpeg';


const Navbar = () => {
    return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container hidden lg:block">
            <div className = "flex justify-between items-center p-8">
            <img className="rounded h-16 w-auto" src={Logo} alt="Golden Mart Logo" />


                <div className="relative w-full max-w-[500px]">
                    <input 
                    className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
                    type="text"
                    placeholder="Search Product...." />

                    <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
                    size={20} />
                </div>

                <div className="flex gap-4">
                    <div className="icon_wrapper">
                        <AiOutlineUser />
                    </div>
                    <div className="icon_wrapper relative">
                        <AiOutlineShoppingCart />
                        <CartCountBadge size="w-[25px] h-[25px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navbar;