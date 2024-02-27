import Buttons from "./Buttons/Buttons";
import Tags from "./Tags/Tags";
import Range from "./Range/Range";
import CheckboxesInputs from "./CheckboxesInputs/CheckboxesInputs";

const RightSide = () => {
    return (
        <div className="w-[286px] mx-auto mt-[80px] bg-dark-gray ml-[99px] rounded-[10px] border border-medium-gray">
            <div className="px-4">
                <Buttons text={'Обновить'}/>
                <Tags title={'Жанр'} inputTitle={'Выбери жанр'}/>
                <Tags title={'Озвучка'} inputTitle={'Выбери озвучку'}/>
                <Tags title={'Студия'} inputTitle={'Выбери cтудию'}/>
                <Range title={'Год'}/>
                <CheckboxesInputs title={'Статус'}/>
            </div>
        </div>
    )
};

export default RightSide;