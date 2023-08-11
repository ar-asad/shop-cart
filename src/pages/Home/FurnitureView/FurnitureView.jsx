import furniture from '../../../assets/images/furniture.jpg';

const FurnitureView = () => {
    return (
        <div className='mb-16 relative'>
            <div className=' w-100%  '>
                <img className='rounded-xl h-full w-full ' src={furniture} alt="alexa-light" />
            </div>
            <div style={{ color: "#A29781" }} className='absolute top-52 left-1/2 z-index-2'>
                <p>Special offer on</p>
                <h3 className="italic font-semibold text-lg">Furniture</h3>
                <h2 className='text-2xl font-semibold'>Check it out...</h2>
            </div>
        </div>
    );
};

export default FurnitureView;