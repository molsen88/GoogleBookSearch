import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import BookList from '../BooksList'
import axios from 'axios';


class Search extends Component {
    state = {
        books: [],
        searchTerm: "",
    }


    handleBooks = () => {
        // only need this.searchterms from state
        axios.get( 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCIVE37lHWdjWbtslfkQWYRvXu46N6CEws' )
            .query( { q: this.searchTerm } )
            .then( res => {
                console.log( res );

                this.setState( {
                    books: res.data
                } )
            } )
    }

    handleSearch = ( event ) => {
        //only need this.searchterms from state
        // axios.get( '/api/books' )
        //     .then( res => {
        //         console.log( res.data[0].authors );

        //         this.setState( {
        //             books: res.data
        //         } )
        //     } )
        console.log( event.target.value )
        this.setState( { searchTerm: event.target.value } )
    }

    render() {
        return (
            <Container>
                <Form>
                    <FormGroup row>
                        <Label for="searchBar" sm={2}>Title of Book</Label>
                        <Col sm={10}>
                            <Input onChange={this.handleSearch} type="text" name="search" id="searchBar" placeholder="Enter book name!" />
                        </Col>
                    </FormGroup>
                    <Button
                        type="submit"
                        color="dark"
                        stye={{ marginBottom: '2rem' }}
                        onSubmit={() => {
                            this.handleSearch()
                            // this.handleBooks();
                        }}
                    >
                        Search
                </Button>
                </Form>
                <br />
                <div>
                    <BookList onBookList={this.handleSearch} />
                </div>
            </Container>
        )
    }
}

export default Search
