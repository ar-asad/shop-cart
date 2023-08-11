import AlexaLightView from "../AlexaLightView/AlexaLightView";
import Banner from "../Banner/Banner";
import FurnitureView from "../FurnitureView/FurnitureView";
import LocationItem from "../LocationItem/LocationItem";
import SearchProducts from "../SearchProducts/SearchProducts";
import TodayHotDeals from "../TodayHotDeals/TodayHotDeals";



const Home = () => {
    return (
        <div>
            <LocationItem></LocationItem>
            <Banner></Banner>
            <AlexaLightView></AlexaLightView>
            <TodayHotDeals></TodayHotDeals>
            <SearchProducts></SearchProducts>
            <FurnitureView></FurnitureView>
        </div>
    );
};

export default Home;