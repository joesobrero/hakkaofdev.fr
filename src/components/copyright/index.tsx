import { Text, useColorModeValue as mode, VStack } from '@chakra-ui/react';

const DesktopCopyright = () => {
  return (
    <VStack fontSize='lg' fontWeight='thin' transform='rotate(180deg)'>
      <Text transform='rotate(90deg)' variant='body'>
        ©
      </Text>
      <Text
        sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        variant='body'
      >
        {new Date().getFullYear() + ' '}
        <Text as='span' pt={2} color={mode('blackAlpha.500', 'whiteAlpha.500')}>
          Joseph Sobrero
        </Text>
      </Text>
    </VStack>
  );
};

export default DesktopCopyright;
