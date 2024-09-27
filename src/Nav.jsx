import { Link } from "react-router-dom"

export default function Nav(){
    return(
          <div className="container">
            <div className="row justify-content-between align-items-center p-1">

            <div className="col-1">
                  <button type="button" className="btn text-dark fs-3" data-bs-toggle="offcanvas" data-bs-target="#demo1">
                    <i class="fa-solid fa-bars"></i>
                  </button>

                  <div className="offcanvas offcanvas-start" id="demo1">
                    <div className="offcanvas-header">
                      <button className="btn btn-close " data-bs-dismiss="offcanvas"></button>
                    </div>

                    <div className="offcanvas-body">
                      
                       <ul className="list-unstyled  mt-3">
                         <a href="" className="text-decoration-none"><li>CLOTHING</li></a>
                         <a href="" className="text-decoration-none"><li>BAGS</li></a>
                         <a href="" className="text-decoration-none"><li>FOOTWEAR</li></a>
                         <a href="" className="text-decoration-none"><li>WATCHES</li></a>
                         <a href="" className="text-decoration-none"><li>ACCESSORIES</li></a>
                         <a href="" className="text-decoration-none"><li>BEAUTY & PERSONAL PRODUCT</li></a>
                         <a href="" className="text-decoration-none"><li>HOME & DECOR</li></a>
                         <a href="" className="text-decoration-none"><li>KITCHEN</li></a>
                       </ul>
                    </div>
                  </div>
                </div>

              <div className="col-4">
                <div className="logo">
                  <img src="images/logo.png" alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-4 justify-content-center d-none d-lg-block">
                <ul className="d-flex justify-content-evenly align-items-center list-unstyled pt-3">
                  <li>
                    <Link to="/" className="text-decoration-none text-dark fs-5">HOME</Link>
                  </li>
                  <li>
                    <Link to="/shop" className="text-decoration-none text-dark fs-5">SHOP</Link>
                  </li>
                </ul>
              </div>

              <div className="col-3 d-none d-md-block">
                <div className="justify-content-evenly">
                  <a href="" className="text-dark"><i class="fa-solid fa-magnifying-glass fs-4"></i></a>
                  <a href="" className="text-dark"><i class="fa-solid fa-gear ps-4 fs-4"></i></a>
                  <a href="" className="text-dark"><i class="fa-solid fa-cart-plus ps-4 fs-4"></i></a>
                </div>
              </div>

              <div className="d-md-none col-3">
                  <button type="button" className="btn text-warning fs-2" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    <i class="fa-solid fa-bars"></i>
                  </button>

                  <div className="offcanvas offcanvas-end" id="demo">
                    <div className="offcanvas-header">
                      <button className="btn btn-close m-2 " data-bs-dismiss="offcanvas"></button>
                    </div>

                    <div className="offcanvas-body">
                      
                       <ul className="list-unstyled  mt-3">
                         <a href="" className="text-decoration-none"><li>HOME</li></a>
                         <a href="" className="text-decoration-none"><li>SHOP</li></a>
                       </ul>
                    </div>
                  </div>
                </div>

                
              
            </div>
          </div>
        
    )
}