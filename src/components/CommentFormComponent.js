import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, FormGroup,  
Label, Input, Form} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {NavLink} from 'react-router-dom';


const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log("Current state is: " + JSON.stringify(values));
        alert("Your entries are: " + JSON.stringify(values));
    }

    render() {
        return(
            <>
                <div className="row">
                    <div className="col-6 col-md-5 m-1">
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-paper-plane">Submit Comment</span>
                        </Button>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Tell us what you think!</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <div className="form-group">
                            <Label htmlFor="rating" className="col-form-label">Rating</Label>
                            <Control.select model=".rating" className="form-control" name="rating" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="yourname" className="col-form-label">Your Name</Label>
                            <Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name" className="form-control" validators={{minLength: minLength(3), maxLength: maxLength(17)}}/>
                            <Errors className="text-danger" model='.yourname'show="touched" messages={{minLength: 'Must be longer than 3 characters.', maxLength: 'Must be less than 17 characters'}}/>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="review" className="col-form-label">Your Thoughts</Label>
                            <Control.textarea model=".review" id="review" name="review" placeholder="Enter Your Feedback" rows="6" className="form-control"/>
                        </div>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default CommentForm;