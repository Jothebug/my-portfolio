const NavBar = () => {
  return (
    <nav
      id="nav-wrap"
      className="font-sans font-bold uppercase text-base tracking-[2.5px] pt-6"
    >
      <ul id="nav" className="flex items-center justify-center gap-7">
        <li className="current">
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
