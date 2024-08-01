import Navbar from 'C:/Users/ozova/Desktop/GOMYCODE/POOL/my-portfolio/components/Navbar';
import styles from 'C:/Users/ozova/Desktop/GOMYCODE/POOL/my-portfolio/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Portfolio
        </h1>
        <p className={styles.description}>
          Hi, I'm [Your Name]. I'm a [Your Profession].
        </p>
      </main>
    </div>
  );
}
