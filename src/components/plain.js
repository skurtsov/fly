import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from 'react-select'
const PlainChoose = (props) => {
    const [plane,setPlane]=useState('');
    const options = [
        { value: 'Cesna', label: 'Cesna' },
        { value: 'Piper', label: 'Piper' },
        { value: 'Tecnam', label: 'Tecnam' }
      ]
        return(
            <div>
                <h2>Choose plane</h2>
                <Select options={options} onChange={(qq)=>setPlane(qq)}/>
             <Link className="nextbtn" to={"/date?plane="+plane.value}>Next step</Link>
            </div>
        );
}
export default PlainChoose