import { Link } from "react-router-dom"

export default function Thanks(){
    return(
        <>
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-12 col-md-6 m-auto d-block border">
                    <div className="text-center p-5">
                        <i class="fa-regular fa-circle-check fs-1 text-primary" ></i>
                        <h1 className="mt-3">Your order is placed</h1>
                        <h5>Thanks for purchasing </h5>
                        <button type="button" className="btn btn-warning mt-5">
                            <Link to="/" className="text-decoration-none text-white">Buy more products</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}