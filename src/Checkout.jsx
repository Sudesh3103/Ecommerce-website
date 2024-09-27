import { Link } from "react-router-dom"


export default function Checkout(){

    return(
        <>
        <div className="container mt-3">
            <div className="row shop">
                <div className="col-12 col-md-6">
                    <p className="fw-bold pt-2 fs-5">PRODUCT</p>
                    <p>Showing 1–12 of 44 results</p>
                </div>

                <div className="col-12 col-md-6 text-md-end">
                    <p className="fw-bold pt-2 fs-5">HOME / PRODUCT</p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row mt-3">
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="border p-2">
                        <h5>Brand</h5>
                        <ul className="list-unstyled">
                            <li>Clothing</li>
                            <li>Bags</li>
                            <li>Footwear</li>
                            <li>Watches</li>
                            <li>Accessories</li>
                        </ul>
                    </div>

                    <div className="row border mt-4">
                        <div className="d-flex p-3">
                           <i class="fa-solid fa-truck-fast fs-1 text-danger"></i>
                           <div className="ps-2">
                            <span className="fw-bold">Free Shipping</span>
                            <p>Free shipping world wide</p>
                           </div>
                        </div> <hr />

                        <div className="d-flex p-3">
                           <i class="fa-regular fa-clock fs-1 text-danger"></i>
                           <div className="ps-2">
                            <span className="fw-bold">24 X 7 service</span>
                            <p>Online service for 24 x 7</p>
                           </div>
                        </div> <hr />

                        <div className="d-flex p-3">
                           <i class="fa-solid fa-volume-high fs-1 text-danger"></i>
                           <div className="ps-2">
                            <span className="fw-bold">Festival offer</span>
                            <p>New online special festival offer</p>
                           </div>
                        </div> <hr />

                        <div className="d-flex p-3">
                           <i class="fa-solid fa-credit-card fs-1 text-danger"></i>
                           <div className="ps-2">
                            <span className="fw-bold">Online payment</span>
                            <p>New online special festival offer</p>
                           </div>
                        </div>
                    </div>
                    
                </div>

                <div className="col-12 col-md-4 col-lg-4">
                    <div>
                        <img src="images\8.jpg" alt="" className="img-fluid"/>
                    </div>
                </div>

                <div className="col-12 col-md-5 col-lg-5">
                    <div className="border p-2">
                        <h5 className="fw-bold">ZELDA-2</h5>
                        <span className="text-decoration-line-through">$400 </span> <span className="text-danger ps-2">50% off</span>
                        <p className="fs-3 fw-bold">$200</p> <hr />
                        <span className="text-danger">In Stock</span>
                        <h6>Quantity</h6> 

                        <div className="mt-3">
                           <span className="border border-dark p-1">+</span>
                           <input type="text" value={1} className="ms-2 p-1" />
                           <span className="border border-dark ms-2 p-1">-</span>
                        </div>

                        <button className="btn btn-danger ps-5 pe-5 mt-3">
                            <Link to="/buy" className="text-decoration-none text-white">Buy</Link>
                        </button> <hr />

                        <div>
                            <h6>Product Details</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book. It has survived not only five centuries, but also the leap into
                             electronic typesetting, remaining essentially unchanged. It was popularised in
                             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                             and more recently with desktop publishing software like Aldus PageMaker including
                             versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting 
                             industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>

                    </div>

                    
                </div>
            </div>
        </div>
        
        </>
    )
}