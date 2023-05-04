import Layout, { siteTitle } from '../../components/layout'
import { getAllGuideIds, getGuideData } from '../../lib/guides'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const components = {
  image: image => {
    return <Image src={image.src} alt={image.alt} />
  },
  code({children, language}) {
    return (
      <SyntaxHighlighter 
        children={String(children).replace(/\n$/, '')} 
        showLineNumbers={true} 
        language={language} 
        style={vs} />
    );
  }
}

export default function Guide({ guideData }) {
  return (
    <Layout guides>
      <Head>
        <title>{siteTitle} | What is ... {guideData.title.toLowerCase()}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>What is ... {guideData.title.toLowerCase()}</h1>
        <ReactMarkdown
          children={guideData.content}
          components={components}
        />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const guideData = await getGuideData(params.id)
  return {
    props: {
      guideData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllGuideIds()
  return {
    paths,
    fallback: false
  }
}

