import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';
import {Loading} from './LoadingComponent';





function About(props) {

    const imgStyle = {
        maxHeight: 128,
        maxWidth: 128
      }

    const RenderLeader = () => props.leaders.leaders.map((leader) => {
        if (props.leaders.isLoading) {
			return(
			<div className="container">
				<div className="row">
					<Loading/>
				</div>
			</div>
			);
		}
		else if (props.leaders.errMess) { 
			return(
				<div className="container">
					<div className="row">
						<h4>{props.leader.errMess}</h4>
					</div>
				</div>
			);
		} else {
            return (
            <div key={leader.id} className="col-12 mt-5">
                <Media tag="li">
                <Media left middle>
                    <Media object src={baseUrl + leader.image} alt={leader.name} style={imgStyle} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <h5>{leader.designation}</h5>
                    <p>{leader.description}</p>
                </Media>
                </Media>
            </div>
            );
        }
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2021, ConFusion quickly established itself as a beacon of confusion. With its unique brand of fusion that can be found also in other confusing places, it enjoys patronage from A-list programmers -- beginner and expert alike.  Befuddling the finest minds in the world, you never know what will happen when you try to program your way through ConFusion.</p>
                    <p>ConFUsion traces its humble beginnings to <em>Facebook</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time some truly ConFusing Reactions.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        <RenderLeader/>
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    