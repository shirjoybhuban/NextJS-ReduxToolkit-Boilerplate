import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
