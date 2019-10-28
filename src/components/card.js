import React from "react"

const Card = props => (
    <div className="column is-one-fifths" onClick={() => props.onclicking(props.id)}>
        <img src={props.image} alt={props.name} width="500px" height="500px"/>
    </div>
)

export default Card