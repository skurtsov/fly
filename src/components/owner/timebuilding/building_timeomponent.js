import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import axios from 'axios';

const BuildingTimeeComponent = (props) => {
  const [startTime, setStartTime] = useState(dayjs());
  const [prevEndTime, setPrevEndTime] = useState(dayjs());
  const urlSearchString = window.location.search;
  const params = new URLSearchParams(urlSearchString);
  const [myplane, setPlane] = useState(params.get('plane'));
  const [price, setPrice] = useState(params.get('price'));
  const [token, setToken] = useState(params.get('token'));
  const [serviceDate, setServiceDate] = useState(params.get('date'));
  const [dur, setDur] = useState(parseInt(params.get('duration')));

  let timemulti = () => {
    // Сложение времени и целого числа
    const newEndTime = startTime.add(dur, 'minute');
    setPrevEndTime(newEndTime);
  }

  let sendinfo = async () => {
    // Сложение времени и целого числа
    const newEndTime = startTime.add(dur, 'minute');
    setPrevEndTime(newEndTime);
    // Вывод результата
    try {
      const formattedPrevEndTime = newEndTime.format('HH:mm');
      console.log("http://localhost/test/registerfly.php?service=discovery+fly&starttime="+startTime.format('HH:mm')+"&endtime="+formattedPrevEndTime+"&flydate="+ serviceDate+"&duration=20&plain="+myplane+"&schoolId=1&clientName=Simon&email=mymail&tel=612222062");
      await axios.get("http://localhost/test/registerfly.php?service=discovery+fly&starttime="+startTime.format('HH:mm')+"&endtime="+formattedPrevEndTime+"&flydate="+ serviceDate+"&duration=20&plain="+myplane+"&schoolId=1&clientName=Simon&email=mymail&tel=612222062");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let checkReserve = async () => {
    // Сложение времени и целого числа
    const newEndTime = startTime.add(dur, 'minute');
    setPrevEndTime(newEndTime);
    console.log('http://localhost/fly/check.php?id=1&starttime='+startTime.format('HH:mm')+'&endtime='+newEndTime.format('HH:mm')+'&flydate=' + serviceDate);
    let myres = fetch('http://localhost/fly/check.php?id=1&starttime='+startTime.format('HH:mm')+'&endtime='+newEndTime.format('HH:mm')+'&flydate=' + serviceDate, { cache: "no-store" })
      .then(function(response) { 
        return response.text();
      })
      .then(function(data) {
        console.log(data);
        if(data === 'True'){
          sendinfo();
          alert('Done . You have your reservation')
        } else {
          alert('Reserved');
        }
      })
      .catch(function(error) {
        console.error('Ошибка:', error);
      });

    console.log(myres.data);
  }

  return (
    <div>
      duration {myplane+" "+serviceDate+" "+typeof(dur)+dur+price}
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
    </div>
  );
};

export default BuildingTimeeComponent;
