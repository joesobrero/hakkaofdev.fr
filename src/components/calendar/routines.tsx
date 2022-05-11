import { User } from '@/data/user';
import { Badge } from '@chakra-ui/react';

const Routines = (daysIntoRoutine: number) => {
  let elements = [];

  User.schedule.routines.map((routine) =>
    daysIntoRoutine - routine.startDayOffset === 0
      ? elements.push(<Badge colorScheme='teal'>{routine.routine.title}</Badge>)
      : (daysIntoRoutine - routine.startDayOffset) %
          routine.daysBetweenSessions ===
        0
      ? elements.push(<Badge colorScheme='teal'>{routine.routine.title}</Badge>)
      : null
  );

  return elements;
};

export default Routines;
