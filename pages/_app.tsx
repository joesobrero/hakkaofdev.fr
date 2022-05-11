import Palette from '@/components/command-palette';
import MainLayout from '@/components/main-layout';
import PaletteProvider from '@/providers/palette-provider';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/prompt';
import '@fontsource/rubik';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import theme from 'src/theme';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <PaletteProvider>
        <MainLayout>
          <Palette />
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MainLayout>
      </PaletteProvider>
    </ChakraProvider>
  );
};

export default App;
