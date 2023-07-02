import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedGuidesData } from '../../lib/guides'
import Link from 'next/link'

export default function Home({ allGuidesData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | What is ...</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.paddingSections}`}>
        <h2 className={utilStyles.headingLg}>Guides for delivery managers about developer things</h2>
        <h3 className={utilStyles.headingMd}>What is ...</h3>
        <ul className={utilStyles.list}>
          {allGuidesData.map(({ id, title, draft }) => (
              <>
                {!draft && (
                    <li className={`${utilStyles.listItem} ${utilStyles.padding1px}`} key={id}>
                    <Link href={`/guides/${id}`}>
                        {title}
                    </Link>
                    </li>
                )}
            </>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allGuidesData = getSortedGuidesData()
  return {
    props: {
      allGuidesData
    }
  }
}