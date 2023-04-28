import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getSortedGuidesData } from '../lib/guides'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export default function Home({ allPostsData, allGuidesData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
        <p>Software developer currently working for DLUHC in Manchester, previously a developer and/or delivery manager on agile teams across several government departments.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
      <Link href="https://twitter.com/EleanorMollett" className={utilStyles.social}>

        <Image
          priority
          src="/images/twitter.png"
          height={70}
          width={70}
          alt="Twitter"
        />

      </Link>

      <Link href="https://github.com/emollett" className={utilStyles.social}>

        <Image
          priority
          src="/images/github.png"
          height={70}
          width={70}
          alt="GitHub"
        />

      </Link>

      <Link
        href="https://www.linkedin.com/in/eleanormollett/"
        className={utilStyles.social}>

        <Image
          priority
          src="/images/linkedin.png"
          height={70}
          width={70}
          alt="Linkedin"
        />

      </Link>
      </section>
<hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
        <h2 className={utilStyles.headingLg}>Talks</h2>
        <ul className={utilStyles.list}>
          <li className={`${utilStyles.listItem} ${utilStyles.padding1px}`}>
            <Link href={"https://www.youtube.com/watch?v=UjdyimoZ4Ck&t"}>
              On not being a shit umbrella - Agile Oxfordshire
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              September 2020
            </small>
          </li>
        </ul>
      </section>
<hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={`${utilStyles.listItem} ${utilStyles.padding1px}`} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
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
<hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
        <h2 className={utilStyles.headingLg}>Guides for delivery managers about developer stuff</h2>
        <ul className={utilStyles.list}>
          {allGuidesData.map(({ id, title, description }) => (
            <li className={`${utilStyles.listItem} ${utilStyles.padding1px}`} key={id}>
              <Link href={`/guides/${id}`}>
                {title}
              </Link>
              <br />
              <br />
              {description}
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allGuidesData = getSortedGuidesData()
  return {
    props: {
      allPostsData,
      allGuidesData
    }
  }
}