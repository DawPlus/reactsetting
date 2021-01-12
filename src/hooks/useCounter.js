import {useCallback} from 'react';
import {increase, decrease, change} from "../modules/counter";
import {useDispatch, useSelector} from "react-redux";


export default function useCounter(){
    const {number, text} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    

    const onIncrease = useCallback(()=>dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(()=>dispatch(decrease()), [dispatch]);
    const onChange = useCallback(e=> {
        console.log(e);
               dispatch(change({text : e.target.value}))
            }
                
        , [dispatch]);
    return{
        number, 
        text,
        onChange,
        onIncrease,
        onDecrease
    }
}