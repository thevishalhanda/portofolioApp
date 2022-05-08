import "../css/navbar.css";

const NavBar = () => {
  return (
    <>
      <div>
        <header className="header">
          <a href="" className="logo">
            PRASHANT HANDA
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#work">home</a>
            </li>
            <li>
              <a href="#about">Resume </a>
            </li>
            <li>
              <a href="#careers">work</a>
            </li>
            <li>
              <a href="#contact">service</a>
            </li>
          </ul>
        </header>
      </div>
      <br/>
      <br/>

    </>
  );
};

export default NavBar;