import furniture from '../../../assets/images/furniture.jpg';

const FurnitureView = () => {
    const style = {
        fontFamily: 'Cookie, cursive'
        // font-family: 'Cookie', cursive;
        // font-family: 'Poppins', sans-serif;
    };

    return (
        <div className='mb-16 relative'>
            <div className=' w-100%  '>
                <img className='rounded-xl h-full w-full ' src={furniture} alt="alexa-light" />
            </div>
            <div style={{ color: "#A29781" }} className='absolute top-52 left-1/4 z-index-2'>
                <p className='text-end'>Special offer on</p>
                <h3 style={style} className="italic font-semibold text-8xl">Furniture</h3>
                <h2 className='text-lg font-semibold text-center'>Check it out...</h2>
            </div>
        </div>
    );
};

export default FurnitureView;