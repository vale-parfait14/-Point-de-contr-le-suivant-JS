import Link from 'next/link';
import styles from 'C:/Users/ozova/Desktop/GOMYCODE/POOL/my-portfolio/component/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
