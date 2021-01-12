import { createAction, handleActions } from 'redux-actions';

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const TEXTCHANGE = "counter/TEXTCHANGE"

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const change = createAction(TEXTCHANGE, input => input);

const initialState = {
    number : 0,
    text : "Hello World"
}




// Simple

/*
function counterReducer(state = initialState, action ){
    switch(action.type){

        case INCREASE :
            return {
                ...state,
                number : state.number + 1

            }
        case DECREASE :
            return {
                ...state,
                number : state.number - 1
            }
        default : return state;
    }
}

*/

const counterReducer = handleActions(
    {
      [INCREASE]: (state, action) => ({
      
        number: state.number + 1
      }),
      [DECREASE]: (state, action) => ({
        number: state.number - 1
      }),
      [TEXTCHANGE] : (state, {payload : {text}}) =>{
        console.log(text)
            return  {
                ...state, 
                text  : text
            }
        }
    },
    initialState
  );

  
  
export default counterReducer;