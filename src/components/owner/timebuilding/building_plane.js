import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from 'react-select'
const BuildingPlainChoose = (props) => {
    const [plane,setPlane]=useState('');
    const params = new URLSearchParams(window.location.search);
    const [schoold_id,setSchool_id]=useState('')
    const [token,setToken]=useState('');
    const [myplains, setMyPlains] = useState([]);
    const options=[];
    useEffect(() => {
        const fetchData = async () => {
            // Directly get 'id' from params each time this effect runs
            const schoolId = params.get('id');
            if (!schoolId) return; // Exit if no 'id' is found
    
            try {
                // Use schoolId directly in your fetch call
                const response = await fetch(`http://localhost/test/planes_models.php?id=${schoolId}`);
                const responseData = await response.json();
    
                setMyPlains(responseData);
                // Now, set the state of school_id here if needed elsewhere in the component
                setSchool_id(schoolId);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    
        // Dependency on external changes (e.g., URL search params) should be reflected here
    }, [window.location.search]); 
    useEffect(( ) => {

        const urlSearchString = window.location.search;
       
        const params = new URLSearchParams(urlSearchString);
       
        setSchool_id(params.get('id'));

        setToken(window.localStorage.getItem('token'));
        console.log('my token is '+token)

         }, []);
         for (let i = 0; i < myplains.length; i++) {
            options.push({ value: myplains[i], label: myplains[i] });
          }
        return(
            <div>
                <h2>Choose plane: {myplains[0]}</h2>
                <Select options={options} onChange={(qq)=>setPlane(qq)}/>
             <Link className="nextbtn" to={"/buildingdate?plane="+plane.value+"&id="+schoold_id+"&token="+token}>Next step</Link>
            </div>
        );
}
export default BuildingPlainChoose