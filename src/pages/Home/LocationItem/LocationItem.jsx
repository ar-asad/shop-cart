import { GrLocation } from "react-icons/gr";

const LocationItem = () => {
    return (
        <div className="py-4">
            <div className="inline-block">
                <div className="flex bg-amber-400 rounded-full p-2 items-center font-semibold">
                    <GrLocation></GrLocation>
                    <p className="ms-2">Dhaka-1212</p>
                </div>
            </div>
        </div>
    );
};

export default LocationItem;