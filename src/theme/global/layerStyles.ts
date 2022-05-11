const blur = 'blur(8px)';

export const layerStyles = {
  // WRAPPERS
  'body-content-wrapper': {
    h: 'auto',
    w: '100vw',
    overflowX: 'hidden',
    minH: '100vh',
  },
  'content-wrapper': {
    w: 'full',
    py: 32,
    px: [8, 10, 12, 16],
  },
  section: {
    mt: [16],
    px: [8, 10, 12, 14, 16],
    py: [6, 8, 10, 12, 14],
  },

  // HERO
  heading: {
    w: 'full',
    mb: [1, 2, 3, 4, 5, 6],
  },

  // ACCORDION
  'accordion-button': {
    textStyle: 'subheading',
    py: 8,
    _hover: { boxShadow: 'none' },
    _focus: { boxShadow: 'none' },
  },
  'accordion-panel': {
    w: 'full',
    textStyle: 'text',
    mb: 4,
  },

  // MENUS
  'nav-menu-container': {
    display: ['unset', null, null, 'none', null, null],
  },
  'menu-item': {
    _hover: {
      background: 'purpleAlpha.100',
      textDecoration: 'none',
    },
    _focus: {
      background: 'purpleAlpha.100',
      textDecoration: 'none',
    },
  },
  'menu-list': {
    zIndex: 'tooltip',
  },

  // SECTIONS
  'text-card': {
    borderRadius: 'lg',
    borderWidth: '1px',
    borderStyle: 'solid',
  },

  // BRAND
  'light-bg': {
    bgImage:
      'linear-gradient(45deg,#f6f6f6 25%,transparent 0,transparent 75%,#f6f6f6 0,#f6f6f6),linear-gradient(45deg,#f6f6f6 25%,transparent 0,transparent 75%,#f6f6f6 0,#f6f6f6)',
    bgSize: '30px 30px',
    bgPosition: '0 0, 45px 45px',
    bgColor: 'white',
    objectFit: 'contain !important',
  },
  'dark-bg': {
    bgImage:
      'linear-gradient(45deg, rgb(34, 36, 39) 25%, transparent 0px, transparent 75%, rgb(34, 36, 39) 0px, rgb(34, 36, 39)), linear-gradient(45deg, rgb(34, 36, 39) 25%, transparent 0px, transparent 75%, rgb(34, 36, 39) 0px, rgb(34, 36, 39))',
    bgSize: '30px 30px',
    bgPosition: '0 0, 45px 45px',
    bgColor: 'black',
    objectFit: 'contain !important',
  },
  none: {
    objectFit: 'contain !important',
  },
};
