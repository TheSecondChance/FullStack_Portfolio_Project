import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import NavbarCss from "./Navbar.module.css";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav
      className={`${NavbarCss.navbar} ${navActive ? NavbarCss["active"] : ""}`}
    >
      <div className={NavbarCss.logo}>
        <img src="./new-logo.png" alt="Eyasu-logo" />
      </div>
      <a
        className={`${NavbarCss.nav__hamburger} ${
          navActive ? NavbarCss["active"] : ""
        }`}
        onClick={toggleNav}
      >
        <span className={NavbarCss.nav__hamburger__line}></span>
        <span className={NavbarCss.nav__hamburger__line}></span>
        <span className={NavbarCss.nav__hamburger__line}></span>
      </a>
      <div
        className={`${NavbarCss["navbar--items"]} ${
          navActive ? NavbarCss["active"] : ""
        }`}
      >
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={NavbarCss["navbar--active-content"]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className={NavbarCss["navbar--content"]}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={NavbarCss["navbar--active-content"]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyProjects"
              className={NavbarCss["navbar--content"]}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={NavbarCss["navbar--active-content"]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MySkills"
              className={NavbarCss["navbar--content"]}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={NavbarCss["navbar--active-content"]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyBlogs"
              className={NavbarCss["navbar--content"]}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>

      <div></div>
    </nav>
  );
}

export default Navbar;
