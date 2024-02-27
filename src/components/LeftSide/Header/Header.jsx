import sortIcon from "../../../icons/sortArrow.svg"

import SortButton from "./SortButton/SortButton";

const Header = () => {
    const sortButton = () => {
        
    }

    return (
        <>
            <div className="flex items-center">
                <p className="text-white text-2xl font-semibold">Каталог релизов</p>
                <div className="ml-auto">
                    <SortButton iconSrc={sortIcon}/>
                </div>
            </div>
        </>
    )
}

export default Header;