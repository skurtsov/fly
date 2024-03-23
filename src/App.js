import logo from './logo.svg';
import './App.css';
import Service from './components/service';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeSet from './components/timeset';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import PlainChoose from './components/plain';
import DateChoose from './components/date';
import TimeChoose from './components/time';
import DurationChoose from './components/duration';
import Auth from './components/auth';
import Dashboard from './components/dashboard';
import { useState } from 'react';
import TimeBuilding from './components/timebuilding';
import SignUp from './components/register';
import Reservation from './components/reservation';
import GetUserInfo from './components/owner/getuserinfo';
import PlaneOwner from './components/owner/planesowner';
import BuildingStart from './components/owner/timebuilding/building_start';

function App() {
  const [token , setToken]= useState('default')

  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Service token={token} />}/>
        <Route path="/plane" element={<PlainChoose id={"mymy"}/>} />
        <Route path="/date" element={<DateChoose id={"mymy"}/>} />
        <Route path="/duration" element={<DurationChoose id={"mymy"}/>} />
        <Route path="/time" element={<TimeChoose id={"mymy"}/>} />
        <Route path="/auth" element={<Auth setToken={setToken} id={"mymy"}/>} />
        <Route path="/dashboard" element={<Dashboard token={token} id={"mymy"}/>} />
        <Route path="/timebuilding" element={<TimeBuilding token={token} id={"mymy"}/>} />
        <Route path="/signup" element={<SignUp token={token} id={"mymy"}/>} />
        <Route path="/reservation" element={<Reservation token={token} id={"mymy"}/>} />
        <Route path="/userdetails" element={<GetUserInfo token={token} id={"mymy"}/>} />
        <Route path="/planeowner" element={<PlaneOwner token={token} id={"mymy"}/>} />
        <Route path="/buildingstart" element={<BuildingStart token={token} id={"mymy"}/>} />





      </Routes>
    </BrowserRouter>
  </LocalizationProvider>
  );
}

export default App;
