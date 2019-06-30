import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

export default class BookList extends React.Component {

    handleChange = () => {
        var author = this.props.res.data.author;
        this.props.onBookList( author );
    }
    render() {
        // console.log( this.props );
        return (
            <Container>
                <h3>Results: </h3>
                <ListGroup>
                    <ListGroupItem onChange={this.handleChange}></ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </Container>
        );
    }
}
