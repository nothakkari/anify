import titleIcon from "../../../icons/inputsDown.svg"

const Range = ({ title }) => {
    return (
        <div className="w-full">
            <div className="flex items-center mb-4">
                <p className="text-white font-semibold text-[20px]">{title}</p>
                <img src={titleIcon} className="ml-1 select-none cursor-pointer" />
            </div>
            <input type="range" name="" id="catalog-range" className="w-full"/>
            <div className="flex text-white text-sm">
                <span>1980</span>
                <span className="ml-auto">2024</span>
            </div>
        </div>
    )
}

export default Range;