import titleIcon from "../../../icons/inputsDown.svg";
import closeIcon from "../../../icons/close.svg";

const Tags = ({ title, inputTitle, tags }) => {

    const tagsArr = ['Экшен', 'Приключения', 'Боевик', 'Иссекай']

    return (
        <div className="mb-6">
            <div className="flex items-center">
                <p className="text-white font-semibold text-[20px]">{title}</p>
                <img src={titleIcon} className="ml-1 select-none cursor-pointer" />
            </div>
            <div>

                {/* Input */}
                <div className="w-full py-2 my-4 bg-medium-gray-2 flex rounded-lg relative cursor-pointer">
                    <span className="px-3 text-light-gray select-none">{inputTitle}</span>
                    <img src={titleIcon} className="ml-auto select-none pr-2" />
                </div>

                {/* Tags */}
                <div className="flex items-center flex-wrap">
                    <div className="rounded-[5px] bg-medium-gray flex items-center py-1 px-3 mr-2 mb-2">
                        <span className="text-light-gray text-sm font-medium select-none">{tagsArr[0]}</span>
                        <img src={closeIcon} className="ml-2 mt-[1px] cursor-pointer"/>
                    </div>
                    <div className="rounded-[5px] bg-medium-gray flex items-center py-1 px-3 mr-2 mb-2">
                        <span className="text-light-gray text-sm font-medium select-none">{tagsArr[1]}</span>
                        <img src={closeIcon} className="ml-2 mt-[1px] cursor-pointer"/>
                    </div>
                    <div className="rounded-[5px] bg-medium-gray flex items-center py-1 px-3 mr-2 mb-2">
                        <span className="text-light-gray text-sm font-medium select-none">{tagsArr[2]}</span>
                        <img src={closeIcon} className="ml-2 mt-[1px] cursor-pointer"/>
                    </div>
                    <div className="rounded-[5px] bg-medium-gray flex items-center py-1 px-3 mb-2">
                        <span className="text-light-gray text-sm font-medium select-none">{tagsArr[3]}</span>
                        <img src={closeIcon} className="ml-2 mt-[1px] cursor-pointer"/>
                    </div>
                </div>
            </div> 
        </div>      
    )
}

export default Tags;