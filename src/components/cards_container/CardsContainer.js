import Card from '../card/Card.js';
import CardActive from '../cardActive/CardActive.js';
import data from '../../Data.json';
import style from './cardscontainer.module.css'

export default function CardsContainer() {
    return (
        <div className={style.wrapper}>
            {data.map((item, index) => (
                item.boolean
                    ?
                    < CardActive
                        name={item.name}
                        price={item.price}
                        speed={item.speed}
                        description={item.description}
                        color={item.color}
                        key={index}
                    />
                    :
                    < Card
                        name={item.name}
                        price={item.price}
                        speed={item.speed}
                        description={item.description}
                        color={item.color}
                        key={index}
                    />

            ))

            }

        </div>
    )
}