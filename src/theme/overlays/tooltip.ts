export const Tooltip = {
  baseStyle: (props) => ({
    fontSize: 'sm',
    px: 4,
    py: 2,
    borderRadius: 'md',
    color: props.colorMode === 'light' ? 'white' : 'black',
    bg: props.colorMode === 'light' ? 'black !important' : 'white !important',
  }),

  sizes: {
    '': '',
  },

  variants: {
    solid: {},
  },

  defaultProps: {
    variant: 'solid',
  },
};

export const variants = Object.keys(Tooltip.variants);
export const sizes = Object.keys(Tooltip.sizes);
