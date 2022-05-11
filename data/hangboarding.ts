import { User } from './user';

enum Grips {
  HalfCrimp = 'Half crimp',
  FullCrimp = 'Full crimp',
  OpenCrimp = 'Open crimp',
  Pinch = 'Pinch',
}

enum Fingers {
  Thumb,
  Pointer,
  Middle,
  Ring,
  Pinky,
}

export type HangboardRoutine = {
  title: string;
  grip: Grips;
  arms: [boolean, boolean];
  fingers: Fingers[];
  secondsActive: number;
  secondsRest: number;
  weight: () => {};
  sets: number;
  rounds: number;
};

export const MAX_HANGS: HangboardRoutine = {
  title: 'Max hangs',
  grip: Grips.HalfCrimp,
  arms: [true, true],
  fingers: [Fingers.Pointer, Fingers.Middle, Fingers.Ring, Fingers.Pinky],
  secondsActive: 10,
  secondsRest: 120,
  weight: () => {
    return 0.85 * User.maxHangWeight;
  },
  sets: 6,
  rounds: 1,
};

export const REPEATERS: HangboardRoutine = {
  title: 'Repeaters',
  grip: Grips.HalfCrimp,
  arms: [true, true],
  fingers: [Fingers.Pointer, Fingers.Middle, Fingers.Ring, Fingers.Pinky],
  secondsActive: 7,
  secondsRest: 3,
  weight: () => 0,
  sets: 6,
  rounds: 6,
};
