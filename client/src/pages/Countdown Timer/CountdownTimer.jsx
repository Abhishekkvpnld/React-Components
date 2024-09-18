import { useState } from "react";
import "./countdownTimer.css";
import { MdOutlineNotStarted } from "react-icons/md";
import { IoStopCircleOutline } from "react-icons/io5";
import { LuTimerReset } from "react-icons/lu";
import { MdRestartAlt } from "react-icons/md";

const CountdownTimer = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const [start, setStart] = useState(false);
    const [stop, setStop] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const formatTime = (time) => String(time).padStart(2, '0');

    // Start the timer
    const handleStart = () => {
        if (parseInt(hours) == 0 && parseInt(minutes) == 0 && parseInt(seconds) == 0) return;

        setStart(true);
        setStop(false);  // Reset stop status when starting

        const countdownTimer = setInterval(() => {
            timer();
        }, 1000);

        setIntervalId(countdownTimer); // Save the interval ID
    };

    // Pause the timer
    const handlePause = () => {
        if (intervalId) {
            clearInterval(intervalId); // Clear the interval
            setStart(false); // Set start to false to show "Start" button again
            setIntervalId(null); // Reset interval ID
        }
    };

    // Stop the timer completely
    const stopInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        setStop(true);
        setStart(false);
    };

    // Timer logic
    const timer = () => {
        const h = parseInt(hours) || 0;
        const m = parseInt(minutes) || 0;
        const s = parseInt(seconds) || 0;

        if (h == 0 && m == 0 && s == 0) {
            stopInterval();
        } else if (s > 0) {
            setSeconds(prev => formatTime(prev - 1));
        } else if (s == 0 && m > 0) {
            setMinutes(prev => formatTime(prev - 1));
            setSeconds(59);
        } else if (m == 0 && h > 0) {
            setHours(prev => formatTime(prev - 1));
            setMinutes(59);
            setSeconds(59);
        }
    };

    const handleReset = () => {
        stopInterval();
        setHours('');
        setMinutes('');
        setSeconds('');
        setStop(false);  // Reset stop status on reset
    };

    return (
        <div className="timer-section">
            <h1 style={{ color: "grey" }}>Countdown Timer</h1>

            <div className="timer">
                <div className="hours">
                    <h4 style={{ color: "blueviolet" }}>Hours</h4>
                    <input
                        value={hours}
                        onChange={(e) => {
                            const value = e.target.value.slice(0, 2);
                            setHours(value.replace(/\D/g, '')); // Accept only digits
                        }}
                        type="text"
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
                            const value = e.target.value.slice(0, 2);
                            setMinutes(value.replace(/\D/g, '')); // Accept only digits
                        }}
                        type="text"
                        name="minutes"
                        id="minutes"
                        maxLength={2}
                        placeholder="00"
                    />
                </div>

                <div className="seconds">
                    <h4 style={{ color: "blueviolet" }}>Seconds</h4>
                    <input
                        value={seconds}
                        onChange={(e) => {
                            const value = e.target.value.slice(0, 2);
                            setSeconds(value.replace(/\D/g, '')); // Accept only digits
                        }}
                        type="text"
                        name="seconds"
                        id="seconds"
                        maxLength={2}
                        placeholder="00"
                    />
                </div>
            </div>

            <div className="buttons">
                {start ? (
                    <>
                        <button
                            style={{ display: stop ? "none" : "inline-block" }}
                            onClick={handlePause}
                            className="pause-btn"
                        >
                            <MdRestartAlt style={{ fontSize: "25px" }} /> Pause
                        </button>

                        <button
                            style={{ display: stop ? "none" : "inline-block" }}
                            onClick={stopInterval}
                            className="stop-btn"
                        >
                            <IoStopCircleOutline style={{ fontSize: "25px" }} /> Stop
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleStart} className="start-btn">
                        <MdOutlineNotStarted style={{ fontSize: "25px" }} /> Start
                    </button>
                )}
                <button className="reset-btn" onClick={handleReset}>
                    <LuTimerReset style={{ fontSize: "25px" }} /> Reset
                </button>
            </div>
        </div>
    );
};

export default CountdownTimer;
