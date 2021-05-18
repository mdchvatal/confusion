import React, { Component } from 'react';
import {Modal, Button, ModalHeader, ModalBody, Label} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';


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
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
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
                            <Label htmlFor="author" className="col-form-label">Your Name</Label>
                            <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" validators={{minLength: minLength(3), maxLength: maxLength(17)}}/>
                            <Errors className="text-danger" model='.author'show="touched" messages={{minLength: 'Must be longer than 3 characters.', maxLength: 'Must be less than 17 characters'}}/>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="comment" className="col-form-label">Your Thoughts</Label>
                            <Control.textarea model=".comment" id="comment" name="comment" placeholder="Enter Your Feedback" rows="6" className="form-control"/>
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