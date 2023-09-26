import { NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="container mx-auto px-2 md:px-12 lg:px-28 relative z-50 ">
            <div className="navbar bg-transparent flex gap-5">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className=" flex gap-3 md:gap-6 lg:gap-10 px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/donation'>Donation</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>












        // <div className="container mx-auto border border-red-500">
        //     <div className="hero h-[600px]" style={{ backgroundImage: `url(https://i.ibb.co/k5VWkkq/rectangle-4281.jpg)` }}>
        //     <div className="hero-overlay bg-opacity-80"></div>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold w-[770px] border">I Grow By Helping People In Need</h1>
        //             <div className="form-control ">
        //                 <div className="input-group">
        //                     <input type="text" placeholder="Search…" className="input input-bordered " />
        //                     <button className="btn btn-primary bg-[#FF444A] border-none">
        //                         Search
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="navbar bg-base-100">
        //         <div className="flex-1">
        //             <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        //         </div>
        //         <div className="flex-none">
        //             <ul className="menu menu-horizontal px-1">
        //                 <li><a>Link</a></li>
        //                 <li>
        //                     <details>
        //                         <summary>
        //                             Parent
        //                         </summary>
        //                         <ul className="p-2 bg-base-100">
        //                             <li><a>Link 1</a></li>
        //                             <li><a>Link 2</a></li>
        //                         </ul>
        //                     </details>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        // </div>
    )
};

export default Navbar;