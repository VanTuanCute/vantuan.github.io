import { NavLink } from "react-router-dom";
function Header() {
    return(
  
<>
<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"> <use link href="#bootstrap"></use></svg>
        <span className="fs-4">Picture</span>
        
      </a>
      <div class="px-3 py-2 border-bottom mb-3">
    <div class="container d-flex flex-wrap justify-content-center">
      <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>
  </div>
      <ul className="nav nav-pills">
  
        <li className="nav-item">
          <NavLink to="/" className="nav-link ">Trang chu</NavLink>
          
        </li>
        <li className="nav-item">
          <>
          <NavLink to="/vechungtoi" className="nav-link">Về Chúng Tôi</NavLink>
          </>
        </li>
        <li className="nav-item">
          <>
          <NavLink to="/sanpham" className="nav-link">Sản Phẩm</NavLink>
          </>
        </li>
        <li className="nav-item">
          <>
          <NavLink to="/tintuc" className="nav-link">Tin Tức</NavLink>
          </>
        </li>
        <li className="nav-item">
          <>
          <NavLink to="/lienhe" className="nav-link">Liên Hệ</NavLink>
          </>
        </li>
      </ul>
    </header>
  </div>
  </>
    );
}
export default Header;