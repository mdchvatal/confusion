import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponenet';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, leadersLoading, postFeedback} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		leaders: state.leaders,
		promotions: state.promotions
	}
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, yourname, review) => dispatch(postComment(dishId, rating, yourname, review)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  postFeedback: (values) => {dispatch(postFeedback(values))},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
})

class MainComponent extends Component{

    constructor(props) {
      	super(props);
    }

    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchPromos();
      this.props.fetchComments();
      this.props.fetchLeaders();
    }
    
    render() {
      const HomePage = () => {
        return(
          <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
          promotion={this.props.promotions.promos.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}/>
        );
      }

      const DishWithId = ({match}) => {
        return (
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            />
        );
      }

      return (
        <div>
          <Header/>
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={200}>
              <Switch location={this.props.location}>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>} />
                <Route path="/menu/:dishId" component={DishWithId}/>
                <Route exact path='/contactus' component={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                <Route path='/aboutus' component={() => <About leaders={this.props.leaders}/>} />
                <Redirect to="/home" />
             </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
        </div>
      );
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));