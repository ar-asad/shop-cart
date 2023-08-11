import { useGetHotDealsQuery } from "../../../features/api/products/productsApi";
import SearchProductCard from "./SearchProductCard";


const SearchProducts = () => {
    const { data, isLoading } = useGetHotDealsQuery("Your searched items");

    if (isLoading) {
        return <h2 className="text-center font-semibold text-red-400 w-1/2 mx-auto">Loading...</h2>
    }

    return (
        <div className="mb-16">
            <h3 className="font-semibold text-2xl border-b-2 border-orange-300 pb-2 border-dashed">Your searched items</h3>
            <div className="grid lg:grid-cols-6 lg:gap-12  pt-10">
                {
                    data?.products[0].productData.map(product => <SearchProductCard key={product._id} product={product}></SearchProductCard>)
                }
            </div>
        </div>

    );
};

export default SearchProducts;