

const SearchProductCard = (product) => {
    console.log(product);
    return (
        <div>
            <img src={product?.product?.product_img} alt="" />
        </div>
    );
};

export default SearchProductCard;