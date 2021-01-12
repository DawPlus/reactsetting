import React from 'react';
import Counter from "../components/counter";
import useCounter from "../hooks/useCounter";

const CounterContainer = () => {
    const { number, text, onChange ,  onIncrease, onDecrease} = useCounter(); 

    return(<>
    
        <Counter number ={number} onIncrease={onIncrease}  onDecrease={onDecrease} text={text} onChange={onChange}/>
    
    
        
    </>);


}

// const mapStateToProps = state => ({
//     counterNum : state.counter.number
// })

// const mapDispatchToProps = dispatch =>({
//     increase : () => dispatch(increase()),
//     decrease : () => dispatch(decrease()),

// })


export default React.memo(CounterContainer);