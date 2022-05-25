import '../styles/global.css';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { wrapper } from '../store/store';

const colors = {
  brand: {
    100: '#1a365d',
    200: '#153e75',
    300: '#2a69ac',
  },
};
const theme = extendTheme({ colors });

const ViewPort = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

const App = (props) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Digital Insurance System" />
        <meta name="keywords" content="insurance" />
        <title>Waada.Insure</title>
      </Head>
      <ViewPort {...props} />
    </ChakraProvider>
  );
};
export default wrapper.withRedux(App);
