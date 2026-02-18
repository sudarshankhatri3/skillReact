import "../../styles/layout/header.css"
export default function Header() {
  return (
    <>
      <Hamburger/>
      <header className="main-header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/project" className="nav-link">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}


export function Hamburger(){
   return(
     <>
       <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
       </div>
     </>
   )
}