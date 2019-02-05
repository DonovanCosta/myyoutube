import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


// search input component
class Search extends React.Component{

    constructor(props) {
        super(props);
        this.state = {searchString: ''}; //variable that stores the user search term.
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // handles updating the state, as the user types in their search term.
    handleChange (event) {
        // updates the state of the component
        this.setState({searchString: event.target.value });
    }

    onSubmit (event){
        event.preventDefault(); // prevent the default behavior of the form
        // retuns the search string 
        this.props.onSubmit(this.state.searchString);
    };

    // render function
    render(){
        return(
            <div>
                <Form inline onSubmit={ this.onSubmit }>
                    <FormGroup className="col-md-10">
                        <Label size="lg" for="search youtube" className="col-md-2">Search</Label>
                        <Input  
                            bsSize="lg" 
                            type="text" 
                            name="search" 
                            placeholder="Search here ..." 
                            className="col-md-10"
                            value = {this.state.searchString}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button color="primary">Search</Button>
                </Form>
           </div>
        )
    }
};

export default Search;