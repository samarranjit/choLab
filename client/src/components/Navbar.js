import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* change the hidden to flex */}
      <div className="bg-[#007C92] flex items-center justify-between py-4 h-[70px] shadow-md md:hidden px-7 dark:bg-[#013A63]">
        {/* Logo Section */}
        <div className="flex items-center h-full space-x-5">
          <Link to='https://www.txst.edu/' target='_blank' className="h-[250%] cursor-pointer">
            <img src={`${process.env.PUBLIC_URL}/StaticImages/TexasStateUniBlackLogoNoBg.png`} className="invert h-[100%]" alt="TXST Logo" />
          </Link>
          <Link to="/" className="ml-4">
            <h2 className="text-primary text-2xl  cursor-pointer">The Cho Lab</h2>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="nav-link text-xl text-primary flex font-open space-x-8">
          {/* <Link to="/" className="hover:text-tertiary transition duration-200">Home</Link> */}
          <Link to="/research" className="hover:text-tertiary transition duration-200">Research</Link>
          <Link to="/about" className="hover:text-tertiary transition duration-200">People</Link>
          <Link to="/news" className="hover:text-tertiary transition duration-200">News</Link>
          <Link to="/publication" className="hover:text-tertiary transition duration-200">Publication</Link>
          <Link to="/mentorship" className="hover:text-tertiary transition duration-200">Teaching & Mentorship</Link>
          <Link to="/opportunities" className="hover:text-tertiary transition duration-200">Opportunities</Link>
        </div>
      </div>


      <div className='hidden md:flex md:flex-col absolute w-[100vw] transition duration-300 top-0 h-[70px] z-10'>
        <div className="navbar-phone p-5 bg-[#007C92] flex  justify-between h-[70px] align-middle w-screen relative">

          <Link to="/">
            <h2 className='text-primary text-xl ml-4 align-middle cursor-pointer'>The Cho Lab</h2>
          </Link>
          {
            isOpen ?
              <RxCross1 onClick={toggleMenu} className='text-primary border-[0.5px] p-1 rounded-[50%] font-semibold text-2xl border-primary' />
              :
              <GiHamburgerMenu onClick={toggleMenu} className='text-primary border-[0.5px] p-1 rounded-[50%] font-semibold text-2xl border-primary' />
          }
        </div>
        
        <div>
          {
            isOpen &&
            <div className="bg-[#007C92] flex w-[100vw] border-y-[3px] border-tertiary gap-5 text-center justify-center items-center p-5 nav-link text-xl text-primary flex-col font-open  transition duration-300">
              <Link to="/research" className='px-4 hover:text-tertiary duration-300'>
                <section>Research</section>
              </Link>
              <Link to="/about" className='px-4  hover:text-tertiary duration-300 '>
                <section>People</section>
              </Link>
              <Link to="/news" className='px-4  hover:text-tertiary duration-300'>
                <section>News</section>
              </Link>
              <Link to="/publication" className='px-4  hover:text-tertiary duration-300'>
                <section>Publication</section>
              </Link>
              <Link to="/mentorship" className='px-4  hover:text-tertiary duration-300'>
                <section>Teaching and Mentorship</section>
              </Link>

              <Link to="/opportunities" className='px-4  hover:text-tertiary duration-300'>
                <section>Opportunities</section>
              </Link>
            </div>
          }
        </div>
      </div>

    </>
  )
}

export default Navbar