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

      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections} ${utilStyles.blurb}`}>
        <p>Software developer currently working for DLUHC in Manchester, previously a developer and/or delivery manager on agile teams across several government departments.</p>
      </section>
 
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
        <h2 className={utilStyles.headingLg}>Talks</h2>
          <ul className={utilStyles.list}>
              <li className={`${utilStyles.listItem} ${utilStyles.padding1px}`}>
                  <Link href={'working_with_developers.pdf'} target="_blank" rel="noopener noreferrer" locale={false}>
                      Working with developers – intervention without overstepping (pdf)
                  </Link>
                  <br/>
                  <small className={utilStyles.lightText}>
                      March 2024
                  </small>
                  <br/>
                  Deliver Sessions
              </li>
              <li className={`${utilStyles.listItem} ${utilStyles.padding1px}`}>
                  <Link href={"https://www.youtube.com/watch?v=UjdyimoZ4Ck&t"}>
                      On not being a shit umbrella (YouTube)
                  </Link>
                  <br/>
                  <small className={utilStyles.lightText}>
                      September 2020
                  </small>
                  <br/>
                  Agile Oxfordshire
              </li>
          </ul>
      </section>
        <hr/>
        <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.slice(0, 3).map(({id, date, title, description}) => (
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
        <Link href={`/posts`}>All posts</Link>
      </section>
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
        <h2 className={utilStyles.headingLg}>Guides for delivery managers about developer things</h2>
        <Link href={`/guides`}>All guides</Link>
      </section>

      <hr/>

      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
        <h2 className={utilStyles.headingLg}>Contact me</h2>
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