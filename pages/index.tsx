import Calendar from '@/components/calendar';
import Layout from '@/components/layout';
import { useColorModeValue as mode, VStack } from '@chakra-ui/react';

const IndexPage = ({ seoTitle, seoDescription }) => (
  <Layout title={seoTitle} description={seoDescription}>
    <VStack h='100vh' w='full' justify='center'>
      <VStack
        h='80vh'
        p={8}
        w='full'
        overflowY='scroll'
      >
        <Calendar />
      </VStack>
    </VStack>
  </Layout>
);

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Home',
      seoDescription: 'Fitenss calendar',
    },
  };
}

export default IndexPage;
