import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg"
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
 return(
    <div className="border-b-2 border-b-yellow-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl outlined-text font-bold tracking-tight text-orange-600">
              PlumpBelly.com
            </span>
            <img src={Logo} alt="Plumpbelly Logo" className="h-max-h-16 max-w-16 object-contain" />
            </Link>
            <div className="md:hidden items-center">
              <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>
        </div>
    </div>
 );
};

export default Header;