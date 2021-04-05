import React, { useEffect, useState } from 'react';
import './Calibrate.css';
import conImage from './images/containerImage.png';
import wrong from './images/wrong.jpg';
import right from './images/right.jpg';
import firebase from './util/firebase.js';
import "firebase/database";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import RTChart from 'react-rt-chart';

export default function Calibrate() {
    const [data, setData] = useState(false);
    const [calibrate, setCalibrate] = useState(false);
    const [shock, setShock] = useState(true);
    const [buzzer, setBuzzer] = useState(false);
    const [numberOfBend, setNumberOfBend] = useState(0);
    const [time, setTime] = useState(0);
    const [IPTime, setIPTime] = useState(0);
    // const [graphData, setGraphData] = useState({
    //     time: new Date().toLocaleTimeString(),
    //     sensorData: data
    // });

    useEffect(() => {
        const interval = setInterval(() => {
            const sensorRef = firebase.database().ref("Sensor");
            sensorRef.update({
                calibrate: calibrate,
                shock: shock,
                buzzer: buzzer
            });
            sensorRef.on('value', (snapshot) => {
                if (!data && snapshot.val().bend){
                    setNumberOfBend(numberOfBend + 1);
                    setData(snapshot.val().bend);
                } else if (data !== snapshot.val().bend) {
                    setData(snapshot.val().bend);
                } else {
                    setData(data);
                }
                // setGraphData({
                //     time: new Date().toLocaleTimeString(),
                //     sensorData: snapshot.val().data
                // })
            })
            if (calibrate) {
                if (data) {
                    setTime(0);
                    setIPTime(IPTime + 1);
                } else {
                    setTime(time + 1);
                    setIPTime(0);
                }
            } else {
                setTime(0);
                setIPTime(0);
            }
        }, 1000);
        return () => clearInterval(interval);
    });

    function handleCalibrate() {
        setCalibrate(!calibrate);
    }

    function handleShockChange() {
        setShock(!shock);
    }

    function handleBuzzerChange() {
        setBuzzer(!buzzer);
    }

    return (
        <div className="Calibrate">
            <div className="options">
                <img src={conImage} style={{width: "40rem"}} />
                <form className="calibrate-form">
                    {calibrate ? 
                        <button type="button" className="btn btn-lg btn-danger calibrate-button" onClick={handleCalibrate}>Off</button>
                        : <button type="button" className="btn btn-lg btn-success calibrate-button" onClick={handleCalibrate}>Calibrate</button>}
                    <label className="form-check-label" for="shockChecked" style={{marginRight: "3rem"}}>Shock</label>
                    <BootstrapSwitchButton id="shockChecked" checked={shock} onstyle="info" onChange={handleShockChange} />
                    <label className="form-check-label" for="buzzerChecked" style={{marginRight: "3rem", marginTop: "2rem"}}>Buzzer</label>
                    <BootstrapSwitchButton id="buzzerChecked" checked={buzzer} onstyle="info" onChange={handleBuzzerChange} />
                </form>
                <img src={calibrate ? (data ? wrong : right) : "https://www.halberesford.com/content/images/2018/07/null.png"} style={{height: "20rem", width: "12rem", marginTop: "7rem"}} />
            </div>
            <div className="result">
                <h3 style={{padding: "2rem 3rem 2rem 3rem"}}>Incorrect posture <br />count</h3>
                <h1 style={{color: "#ff5b69", fontSize: "6rem"}}>{numberOfBend}</h1>
                <h3 style={{padding: "2rem 3rem 2rem 10rem"}}>Correct posture <br/>duration (sec)</h3>
                <h1 style={{color: "#00e273", fontSize: "6rem"}}>{time}</h1>
                <h3 style={{padding: "2rem 3rem 2rem 10rem"}}>Incorrect posture <br/>duration (sec)</h3>
                <h1 style={{color: "#ff5b69", fontSize: "6rem"}}>{IPTime}</h1>
            </div>
            {/* <RTChart
                fields={['sensorData']}
                data={graphData}
            /> */}
        </div>
    )
}