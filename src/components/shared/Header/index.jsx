import { NavLink, Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          
          <div className="col-md-3">
            <Link to="/" className="d-inline-flex align-items-center text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4 fw-bold">Ruang Baca</span>
            </Link>
          </div>

          <ul className="nav">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/books" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Book
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/team" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>

        </header>
    )
}