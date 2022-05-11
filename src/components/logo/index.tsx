import { Heading, HStack, Link, Text, TextProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import NextLink from 'next/link';
import ThemeButton from '../theme-button';

const variants: Variants = {
  animate: {
    opacity: [0, 0, 0, 0, 1, 1, 1, 1],
    transition: {
      delay: 0.25,
      duration: 1,
      repeat: Infinity,
      ease: [0.15, 0.85, 0.15, 0.85],
    },
  },
};

const MotionText = motion<TextProps>(Text);

const Logo = () => {
  return (
    <HStack spacing={4}>
      <ThemeButton />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: 'ease',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <NextLink href='/' passHref>
          <Link
            as={Heading}
            variant='subtitle'
            _hover={{ textDecoration: 'none' }}
          >
            Calendar
          </Link>
        </NextLink>
      </motion.div>
    </HStack>
  );
};

export default Logo;
