import Card from "./Card/Card";

const Cards = () => {
    return (
        <div>
            <div className="flex mt-6">
                <Card cardTitle={'Стальной алхимик'} cardTags={''} cardRaiting={'1'}/>
                <Card cardTitle={'Стальной алхимик'} cardTags={''} cardRaiting={'1'}/>
                <Card cardTitle={'Стальной алхимик'} cardTags={''} cardRaiting={'1'}/>
                <Card cardTitle={'Стальной алхимик'} cardTags={''} cardRaiting={'1'}/>
            </div>
        </div>
    )
}

export default Cards;