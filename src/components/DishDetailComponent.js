import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    const selectedDish;

    constructor(props) {
        super(props);

        this.sate = {
            selectDish: null
        }

    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{selectDish.name}</CardTitle>
                        <CardText>{selectDish.description}</CardText>
                    </CardBody>
                </Card>
            )

    renderComments(dish.comments) {
        if (dish != null) {
            return (
                <Card>
                    <CardBody>
                            <CardText>{selectDish.comments}</CardText>
                        </CardBody>
                </Card>
            )
        }
    }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="row">
                    <div className="col-6 col-md-5 m-1">
                        {dishCard}
                    </div>
                    <div className="col-6 col-md-5 m-1">
                        {commentCard}
                    </div>
            </div>
        )
    }
}