import Head from "next/head";
import Layout from "../../components/Layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();

  // Return the data to getStaticProps
  return {
    paths,
    fallback: false, // If false, any paths not returned by getStaticPaths will result in a 404 page.
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);

  // Return the data to Post component
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
