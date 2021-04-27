import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Software developer currently working for NICE in Manchester, previously developer and/or delivery manager on agile teams across several government departments.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <Link href="https://twitter.com/EleanorMollett">
        <a className={utilStyles.social}>
          <Image
            priority
            src="/images/twitter.png"
            height={70}
            width={70}
            alt="Twitter"
          />
        </a>
      </Link>

      <Link href="https://github.com/emollett">
        <a className={utilStyles.social}>
          <Image
            priority
            src="/images/github.png"
            height={70}
            width={70}
            alt="GitHub"
          />
        </a>
      </Link>

      <Link href="https://www.linkedin.com/in/eleanormollett/">
        <a className={utilStyles.social}>
          <Image
            priority
            src="/images/linkedin.png"
            height={70}
            width={70}
            alt="Linkedin"
          />
        </a>
        
      </Link>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={`${utilStyles.listItem} ${utilStyles.padding1px}`} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              {description}
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}