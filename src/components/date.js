import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DateChoose = (props) => {
    const urlSearchString = window.location.search;
    const [serviceDate, setServiceDate] = useState(dayjs());
    const params = new URLSearchParams(urlSearchString);
    const [myplane,setPlane]=useState(params.get('plane'));
    return(
        <div>
            Date {myplane}
            <h2>Select Date to rent </h2>
         <DateTimePicker views={['day', 'month']} onChange={(nn) => setServiceDate(nn)} /> 
            <Link className="nextbtn" to={'/duration?date='+serviceDate.format('YYYY-MM-DD')+"&plane="+myplane}>Next Step</Link>
        </div>
    );
}
export default DateChoose