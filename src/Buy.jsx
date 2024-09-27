import { Link } from "react-router-dom"


export default function Buy(){

   
    return(
        <>
         
         <div className="container mt-4">
            <h2>Buy Now</h2>
            <div className="row">
                <div className="col-12 col-md-8">
                    <form action="/action_page.php" method="post" className="form-group">
                        <div className="row mt-3">
                            <input type="text" placeholder="First Name" className="form-control" name="fname" required/>
                        </div>
                        <div className="row mt-3">
                            <input type="text" placeholder="Last Name"  className="form-control" required/>
                        </div>
                        <div className="row mt-3">
                            <input type="email" placeholder="Enter your email" className="form-control p-2" required/>
                        </div>
                        <div className="row mt-3">
                           <select name="" id="" className="form-control">
                            <option value="">City </option>
                            <option value="">Kolhapur</option>
                            <option value="">Pune</option>
                            <option value="">Mumbai</option>
                           </select>
                        </div>
                        <div className="row mt-3">
                            <input type="text" placeholder="Address" className="form-control" required/>
                        </div>
                        <div className="row mt-3">
                            <input type="text" placeholder="Zip Code" className="form-control"  required/>
                        </div>
                        <div className="row mt-3">
                            <input type="tel" placeholder="Enter your Mobile number" className="form-control" required/>
                        </div>
                        <div className="row mt-3">
                            <textarea cols={3} rows={5} placeholder="Leave a comment about your order" className="form-control"></textarea>
                        </div>

                        <div className="mt-5 mb-3">
                            <button type="submit" value="Submit" className="btn btn-warning m-auto d-block">
                                <Link to="/thanks" className="text-decoration-none text-white">Place your Order</Link>
                            </button>
                        </div>

                    </form>

                    <div className="mt-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="ms-2">Create an Account</label> <br />
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="ms-2">Ship to a different Address</label>
                    </div>
                </div>

                <div className="col-12 col-md-4 ">
                    <div className="ps-md-3 buy-div p-4">
                        <h5>Cart Total</h5>
                        <div className="d-flex justify-content-between mt-4">
                            <p>SubTotal:</p>
                            <p>$200.00</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <p>Delivery:</p>
                            <p>Free</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <p>Total:</p>
                            <p>$200.00</p>
                        </div>
                        <div className="mt-3">
                           <input type="checkbox" name="" id="" />
                           <label htmlFor="" className="ms-2">Cash on Delivery</label> <br />
                           <input type="checkbox" name="" id="" className="mb-4" />
                           <label htmlFor="" className="ms-2">Paypal</label>
                           <img src="images\paypal.png.webp" alt="" className="ms-3 "/>
                        </div>

                        
                    </div>
                </div>
            </div>
         </div>
        
        
        </>
    )
}