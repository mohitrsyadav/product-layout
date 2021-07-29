import React from "react";
class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <>
                <div className='container-fluid '>
                    <div className="card_section">
                        <div class="card p-0 m-0">
                            <div className="w-100 text-right card-btn mx-2 p-2">
                                <button type="button ml-2"> -30 </button>
                                <button type="button ml-2"> new  </button>
                            </div>
                            <img src={this.props.img} alt="Card image cap" />
                            <div class="card-body w-100">
                                <p class="card-text text-center p-0 m-0">CATEGORY</p>
                                <h5 class="card-title text-center  p-0 m-0">PRODUCT NAME GOES HERE</h5>
                                <p class="card-text text-danger text-center p-0 m-0">$998 <span className="text-muted">$990</span> </p>
                                <p className="text-center"><i class="fa fa-star text-danger" aria-hidden="true"></i><i class="fa fa-star text-danger" aria-hidden="true"></i><i class="fa fa-star text-danger" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <button className="ml-5 text-white">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductCard;
