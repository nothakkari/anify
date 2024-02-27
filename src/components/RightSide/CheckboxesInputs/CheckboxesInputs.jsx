import "./CheckboxesInputs.css";
import titleIcon from "../../../icons/inputsDown.svg"

const CheckboxesInputs = ({ title }) => {
    return (
        <>
        <div className="flex items-center mb-4 mt-6">
            <p className="text-white font-semibold text-[20px]">{title}</p>
            <img src={titleIcon} className="ml-1 select-none cursor-pointer" />
        </div>
        <div>
            <input type="checkbox" name="" id="status" />
            <span className="text-light-gray font-semibold ml-2">Анонс</span>
        </div>
        </>
    )
}

export default CheckboxesInputs;