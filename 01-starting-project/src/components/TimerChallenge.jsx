import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timer = useRef(null);
    const dialog = useRef();
    const [timerIsActive, setTimerIsActive] = useState(false);

    function handleStart() {
        if (timer.current) return; // Prevent multiple intervals

        setTimerIsActive(true);
        timer.current = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 10) {
                    clearInterval(timer.current);
                    timer.current = null;
                    setTimerIsActive(false);
                    if (dialog.current) dialog.current.open(); // ✅ Correct way to open modal
                    return 0;
                }
                return prevTime - 10;
            });
        }, 10);
    }

    function handleStop() {
        if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
        }
        setTimerIsActive(false);
        if (dialog.current) dialog.current.open(); // ✅ Use open() instead of showModal()
    }

    function handleReset() {
        clearInterval(timer.current);
        timer.current = null;
        setTimeRemaining(targetTime * 1000);
        setTimerIsActive(false);
    }

    return (
        <>
            {/* ✅ Pass the ref correctly */}
            <ResultModal 
                ref={dialog} 
                targetTime={targetTime} 
                remainingTime={timeRemaining} 
                onReset={handleReset} 
            />
        
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running ..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
