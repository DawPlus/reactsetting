import React from "react";
import {DatePicker} from "antd"
import moment from "moment";
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';

const DatePickerComponent = (props) => {
    const { placeholder ="날짜를 선택해주세요 ", value = new Date(), onChange}= props;

    const onChangeHandler = (mo , value)=> {
        onChange(value);
    }


    return (<>
       <DatePicker 
            placeholder={placeholder}  
            value={moment(value)}
            onChange={onChangeHandler}
            locale={locale}
            />
    </>);
}
export default DatePickerComponent;