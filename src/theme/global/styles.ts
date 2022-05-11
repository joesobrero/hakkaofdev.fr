import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props) => ({
    'html, body': {
      bg: mode('white', 'black')(props),
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollbarGutter: 'stable',
      color: mode('black', 'white')(props),
      w: '100vw',
      minH: '100vh',
      scrollBehavior: 'smooth',
    },
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '::-webkit-scrollbar-thumb ': {
      bgColor: 'purpleAlpha.800',
    },
  }),
};
