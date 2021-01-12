import React , {useState} from 'react';
import DatePicker from "./components/datepicker";

const DatePick = () => {

    const [date , setDate] = useState();
    const onChangeDatePicker = value => {
      console.log(value, "<-- in App");
      setDate(value);
    }
  
    return (
        <>
          <DatePicker value={date}  onChange={onChangeDatePicker}/>
          <p>선택날짜 : {date}</p>
       
      </>
    );

}
export default DatePick;