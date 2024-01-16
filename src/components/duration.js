import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from 'react-select'



const DurationChoose = (props) => {
    const urlSearchString = window.location.search;
    const [serviceDate, setServiceDate] = useState(dayjs());
    const params = new URLSearchParams(urlSearchString);
    const [myplane,setPlane]=useState(params.get('plane'));
    const [mydate,setDate]=useState(params.get('date'));
    const [dur,setDur]=useState(params.get('date'));
    const pricetwenty = 65;
    const [price,setPrice] = useState();

    const options = [
        { value: 20, label: '20 min' },
        { value: 40, label: '40 min' },
        { value: 60, label: '60 min' }
      ]
    return(
        <div>
           duration {myplane+" "+mydate}
           <Select options={options} onChange={
            (nn)=>{setDur(nn.value)
           setPrice((parseInt(nn.value)/20)*pricetwenty)}}/>
           <Link className="nextbtn" to={'/time?date='+serviceDate.format('YYYY-MM-DD')+"&plane="+myplane+"&duration="+dur+"&price="+price}>Next Step</Link>
           {price?<h2>Price {price} €</h2>:null }
        </div>
    );
}
export default DurationChoose