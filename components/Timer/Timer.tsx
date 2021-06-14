import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export interface TimerProps {
  // time?: Date;
}

export function Timer(props: TimerProps) {
  const [time, setTime] = useState(dayjs(5 * 60 * 1000));

  useEffect(() => {
    const timer = setInterval(function () {
      setTime((time) => time.subtract(1, 'second'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{time.format('mm:ss')}</span>;
}
