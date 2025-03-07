import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timerRef = useRef(null);

    function handleStart() {
        timerRef.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timerRef.current);
        setTimerStarted(false);
        setTimerExpired(false);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Time is up!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>

            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>

            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Time is running ..." : "Timer inactive"}
            </p>
        </section>
    );
}
