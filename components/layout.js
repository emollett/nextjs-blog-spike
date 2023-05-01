import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Eleanor Mollett'
export const siteTitle = name

export default function Layout({ children, home, guides, posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The website and blog of Eleanor Mollett"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/photo.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">

              <Image
                priority
                src="/images/photo.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />

            </Link>
            <h1 className={utilStyles.heading2Xl}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {guides && (
        <div className={styles.backToHome}>
          <Link href="/guides">
            ← Back to guides
          </Link>
        </div>
      )}
      {posts && (
        <div className={styles.backToHome}>
          <Link href="/posts">
            ← Back to posts
          </Link>
        </div>
      )}
      {!home && !guides && !posts && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}