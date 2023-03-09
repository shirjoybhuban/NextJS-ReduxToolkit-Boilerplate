import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>[Hello Team]</p>
        <Button colorScheme="blue" onClick={()=>router.push('/login')}>Login</Button>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Waada Homepage</h2>
        <Link href="/reduxServersideprop">
          go to Redux
        </Link>
      </section>
    </>
  );
}
