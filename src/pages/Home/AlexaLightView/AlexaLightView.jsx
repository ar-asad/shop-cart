
import alexa from '../../../assets/images/alexa-light.jpg';

const AlexaLightView = () => {
    return (
        <div className='mb-16 relative'>
            <div className='h-96 w-100%  '>
                <img className='rounded-xl h-full w-full ' src={alexa} alt="alexa-light" />
            </div>
            <div className='absolute top-20 left-2/3 z-index-2'>
                <h3 className="italic font-semibold text-lg">Alexa, switch on the lights.</h3>
                <h2 className='text-2xl font-semibold'>echodot</h2>
            </div>
        </div>
    );
};

export default AlexaLightView;