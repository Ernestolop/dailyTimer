import { useState, useEffect, useRef } from 'react';

const Timer = ({ maxTimeSeconds }) => {
  const maxTimeMiliseconds = maxTimeSeconds * 1000;
  const [time, setTime] = useState({ minutes: 0, seconds: 0, milliseconds: 0 });
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);
  const [lastKeyPressed, setLastKeyPressed] = useState('');
  const [timePercentage, setTimePercentage] = useState(0);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          const newMilliseconds = prevTime.milliseconds + 10;
          const newSeconds = prevTime.seconds + Math.floor(newMilliseconds / 1000);
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          const currentTimeInMilliseconds = (newMinutes * 60 + newSeconds) * 1000 + newMilliseconds;
          const percentage = (currentTimeInMilliseconds / maxTimeMiliseconds) * 100;

          setTimePercentage(percentage);

          return {
            minutes: newMinutes % 60,
            seconds: newSeconds % 60,
            milliseconds: newMilliseconds % 1000,
          };
        });
      }, 10);
    }
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsActive(false);
    clearInterval(timerRef.current);
    setTime({ minutes: 0, seconds: 0, milliseconds: 0 });
    setTimePercentage(0);
  };

  const restartTimer = () => {
    setTime({ minutes: 0, seconds: 0, milliseconds: 0 });
    setTimePercentage(0);
    startTimer();
  };

  const handleKeyPress = event => {
    const key = event.key;
    if (key === ' ') {
      startTimer();
    } else if (key === 'p') {
      pauseTimer();
    } else if (key === 'Escape') {
      resetTimer();
    } else if (key === 'Enter') {
      restartTimer();
    }
    setLastKeyPressed(key);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [lastKeyPressed]);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className='timer'>
      <div className={`timer__values ${timePercentage >= 80 ? 'timer__values--danger' : timePercentage >= 60 ? 'timer__values--warning' : ''} ${timePercentage >= 100 ? 'timer__values--end' : ''}`}>
        <span className="timer__value">
          {time.minutes.toString().padStart(2, '0')}
        </span>
        :
        <span className="timer__value">
          {time.seconds.toString().padStart(2, '0')}
        </span>
        .
        <span className="timer__value">
          <small>{time.milliseconds.toString().padStart(2, '0').slice(0, 2)}</small>
        </span>
      </div>
      <footer className="timer__buttons">
        <button className='timer__button' onClick={startTimer}>Start</button>
        <button className='timer__button' onClick={pauseTimer}>Pause</button>
        <button className='timer__button' onClick={resetTimer}>Reset</button>
        <button className='timer__button' onClick={restartTimer}>Restart</button>
      </footer>
    </section>
  );
};

export default Timer;