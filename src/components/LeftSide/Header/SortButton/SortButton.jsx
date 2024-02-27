const SortButton = ({ iconSrc }) => {
    return (
        <button className="sortButton mr-6">
            <img src={iconSrc} className="mr-[7px]" />
            <span className="font-semibold rounded-md">Сортировка</span>
        </button>
    )
}

export default SortButton;