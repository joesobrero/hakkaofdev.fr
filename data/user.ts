import { HangboardRoutine, MAX_HANGS, REPEATERS } from './hangboarding';

enum ThemeColor {
  orange = 'orange',
  purple = 'purple',
  green = 'green',
  red = 'red',
  blue = 'blue',
}

type Routine = {
  routine: HangboardRoutine;
  daysBetweenSessions: number;
  startDayOffset: number;
};

type User = {
  firstName: string;
  lastName: string;
  themeColor: ThemeColor;
  bodyWeight: number;
  maxHangWeight: number;
  schedule: {
    startDay: Date;
    routines: Routine[];
  };
  trainingCycle: {
    weeks: 18;
  };
};

export const User: User = {
  firstName: 'Joseph',
  lastName: 'Sobrero',
  themeColor: ThemeColor.blue,
  bodyWeight: 145,
  maxHangWeight: 50,
  schedule: {
    startDay: new Date(2022, 5, 10),
    routines: [
      { routine: MAX_HANGS, daysBetweenSessions: 10, startDayOffset: 5 },
      { routine: REPEATERS, daysBetweenSessions: 10, startDayOffset: 10 },
    ],
  },
  trainingCycle: {
    weeks: 18,
  },
};
