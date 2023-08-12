import { GrLocation } from "react-icons/gr";

const LocationItem = () => {

    const productList = [
        {
            id: "1",
            name: "Fresh"
        },
        {
            id: "2",
            name: "Today'sDeals"
        },
        {
            id: "3",
            name: "Mobiles"
        },
        {
            id: "4",
            name: "Gift Cards"
        },
        {
            id: "5",
            name: "Women Clothing"
        },
        {
            id: "6",
            name: "Men Clothing"
        },
        {
            id: "7",
            name: "Kids Clothing"
        },
        {
            id: "8",
            name: "Health"
        },
        {
            id: "9",
            name: "Pet Corner"
        },
        {
            id: "10",
            name: "Books"
        },
        {
            id: "11",
            name: "Beauty"
        },
        {
            id: "12",
            name: "Kitchen"
        },
        {
            id: "13",
            name: "Bed Room"
        },
        {
            id: "14",
            name: "Sport"
        },
        {
            id: "15",
            name: "Bags"
        },
    ]

    return (
        <div className="pt-4 mb-16">
            <div className="inline-block mb-4">
                <div className="flex bg-amber-400 rounded-full p-2 items-center font-semibold">
                    <GrLocation></GrLocation>
                    <p className="ms-2">Dhaka-1212</p>
                </div>
            </div>
            <ul className="flex gap-5 overflow-auto">
                {
                    productList.map(({ name, id }) =>
                        <li className="list-none text-gray-600" key={id}>{name}</li>
                    )
                }
                {/* <li>name</li> */}
            </ul>
        </div>
    );
};

export default LocationItem;