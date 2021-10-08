import { COUNTING , MINUS} from './../constants';

const initialState = 0;

const countReducer = (state = initialState, action) => {
    switch (action.type){
        case COUNTING :
        //console.log(action);
        return state + action.payload
        case MINUS :  return state - action.payload
        default : return state
    }
}

export default countReducer;