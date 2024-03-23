import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Select from 'react-select'
const PlaneOwner = (props) => {
    const [plane,setPlane]=useState('');
    const params = new URLSearchParams(window.location.search);
    const [status,setStatus]=useState('')
    const [schoold_id,setSchool_id]=useState('')
    const [token,setToken]=useState('');
    const [myplains, setMyPlains] = useState([]);
    const options=[];
    const fetchData = async () => {
        // Directly get 'id' from params each time this effect runs
        const schoolId = params.get('id');
        if (!schoolId) return; // Exit if no 'id' is found

        try {
            // Use schoolId directly in your fetch call
            const response = await fetch(`http://localhost/test/owner/planes_models_owner.php?id=1`);
            const responseData = await response.json();

            setMyPlains(responseData);
            // Now, set the state of school_id here if needed elsewhere in the component
            setSchool_id(schoolId);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
   
    
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
         ///
         useEffect(() => {
            if (plane && plane.label) {
                let lastCharIndex = plane.label.length - 1;
                console.log('status:' + plane.label[lastCharIndex]);
                let st = plane.label[lastCharIndex];
                setStatus(st);
            }
            fetchData();
        }, [plane]);
        
         ////
         for (let i = 0; i < myplains.length; i++) {
            options.push({ value: myplains[i], label: myplains[i] });
          }

          let disable_plane=async ()=>{
            try {
                let lastCharIndex = plane.label.length - 1;
                // Use schoolId directly in your fetch call
                const response = await fetch(`http://localhost/test/owner/planeservice.php?id=${schoold_id}&p_model=${plane.label.substring(0, lastCharIndex)}&procedure=0`);
                alert('Plane '+plane.label+' on service now')
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
          }
          let enable_plane=async ()=>{
            try {
                let lastCharIndex = plane.label.length - 1;
                // Use schoolId directly in your fetch call
                const response = await fetch(`http://localhost/test/owner/planeservice.php?id=${schoold_id}&p_model=${plane.label.substring(0, lastCharIndex)}&procedure=1`);
                alert('Plane '+plane.label+' on service now')
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
          }
          return (
            <div>
                <h2>Choose plane: {myplains[0]}</h2>
                <Select options={options} onChange={(qq) => setPlane(qq)} />
                

                {status === '0' ? (
    <div className='add_plane' onClick={() => enable_plane()}>
        Return plane
    </div>
) : (
    <div className='delete_plane' onClick={() => disable_plane()}>
        To service
    </div>
)}

                {/* {plane && (
                    <div className={plane.label && plane.label.endsWith('0') ? 'add_plane' : 'delete_plane'} onClick={disablePlane}>
                        {plane.label && plane.label.endsWith('0') ? 'Return plane' : 'Plane not available'}
                    </div>
                )} */}
                {/* <Link className="nextbtn" to={"/date?plane="+plane.value+"&id="+schoold_id+"&token="+token}>Next step</Link> */}
            </div>
        );
        
}
export default PlaneOwner