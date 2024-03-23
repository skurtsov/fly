import { useEffect, useState } from 'react';
import dayjs from 'dayjs'; // Assuming you've imported dayjs library
import { DateTimePicker } from '@mui/x-date-pickers'; // Assuming you've imported MUI DateTimePicker
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'; // Assuming you've imported MUI renderTimeViewClock
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Select from 'react-select'; // Assuming you've imported React-Select

const BuildingDateComponent = (props) => {
    // State variables
    const [serviceDate, setServiceDate] = useState(dayjs());
    const [myplane, setPlane] = useState('');
    const [startTime, setStartTime] = useState(dayjs());
    const [dur, setDur] = useState(0);
    const [duration, setDuration] = useState(0);

    // Options for duration picker
    const options = [
        { value: 20, label: '20 min' },
        { value: 40, label: '40 min' },
        { value: 60, label: '60 min' }
    ];

    // Handler for saving the selected date, plane, and duration
    const handleSave = () => {
        const queryString = `date=${serviceDate.format('YYYY-MM-DD')}&plane=${myplane}&duration=${duration.value}`;
        // Redirect to the specified URL
        window.location.href = `/duration?${queryString}`;
    };

    return (
        <div>
            {/* Date picker */}
            <h2>Select Date to rent</h2>
            <DateTimePicker views={['day', 'month']} onChange={(nn) => setServiceDate(nn)} />

            {/* Time Picker */}
            <h2>Select Time to rent start</h2>
            <DateTimePicker
                views={['hours', 'minutes']}
                ampm={false}
                onChange={(qq) => setStartTime(qq)}
                viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                }}
            />

            {/* Duration Picker */}
            <h2>Select Duration</h2>
            <Select options={options} onChange={(du) => setDuration(du)} />

            {/* Display selected duration */}
            Duration: {duration && duration.label}

            {/* Save button */}
            <button className="savebutton" onClick={handleSave}>Save</button>
        </div>
    );
};

export default BuildingDateComponent;
