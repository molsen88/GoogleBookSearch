import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import BookList from '../BooksList'
import axios from 'axios';
// import config from '../../config/keys'



class Search extends Component {
    state = {
        books: [],
        searchTerm: "",
    }



    handleBooks = event => {
        event.preventDefault();
        let searchTerm = this.state.searchTerm
        // var mykey = config.MY_KEY;
        // only need this.searchterms from state
        axios.get( "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + ""
        )
            .then( response => {
                console.log( response );

                this.setState( {
                    // books: [...data.body.items]
                } )
            } )
    }

    handleSearch = ( event ) => {

        console.log( event.target.value )
        this.setState( { searchTerm: event.target.value } )
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleBooks}>
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
