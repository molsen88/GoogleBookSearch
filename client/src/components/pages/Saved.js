import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
// import axios from 'axios';



class Saved extends Component {

    // state = {
    //     books: []
    // }
    // componentWillMount() {
    //     axios.get( '/api/books' )
    //         .then( res => {
    //             console.log( res.data );

    //             this.setState( {
    //                 books: res.data
    //             } )
    //         } )
    // }

    render() {
        return (
            <Container>
                <div>
                    {this.state.books.map( book => {
                        return (
                            <ListGroup key={book._id}>
                                <ListGroupItem>{book.authors}<br />{book.title}</ListGroupItem>
                            </ListGroup>
                        )
                    } )}
                </div>
            </Container>
        )
    }
}

export default Saved