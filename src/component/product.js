import React from "react";
import ProductCard from "./product-card";
import product1 from "../img/product01.png";
import product2 from "../img/product02.png";
import product3 from "../img/product03.png";
import product4 from "../img/product04.png";
import product5 from "../img/product05.png";
import product6 from "../img/product06.png";
import product7 from "../img/product07.png";
import product8 from "../img/product08.png";
class Product extends React.Component {
    render() {
        return (
            <>
                <div className='container-fluid '>
                    <div className="container middle-sec">
                        <div className="row mt-5 mb-2 border-bottom-danger">
                            <div class="d-flex justify-content-between">
                                <h4>NEW PROJECT</h4>
                                <div>
                                    <div>
                                        <ul class="list-inline text-size-navs mb-0">
                                            <li class="list-inline-item text-danger mr-3 "><u className="pt-2">Laptops</u></li>
                                            <li class="list-inline-item ">Smartphone</li>
                                            <li class="list-inline-item mr-3"> Cameras</li>
                                            <li class="list-inline-item "> Accessories</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="row">
                                        <div className="col-3"><ProductCard img={product1} /></div>
                                        <div className="col-3"><ProductCard img={product2} /></div>
                                        <div className="col-3"><ProductCard img={product3} /></div>
                                        <div className="col-3"><ProductCard img={product4} /></div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="row">
                                        <div className="col-3"><ProductCard img={product5} /></div>
                                        <div className="col-3"><ProductCard img={product6} /></div>
                                        <div className="col-3"><ProductCard img={product7} /></div>
                                        <div className="col-3"><ProductCard img={product8} /></div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Product;
