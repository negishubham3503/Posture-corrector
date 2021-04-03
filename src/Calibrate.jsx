import React, { useEffect, useState } from 'react';
import './Calibrate.css';
import conImage from './images/con.png';
import firebase from './util/firebase.js';
import "firebase/database";

export default function Calibrate() {
    const [data, setData] = useState();
    const [calibrate, setCalibrate] = useState(false);
    const [shock, setShock] = useState(true);

    useEffect(() => {
        const sensorRef = firebase.database().ref("Sensor");
        sensorRef.on('value', (snapshot) => {
            setData(snapshot.val().data);
        })
    }, [data]);

    function handleCalibrate() {
        setCalibrate(!calibrate);
    }

    function handleShockChange() {
        setShock(!shock);
    }

    return (
        <div className="Calibrate">
            <div className="options">
                <img src={conImage} style={{width: "40rem"}} />
                <form className="calibrate-form">
                    {calibrate ? <button type="button" className="btn btn-lg btn-info calibrate-button" onClick={handleCalibrate}>Calibrate</button> : <button type="button" className="btn btn-lg btn-danger calibrate-button" onClick={handleCalibrate}>Turn off</button>}
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="shockChecked" checked onChange={handleShockChange} />
                        <label className="form-check-label" for="shockChecked">Shock</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="buzzerChecked" checked />
                        <label className="form-check-label" for="buzzerChecked">Buzzer</label>
                    </div>
                </form>
            </div>
            <div className="result">
                <h3 style={{padding: "2rem 3rem 2rem 3rem"}}>Incorrect posture <br />Number of times</h3>
                <h1 style={{color: "#ff5b69", fontSize: "6rem"}}>13</h1>
                <h3 style={{padding: "2rem 3rem 2rem 10rem"}}>Correct posture <br/>duration in minutes</h3>
                <h1 style={{color: "#00e273", fontSize: "6rem"}}>17</h1>
            </div>
        </div>
    )
}