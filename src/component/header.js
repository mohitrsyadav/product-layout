import React from "react";
import logo from "../img/logo.png";
class Header extends React.Component {
    render() {
        return (
            <>
                <div className='container-fluid m-0 p-0 bg-dark'>
                    <div className="top-header ">
                        <div className="container">
                            <div className="row border-bottom-danger">
                                <div class="d-flex justify-content-between">
                                    <ul class="list-inline text-size text-white mb-0">
                                        <li class="list-inline-item "><i class="fa fa-phone text-danger" aria-hidden="true"></i> +021-95-51-84</li>
                                        <li class="list-inline-item ml-2"> <i class="fa fa-envelope text-danger" aria-hidden="true"></i> email@email.com</li>
                                        <li class="list-inline-item ml-2"> <i class="fa fa-map-marker text-danger" aria-hidden="true"></i> 1834 Stonecoal Road</li>
                                    </ul>
                                    <div>
                                        <div>
                                            <ul class="list-inline text-white text-size mb-0">
                                                <li class="list-inline-item mr-3"> <i class="fa fa-usd text-danger" aria-hidden="true"></i> USD</li>
                                                <li class="list-inline-item "><i class="fa fa-user text-danger" aria-hidden="true"></i> My Account</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container-fluid bg-dark'>
                            <div className="container">
                                <div className="row">
                                    <div class="d-flex justify-content-between">
                                        <div><img src={logo} /></div>
                                        <div className="search-section  row mt-3">
                                            <div className="col-3 p-0">
                                                <div class="form-group ">
                                                    <select className="py-2">
                                                        <option selected>All Category</option>
                                                        <option value="1">Cate1</option>
                                                        <option value="2">Cate2</option>
                                                        <option value="3">Cate3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6 p-0">
                                                <div class="form-group ml-3">
                                                    <input type="email" className="py-2 " id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div className="col-3 p-0">
                                                <button>SEARCH</button>
                                            </div>
                                        </div>

                                        <div>
                                            <ul class="list-inline text-size mt-2 text-white mb-0">
                                                <li class="list-inline-item "> <i class="fa fa-heart" aria-hidden="true"></i> <span class="badge badge-pill badge-danger">1</span><p className="mr-3">Your Wishlist</p></li>
                                                <li class="list-inline-item "> <span className="mt-3"><i class="fa fa-shopping-cart" aria-hidden="true"></i> </span><span class="badge badge-pill badge-danger">1</span><p className="text-center">Your Cart</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
