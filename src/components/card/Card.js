import style from '../card/card.module.css'

export default function Card(props) {

    return (
        <div className={style.wrapper}>
            <div style={{ backgroundColor: `${props.color}` }}>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
            <p>{props.speed}</p>
            <p>{props.description}</p>
        </div >
    )
}
