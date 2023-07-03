const Product = () => {
	return (
        <div className="row g-3 g-lg-4">
            <div className="col-6 col-lg-6 pt-4">
                <div className="product-card-10">
                    <div className="product-card-image">
                        <div className="product-media"><a href="#"><img className="img-fluid" src="https://cdn.tgdd.vn/Files/2022/01/04/1408941/galaxy-s22-ultra-green-3_1280x720-800-resize.jpg" title="" alt="" /></a></div>
                    </div>
                    <div className="product-card-info">
                        <div className="rating-star text"><i className="bi bi-star-fill active"></i> <i className="bi bi-star-fill active"></i> <i className="bi bi-star-fill active"></i> <i className="bi bi-star-fill active"></i> <i className="bi bi-star"></i></div>
                        <h6 className="product-title"><a href="#">S22 ultra</a></h6>
                        <div className="product-price"><span className="text-primary">$28.<small>50</small></span> <del className="fs-sm text-muted">$38.<small>50</small></del></div>
                        <div className="product-action"><a href="#" className="btn"><i className="fa fa-heart"></i> </a><a href="#" className="btn"><i className="fa fa-repeat"></i> </a><a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" className="btn"><i className="fa fa-eye"></i> </a>
                            <a
                                href="#" className="btn"><i className="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-6">
                <div className="product-card-10">
                    <div className="product-card-image pt-4">
                        <div className="product-media"><a href="#"><img className="img-fluid" src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/08/camera-samsung-galaxy-s23-ultra-minh-hoa.jpg.webp" title="" alt="" /></a></div>
                    </div>
                    <div className="product-card-info">
                        <div className="rating-star text"><i className="bi bi-star-fill active"></i> <i className="bi bi-star-fill active"></i> <i className="bi bi-star-fill active"></i> <i className="bi bi-star-fill active"></i> <i className="bi bi-star"></i></div>
                        <h6 className="product-title"><a href="#">S23 ultra</a></h6>
                        <div className="product-price"><span className="text-primary">$28.<small>50</small></span> <del className="fs-sm text-muted">$38.<small>50</small></del></div>
                        <div className="product-action"><a href="#" className="btn"><i className="fa fa-heart"></i> </a><a href="#" className="btn"><i className="fa fa-repeat"></i> </a><a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" className="btn"><i className="fa fa-eye"></i> </a>
                            <a
                                href="#" className="btn"><i className="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		)
}
export default Product;