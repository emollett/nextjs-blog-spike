import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
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

export default function Post({ postData }) {
  return (
    <Layout posts>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          children={postData.content}
          components={components}
        />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

