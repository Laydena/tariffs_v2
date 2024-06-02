import style from '../cardActive/cardactive.module.css'

export default function CardActive(props) {

    return (
        <div className={style.active}>
            <div style={{ backgroundColor: `${props.color}` }}>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
            <p>{props.speed}</p>
            <p>{props.description}</p>
        </div >
    )
}
