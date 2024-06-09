import Card from '../card/Card.js';
import CardActive from '../cardActive/CardActive.js';
import data from '../../Data.json';
import style from './cardscontainer.module.css';
import React, { useState } from 'react';

export default function CardsContainer() {
    const [active, setActive] = useState(false);
    const handleActive = (event) => {
        setActive(!active);
    }

    return (
        <div className={style.wrapper}>
            {data.map((item, index) => {
                return (
                    active
                        ?
                        <button className={style.btn} onClick={handleActive} key={index}>
                            < CardActive
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                speed={item.speed}
                                color={item.color}
                            />
                        </button>
                        :
                        <button className={style.btn} onClick={handleActive} key={index}>
                            < Card
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                speed={item.speed}
                                color={item.color}
                            />
                        </button>

                )
            })}

        </div>


        // <div className={style.wrapper}>
        //     {data.map((item, index) => (
        //         active
        //             ?
        //             <button className={style.btn} onclick={handleActive} >
        //                 < CardActive
        //                     key={index} {...item}
        //                 />
        //             </button>
        //             :
        //             <button className={style.btn} onclick={handleActive}>
        //                 < Card
        //                     key={index} {...item}
        //                 />
        //             </button>

        //     ))

        //     }

        // </div>
    )
}