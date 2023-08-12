import { useGetHotDealsQuery } from "../../../features/api/products/productsApi";
import ProductCard from "../../shared/ProductCard";


const Banner = () => {
    const { data, isLoading } = useGetHotDealsQuery("products?product_type=hot deals for you");
    // console.log(data?.products[0].productData)

    if (isLoading) {
        return <h2 className="text-center font-semibold text-red-400 w-1/2 mx-auto">Loading...</h2>
    }

    return (
        <div className='grid grid-cols-12 mb-16'>
            <div className="col-span-5 flex items-center">
                <h1 className="text-8xl font-light">We picked some <span className="font-bold text-orange-400">cool things</span> for you!</h1>
            </div>
            <div className="col-span-7">
                <h3 className="font-semibold text-2xl border-b-2 border-orange-300 pb-2 border-dashed">hot deals for you</h3>
                <div className="grid lg:grid-cols-3 lg:gap-16 pt-8">
                    {
                        data?.products[0].productData.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;