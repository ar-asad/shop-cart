
import { useState } from "react";
import { useGetHotDealsQuery } from "../../features/api/products/productsApi";
import ProductCard from "../shared/ProductCard";
import { CiSearch } from "react-icons/ci";


const Products = () => {
    const [productName, setProductName] = useState("products");
    const { data = [], isLoading } = useGetHotDealsQuery(productName);

    // console.log(productName)
    if (isLoading) {
        return <h2 className="text-center font-semibold text-red-400 w-1/2 mx-auto">Loading...</h2>
    }

    let datas;
    datas = data?.products[0].productData || data?.products[0].Result;

    const handleSearchProduct = (event) => {
        event.preventDefault();
        const newProduct = event.target.product?.value;
        console.log(newProduct);
        if (newProduct) {
            setProductName(`products/search?search=${newProduct}`);

        }
        else {
            setProductName("products");

        }
    };


    const style = {
        marginLeft: '-40px'
    };



    return (
        <div className="mb-20 mt-12">
            <form onSubmit={handleSearchProduct}>
                <div className="text-center">
                    <h3 className=" text-gray-700 text-lg font-semibold border-b-2 border-orange-300 border-dashed mb-2 inline-block pb-1 ">Serach by Product name or product_type</h3>
                </div>
                <div className="pb-16 flex justify-center items-center ">
                    <input name="product" className="p-2 rounded-2xl border pr-48" type="text" placeholder="Search Products" />
                    <button type="submit" style={style} className=" p-3 rounded-2xl">
                        <CiSearch></CiSearch>
                    </button>
                </div>
            </form>
            <div className="grid lg:grid-cols-4 lg:gap-20">
                {
                    datas?.map(product => <ProductCard allproduct={"remain"} key={product._id} product={product}></ProductCard>)
                    // data?.products[0].productData.map(product => <ProductCard allproduct={"remain"} key={product._id} product={product}></ProductCard>) 
                }
            </div>
        </div >
    );
};

export default Products;