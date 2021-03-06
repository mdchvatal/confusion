import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap'
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading/>
        );
    } else if (errMess) {
        return(
            <h4>{errMess}</h4>
        )
    }
    else {
        return(
            <FadeTransform in transformProps={{exitTransform: 'scale(.68) translateY(-50%)'}}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    </CardBody>
                    <CardText className='m-3'>{item.description}</CardText>
                </Card>
            </FadeTransform>
        )
    }
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess}/>
                </div>
            </div>
        </div>
    )
}

export default Home;