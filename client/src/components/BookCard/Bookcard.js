import React from 'react'
import "./style.css";
import { Button } from 'reactstrap';



function BookCard( props ) {



    return (
        <div className='card-container'>
            <img src={props.image} alt="" />
            <div>
                <div className="desc">
                    <h6 className="title">{props.title}</h6>
                    <h6 className="author">{props.author}</h6>
                    <Button className="save-button">Save</Button>
                </div>
            </div>

        </div>


    )
}


export default BookCard
