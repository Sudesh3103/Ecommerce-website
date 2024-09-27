import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
       
     <section className="p-0 img-top">

      <div id="example" className="carousel carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active ">
                <img src="images/41.jpg" alt="" className="img-fluid" />
            </div>

            <div className="carousel-item ">
                <img src="images/42.jpg" alt="" className="img-fluid" />
            </div>

            
        </div>

        <button type="button" className="carousel-control-prev" data-bs-target="#example" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>

        <button type="button" className="carousel-control-next" data-bs-target="#example" data-bs-slide="next">
           <span className="carousel-control-next-icon"></span>
        </button>
      </div>
     </section>

         <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-12 col-md-6 mt-2">
                    <div className="position-relative">
                        <img src="images/1.jpg" alt="" className="img-fluid" />
                        <div className="position-absolute offer-div">
                            <h4 className="text-warning fw-bold">FOR WINDOWS</h4>
                            <h2 className="fw-bold text-white">Save 10%</h2>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2">
                    <div className="position-relative">
                        <img src="images/2.jpg" alt="" className="img-fluid" />
                        <div className="position-absolute offer-div2">
                            <h4 className="text-danger fw-bold">FOR PSP</h4>
                            <h2 className="fw-bold text-white">Save 10%</h2>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <span className="text-danger">Special Offer</span>
                    <h3 className="mt-2">TOP COLLECTION</h3>
                    <div className="w-75 d-block m-auto">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className="d-flex justify-content-between list-unstyled w-50 d-block m-auto">
                        <a href="" className="text-decoration-none d-none d-md-block"><li className="text-danger">New Products</li></a>
                        <a href="" className="text-decoration-none"><li>Featured Products</li></a>
                        <a href="" className="text-decoration-none"><li>Best Sellers</li></a>
                    </div>
                </div>

                <div className="row mt-3">
                    
                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/1 (1).jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/2 (1).jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Prey</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/3.jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Call Of Duty MW3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/4.jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Halo</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/5.jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Halo-4</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/6.jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Zelda</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    
                    <div>
                        <button className="btn btn-danger d-block m-auto ">
                          <Link to="/shop" className="text-decoration-none text-white">View More Products ...</Link>
                        </button>
                    </div>
                </div>
            </div>
         </div>

         <div className="container mt-5 mb-4 d-none d-lg-block">
            <div className="row position-relative">
                <div>
                    <img src="images\banner-game.jpg" alt="" className="img-fluid" />
                </div>

                <div className="position-absolute mt-5 ">
                    <h4 className="text-white ps-5">Save <span className="text-danger">30% </span>off Digital Watch</h4>
                </div>
            </div>
         </div>

         <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-12 col-md-6 col-lg-3">
                    <div>
                        <h5 className="d-inline-block">NEW PRODUCTS</h5>
                        <span className="ps-4"><i class="fa-solid fa-chevron-left"></i>
                              <i class="fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                    <div className="mt-4">
                        <figure className="figure d-flex">
                            <img src="images\1 (1).jpg" alt="" className="product" />

                            <figcaption className="figcaption text-center m-auto ps-2">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="mt-4">
                        <figure className="figure d-flex">
                            <img src="images\2 (1).jpg" alt="" className="product" />

                            <figcaption className="figcaption text-center m-auto ps-2">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Prey</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="d-flex justify-content-between">
                        <h5>FEATURE PRODUCT</h5>
                        <span><i class="fa-solid fa-chevron-left"></i>
                              <i class="fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                    <div className="mt-4">
                        <figure className="figure d-flex">
                            <img src="images\8.jpg" alt=""  className="product" />

                            <figcaption className="figcaption text-center m-auto ps-2">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="mt-4">
                        <figure className="figure d-flex">
                            <img src="images\10.jpg" alt="" className="product" />

                            <figcaption className="figcaption text-center m-auto ps-2">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="d-flex justify-content-between">
                        <h5>BEST SELLER</h5>
                        <span><i class="fa-solid fa-chevron-left"></i>
                              <i class="fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                    <div className="mt-4">
                        <figure className="figure d-flex">
                            <img src="images\1 (1).jpg" alt=""  className="product" />

                            <figcaption className="figcaption text-center m-auto ps-2">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="mt-4">
                        <figure className="figure d-flex">
                            <img src="images\2 (1).jpg" alt="" className="product" />

                            <figcaption className="figcaption text-center m-auto ps-2">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="d-flex justify-content-between">
                        <h5 >ON SELL</h5>
                        <span><i class="fa-solid fa-chevron-left"></i>
                              <i class="fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                    <div className="mt-4">
                        <figure className="figure d-flex">
                            <img src="images\1 (1).jpg" alt=""  className="product" />

                            <figcaption className="figcaption text-center m-auto ps-2">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="mt-4">
                        <figure className="figure d-flex">
                            <img src="images\2 (1).jpg" alt="" className="product" />

                            <figcaption className="figcaption text-center m-auto ps-2">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
         </div>

         <div className="container-fluid">
            <div className="row position-relative">
                <div className="xbox p-0">
                   
                </div>

                <div className="position-absolute mt-5 p-0 text-center xbox-game">
                    <p className="display-1 text-danger fw-bold">2023</p>
                    <p className="display-2 text-white fw-bold">XBOX GAMES</p>
                    <h4 className="text-white fw-bold">SPECIAL OFFER</h4>
                </div>
            </div>
         </div>



         <div className="container">
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <span className="text-danger">Special Offer</span>
                    <h3 className="mt-2">TOP COLLECTION</h3>
                    <div className="w-75 d-block m-auto">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                   
                </div>

                <div className="row mt-3">
                    
                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/1 (1).jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/2 (1).jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/3.jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/4.jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/5.jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2">
                        <div>
                            <figure className="figure">
                                <img src="images/6.jpg" alt="" className="img-fluid" />
                                <figcaption className="figcaption text-center p-3">
                                    <div >
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-solid fa-star text-warning"></i>
                                      <i class="fa-regular fa-star"></i>
                                    </div>
                                    <span>Battlefield-3</span>
                                    <p><b>$200.00</b><span className="text-decoration-line-through text-dark ps-2">$400.00</span></p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                   
                </div>
            </div>
         </div>

         <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-2 text-center">
                    <div>
                        <img src="images\1.png" alt="" />
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 text-center">
                    <div>
                        <img src="images\2.png" alt="" />
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 text-center">
                    <div>
                        <img src="images\3.png" alt="" />
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 text-center">
                    <div>
                        <img src="images\4.png" alt="" />
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 text-center">
                    <div>
                        <img src="images\5.png" alt="" />
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 text-center">
                    <div>
                        <img src="images\2.png" alt="" />
                    </div>
                </div>
                
            </div>
         </div>

         
        </>
    )
}