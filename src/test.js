import React, { useState } from "react";
import { Button, ConfigProvider} from 'antd';
import DatePicker  from "./components/datepicker";
import moment from "moment";
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';


const Test = (props) => {

    const{dateFormat = "YYYY-MM-DD", value = new Date(), onChange} = props;
    const [date , setDate ] = useState(moment(value, dateFormat));
    const onChangeHandler =( mo, value )=> {      
        console.log(mo, value , "<-- in test.js")
      setDate(mo);
      onChange(value);
    }

    return(<>
    
        <Button type="primary">PRESS ME</Button>
   
            <DatePicker 
                placeholder="선택"  
                value={date}
                onChange={onChangeHandler}
                locale={locale} 
            />
            Selected Date: {moment(date).format(dateFormat)}

   
    </>);



}
export default Test;