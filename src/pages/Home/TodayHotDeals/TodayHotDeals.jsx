import { useGetHotDealsQuery } from "../../../features/api/products/productsApi";
import ProductCard from "../../shared/ProductCard";


const TodayHotDeals = () => {
    const { data, isLoading } = useGetHotDealsQuery("products?product_type=Today’s hot deals");

    if (isLoading) {
        return <h2 className="text-center font-semibold text-red-400 w-1/2 mx-auto">Loading...</h2>
    }
    return (
        <div className="mb-16">
            <h3 className="font-semibold text-2xl border-b-2 border-orange-300 pb-2 border-dashed">Todays hot deals</h3>
            <div className="grid lg:grid-cols-5 lg:gap-14  pt-10">
                {
                    data?.products[0].productData.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default TodayHotDeals;