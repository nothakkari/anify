import Header from "./Header/Header"
import Cards from "./Cards/Cards";

const LeftSide = () => {
    return (
        <div className="w-[1296px] mx-auto mt-[80px]">
            <Header /> 
            <Cards />
        </div>
    )
};

export default LeftSide;