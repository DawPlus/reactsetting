import React  , {useReducer} from 'react';
import {Button, Input} from "antd";




const Calculater = (props) => {
    const { number, onIncrease, onDecrease, text, onChange} = props;
 
    return(<>
            <p> {number}</p>
            <Input value={text} onChange={onChange}/>
            <Button onClick={onIncrease} >더하기</Button>
            <Button onClick={onDecrease} >빼기</Button>
    </>);
}

export default Calculater;