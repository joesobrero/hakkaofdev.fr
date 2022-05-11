import { User } from '@/data/user';
import {
  Divider,
  Heading,
  SimpleGrid,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import Routines from './routines';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getDayOfMonth = (week, day) => {
  return week * 7 + days.indexOf(day);
};

const renderDays = (weeks) => {
  const themeColor = User.themeColor;
  let elements = [];

  for (let week = 0; week < weeks; week++) {
    days.map((day) => {
      elements.push(
        <VStack
          align='start'
          p={4}
          borderColor={mode('gray.100', 'white.100')}
          borderWidth='1px'
          spacing={2}
        >
          <Heading
            color={mode(themeColor + '.600', themeColor + '.400')}
            variant='caption'
          >
            {getDayOfMonth(week, day)}
          </Heading>
          <Divider />
          {Routines(getDayOfMonth(week, day))}
        </VStack>
      );
    });
  }

  return elements;
};

const renderDayHeaders = () => {
  let elements = [];

  days.map((day) => {
    elements.push(
      <VStack
        align='start'
        p={4}
        bg={mode('gray.50', 'gray.950')}
        borderWidth='1px'
        borderColor={mode('blackAlpha.100', 'whiteAlpha.100')}
      >
        <Heading variant='caption'>{day}</Heading>
      </VStack>
    );
  });

  return elements;
};

const Calendar = () => (
  <SimpleGrid
    overflow={'scroll'}
    borderWidth='1px'
    borderColor={mode('gray.100', 'gray.900')}
    borderRadius={'lg'}
    columns={7}
    spacing={0}
    w='full'
  >
    {renderDayHeaders()}
    {renderDays(User.trainingCycle.weeks)}
  </SimpleGrid>
);

export default Calendar;
