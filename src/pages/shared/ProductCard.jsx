

const ProductCard = (product) => {
    const { product_img, product_name, product_price, product_discount } = product.product;

    return (
        <div>
            <img src={product_img} alt="product-img" />
            <p className="font-medium mb-2">{product_name}</p>
            <div className="flex justify-between">
                <p>${product_price}</p>
                <p className="text-red-500">-{product_discount}% off</p>
            </div>
        </div>
    );
};

export default ProductCard;