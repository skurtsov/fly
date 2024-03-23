import React from 'react';

let DeleteReservation = (props) => {
    let deletereserv = async () => {
        if(window.confirm("Are you sure?")){
            try {
                const response = await fetch(`http://localhost/test/owner/deletereservation.php?tok=${props.tok}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
       
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };
    
    return (
        <div>
            <div className="delete" onClick={() => deletereserv()}>Delete reservation</div>
        </div>
    );
}

export default DeleteReservation;
