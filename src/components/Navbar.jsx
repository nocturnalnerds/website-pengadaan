import React, { useEffect } from "react";
import logo from '../assets/logo.png';

const Navbar = () => {
    count[isMenuOpen, setIsMenuOpen] = useState(false);
    count[isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    const toggleMenu = () =>{
        setIsMenuOpen(!iseMenuOpen);
    }
    const navItems = [
        {link: "Home", path: "home" },
        {link: "Service", path: "service" },
        {link: "About", path: "about" },
        {link: "Product", path: "product" },
        {link: "Testimonial", path: "testimonial" },
        {link: "FAQ", path: "faq" },
    ];
    return (
        // <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        //     <nav>
        //         <div>
        //             <a href=""><img src={logo} alt="" />NEXCENT</a>
        //         </div>
        //     </nav>
        // </header>
        <h1>
            WOEEE KOK GAK KELUARRR
        </h1>
    );
}

export default Navbar;