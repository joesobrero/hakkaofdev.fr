import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
// data display
import { Badge } from './data-display/badge';
import { Code } from './data-display/code';
import { Divider } from './data-display/divider';
import { Kbd } from './data-display/kbd';
import { List } from './data-display/list';
import { Stat } from './data-display/stat';
import { Table } from './data-display/table';
import { Tag } from './data-display/tag';
// disclosure
import { Accordion } from './disclosure/accordion';
import { Tabs } from './disclosure/tabs';
// forms
import { Button } from './forms/button';
import { Checkbox } from './forms/checkbox';
// global
import { colors } from './global/colors';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './global/fonts';
import { layerStyles } from './global/layerStyles';
import { shadows } from './global/shadows';
import { radii, sizes, space } from './global/sizes';
import { styles } from './global/styles';
import { textStyles } from './global/textStyles';
import { zIndices } from './global/zIndices';
// overlays
import { Tooltip } from './overlays/tooltip';
// typography
import { Heading } from './typography/heading';
import { Text } from './typography/text';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const components = {
  // forms
  Button,
  Checkbox,
  // Editable,
  // Form Control,
  // Input,
  // Number Input,
  // Pin Input,
  // Radio,
  // Range Slider,
  // Select,
  // Slider
  // Switch
  // Textarea

  // data display
  Badge,
  Code,
  Divider,
  Kbd,
  List,
  Stat,
  Table,
  Tag,

  // disclosure
  Accordion,
  Tabs,

  // layout
  // Aspect Ratio
  // Box
  // Center
  // Container
  // Flex
  // Grid
  // Simple Grid
  // Stack
  // Wrap

  // overlays
  // Alert Dialog
  // Drawer
  // Menu
  // Modal
  // Popover
  Tooltip,

  // typography
  Text,
  Heading,

  // feedback
  // Alert,
  // Circular Progress,
  // Progress,
  // Skeleton,
  // Spinner,
  // Toast,
};

const theme = extendTheme(
  {
    colors,
    styles,
    layerStyles,
    textStyles,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    sizes,
    radii,
    space,
    zIndices,
    shadows,
    config,
    components,
  },
  withDefaultColorScheme({ colorScheme: 'orange' })
);

export default theme;
