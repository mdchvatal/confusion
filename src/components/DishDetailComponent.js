import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';


    function RenderComments({comments, postComment, dishId}) {
        if (comments != null) {
            return (
                <div>
                    <div><h4>Reviews</h4></div>
                    <ul className="list-unstyled">
                        {comments.map((item) => (
                            <div>
                            <li key={item.id}>{item.comment}</li>
                            <p></p>
                            <p key={item.id+'a'}>--{item.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</p>
                            </div>
                        ))}
                    </ul> 
                    <CommentForm dishId={dishId} postComment={postComment}/>
                </div>
            );
        } else {
            return null;
        }
    }

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
        return null;
        }
    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if (props.errMess) { 
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return (
                <div class="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    <div className="row">
                            <div className="col-6 col-md-5 m-1">
                                <RenderDish dish={props.dish} />
                            </div>
                            <div className="col-6 col-md-5 m-1">    
                                <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id}/>
                            </div>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }

    

export default DishDetail;