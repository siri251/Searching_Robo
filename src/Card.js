import React from 'react';


const Card = (props) => {
    return(
        <div className="bg-light-green dib br3 grow pa3 ma2 tc">
            <img src={`https://robohash.org/${props.id}?200*200`} alt="photo"></img>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>

           
        </div>
    )
}


export default Card;