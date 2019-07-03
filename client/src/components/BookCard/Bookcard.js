import React from 'react'
import "./style.css";



function BookCard( props ) {



    return (
        <div className='card-container'>
            <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h2>{props.author}</h2>
            </div>
        </div>
    )
}


export default BookCard
