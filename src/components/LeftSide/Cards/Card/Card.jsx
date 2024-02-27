import "./Card.css";

import cardCover1 from "../../../../images/cover.png";

const Card = ({ coverSrc, cardTitle, cardRaiting }) => {
    const cardTags = ['64 эпизода', '2024', 'ТВ Сериал'];
    const cardCovers = [
        coverSrc = cardCover1
    ];

    return (
        <div className="w-[306px] h-[418px] bg-dark-gray rounded-[10px] border border-medium-gray relative mr-6 mb-6">
            <div className="absolute cardsRaiting bg-top100 select-none">
                <span>{cardRaiting}</span>
            </div>
            <div className="p-4 pb-0">
                <img src={cardCovers} />
            </div>
            <div className="p-4">
                <p className="font-semibold text-xl text-white">{cardTitle}</p>
                <div className="mt-2">
                    <span className="font-semibold text-light-gray mr-2 cycle cursor-pointer">{cardTags[0]}</span>
                    <span className="font-semibold text-light-gray mx-2 cycle cursor-pointer">{cardTags[1]}</span>
                    <span className="font-semibold text-light-gray ml-[8px] cycle cursor-pointer">{cardTags[2]}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;