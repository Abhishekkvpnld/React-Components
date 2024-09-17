import { useState } from "react";
import "./countdownTimer.css";

const CountdownTimer = () => {

    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [second, setSecond] = useState();

    return (
        <div className="timer-section">
            <h1 style={{color:"grey"}}>Countdown Timer</h1>

            <div className="timer">

                <div className="hours">
                    <h4 style={{ color: "blueviolet" }}>Hours</h4>
                    <input
                        value={hours}
                        onChange={(e) => {
                            // Limit the length of the value to 2 characters
                            const value = e.target.value.slice(0, 2);
                            setHours(value);
                        }}
                        type="number"
                        name="hours"
                        id="hours"
                        maxLength={2}
                        placeholder="00"
                    />
                </div>

                <div className="minutes">
                    <h4 style={{ color: "blueviolet" }}>Minutes</h4>
                    <input
                        value={minutes}
                        onChange={(e) => {
                            // Limit the length of the value to 2 characters
                            const value = e.target.value.slice(0, 2);
                            setMinutes(value);
                        }}
                        type="number"
                        name="minutes"
                        id="minutes"
                        maxLength={2}
                        placeholder="00"
                    />
                </div>

                <div className="seconds">
                    <h4 style={{ color: "blueviolet" }}>Seconds</h4>
                    <input
                        value={second}
                        onChange={(e) => {
                            // Limit the length of the value to 2 characters
                            const value = e.target.value.slice(0, 2);
                            setSecond(value);
                        }}
                        type="number"
                        name="seconds"
                        id="seconds"
                        maxLength={2}
                        placeholder="00"
                    />
                </div>

            </div>

            <div className="buttons">
                <button className="start-btn">Start</button>
                <button className="stop-btn">Stop</button>
                <button className="reset-btn">Reset</button>
            </div>
        </div>
    )
}

export default CountdownTimer;