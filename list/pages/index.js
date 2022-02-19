import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div className={styles.title}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius voluptas fugit cumque. Quisquam doloribus praesentium dolore quas, dignissimos laborum impedit temporibus, ipsa libero assumenda consequatur animi, earum eaque qui.</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius voluptas fugit cumque. Quisquam doloribus praesentium dolore quas, dignissimos laborum impedit temporibus, ipsa libero assumenda consequatur animi, earum eaque qui.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
