export default function Footer(){
    return(
        <>
           <div className="footer mt-5">
            <div className="container-fluid">
              <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 p-4">
                        <div className="text-center mt-1">
                            <img src="images\footerlogo.png" alt="" className="img-fluid"/>
                        </div>
                        <p className="text-white mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>

                    <div className="col-12 col-md-4 p-4">
                        <div className="text-center">
                            <h3 className="text-white fw-bold">NEWSLETTER</h3>
                        </div>
                        <input type="email" placeholder="Enter your Email" className="form-control mt-4 mb-4" />
                        <button className="btn btn-danger m-auto d-block">SUBSCRIBE</button>
                    </div>

                    <div className="col-12 col-md-4 p-4 text-white">
                        <div className="text-center">
                            <h4>STORE INFORMATION</h4>
                        </div>
                        <p className="text-center">
                        Multikart Demo Store, <br />
                        Demo store India 345-659 <br />
                        Call Us: 123-456-7898 <br />
                        </p>
                        <p className="mt-3 text-center">
                        Email Us: <br />
                        Support@Fiot.com <br />
                        Fax: 123456
                        </p>
                        
                    </div> <hr className="text-white" />
                </div>

                <div className="row">
                    <div className="text-white">
                        <h5 className="text-center">MY ACCOUNT</h5>
                        <ul className="d-md-flex justify-content-center align-items-center list-unstyled">
                            <li className="text-white ps-4">Mens</li>
                            <li className="text-white ps-4">Womens</li>
                            <li className="text-white ps-4">Clothing</li>
                            <li className="text-white ps-4">Accessories</li>
                            <li className="text-white ps-4">Fetaured</li>
                        </ul>
                    </div> <hr className="text-white" />
                </div> 

                <div className="row">
                    <div className="text-white">
                        <h5 className="text-center">WHY WE CHOOSE</h5>
                        <ul className="d-md-flex justify-content-center align-items-center list-unstyled">
                            <li className="text-white ps-4">Shipping & return</li>
                            <li className="text-white ps-4">Secure shopping</li>
                            <li className="text-white ps-4">Gallary</li>
                            <li className="text-white ps-4">Affiliates</li>
                            <li className="text-white ps-4">Contacts</li>
                        </ul>
                    </div> 
                </div> 
              </div>
            </div>
         </div>
 
        
        
        </>
    )
}