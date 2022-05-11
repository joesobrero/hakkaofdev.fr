import { Command } from '@/types/command';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';
import { FcEditImage } from '@react-icons/all-files/fc/FcEditImage';
import { FcHome } from '@react-icons/all-files/fc/FcHome';
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill';
import { WiDaySunny } from '@react-icons/all-files/wi/WiDaySunny';
import { INSTAGRAM } from './../src/constants';

const commands: Command[] = [
  {
    title: 'Home',
    icon: FcHome,
    href: '/',
    isExternal: false,
  },
  {
    title: 'Portfolio',
    icon: FcEditImage,
    href: '/portfolio',
    isExternal: false,
  },
  {
    title: 'Instagram',
    icon: RiInstagramFill,
    href: INSTAGRAM,
    isExternal: true,
  },
  {
    title: 'Dark Theme',
    icon: BsMoon,
  },
  {
    title: 'Light Theme',
    icon: WiDaySunny,
  },
];

export default commands;
