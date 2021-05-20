import * as ActionTypes from  './ActionTypes';

export const Comments = (state = {
    errMess = null,
    feedback = []
}, action) => {

    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {...state, errMess: null, feedback: state.feedback.concat(feedback)};
        
        case ActionTypes.FEEDBACK_FAILED:
            return {...state, errMess: action.payload, feedback: []};

        default:
            return state;
    }
}