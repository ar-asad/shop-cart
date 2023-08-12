


const ReviewProducts = () => {
    return (
        <div className="mb-16">
            <h3 className="font-semibold text-2xl border-b-2 border-orange-300 pb-2 border-dashed">Review your purchase</h3>
            <div className='grid grid-cols-2 gap-6 pt-10'>
                <div className='flex justify-center items-center gap-16 border border-gray-400 rounded-2xl'>
                    <img className='w-full' src="https://drive.google.com/uc?export=view&id=1zZsHy9XnchVafJeOg18LFuKfgi4_5bzY" alt="ipad" />
                    <div>
                        <p className='font-bold'>2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)</p>
                        <span className='text-xs'>you bought it at the best price</span>
                        <p className='font-bold'>$99,900.00</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-16 border border-gray-400 rounded-2xl'>
                    <img className='w-full' src="https://drive.google.com/uc?export=view&id=1zZsHy9XnchVafJeOg18LFuKfgi4_5bzY" alt="iphone" />
                    <div>
                        <p className='font-bold'>iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)</p>
                        <span className='text-xs'>you bought it at the best price</span>
                        <p className='font-bold'>$1,39,900.00</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewProducts;