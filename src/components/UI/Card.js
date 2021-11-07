import './Card.css'

const Card = (props) => {
    // in order to add all styling from different sources, the className from outside the Card is converted into a card format first
    const classes = 'card ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card