import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import axios from 'axios';

const TimeSet = (props) => {
  const [serviceDate, setServiceDate] = useState(dayjs());
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(dayjs());

let timemulti=()=>{
  const minutesToAdd = 20;
  
  // Сложение времени и целого числа
  const resultTime = startTime.add(minutesToAdd, 'minute');
  console.log(resultTime)
  setEndTime(startTime.add(minutesToAdd, 'minute'));
}
//
  let sendinfo = async () => {
    // Целое число минут для добавления
  const minutesToAdd = 20;
  
  // Сложение времени и целого числа
  const resultTime = startTime.add(minutesToAdd, 'minute');
  console.log(resultTime)
  setEndTime(startTime.add(minutesToAdd, 'minute'));
  // Вывод результата
  console.log('endtime:'+endTime.format('HH:mm'));
    try {
      console.log("http://localhost/fly/index.php?service=discovery+fly&starttime="+startTime.format('HH:mm')+"&endtime="+endTime.format('HH:mm')+"&flydate="+ serviceDate.format('YYYY-MM-DD')+"&duration=20&plain=cesna&schoolId=1&clientName=Simon&email=mymail&tel=612222062")
       await axios.get("http://localhost/fly/index.php?service=discovery+fly&starttime="+startTime.format('HH:mm')+"&endtime="+endTime.format('HH:mm')+"&flydate="+ serviceDate.format('YYYY-MM-DD')+"&duration=20&plain=cesna&schoolId=1&clientName=Simon&email=mymail&tel=612222062");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
let checkReserve=async()=>{

  const minutesToAdd = 20;
  
  // Сложение времени и целого числа
  const resultTime = startTime.add(minutesToAdd, 'minute');
  setEndTime(startTime.add(minutesToAdd, 'minute'));
  console.log('http://localhost/fly/check.php?id=1&starttime='+startTime.format('HH:mm')+'&endtime='+endTime.format('HH:mm')+'&flydate=' + serviceDate.format('YYYY-MM-DD'))
  let myres = fetch('http://localhost/fly/check.php?id=1&starttime='+startTime.format('HH:mm')+'&endtime='+endTime.format('HH:mm')+'&flydate=' + serviceDate.format('YYYY-MM-DD'), { cache: "no-store" })
  .then(function(response) { 
    return response.text(); // возвращаем Promise для дальнейшего разрешения
  })
  .then(function(data) {
    console.log(data); // выводим значение
    if(data=='True'){
     sendinfo();
    }
    else{
      alert('Reserved')
    }
  })
  .catch(function(error) {
    console.error('Ошибка:', error);
  });

  
  console.log(myres.data)

}


  return (
    <div>
      <h2>Select Date to rent </h2>
      <DateTimePicker views={['day', 'month']} onChange={(nn) => setServiceDate(nn)} />

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

      <h2>Start date</h2>
      {serviceDate.format('YYYY-MM-DD')} {/* Format the date as needed */}

      <h2>Start</h2>
      {startTime.format('HH:mm')} {/* Format the date as needed */}
      
      <h2>End</h2>
      {endTime.format('HH:mm')} {/* Format the date as needed */}
   

      <div className="button" onClick={checkReserve}>
        Reservate
      </div>
 
    </div>
  );
};

export default TimeSet;
