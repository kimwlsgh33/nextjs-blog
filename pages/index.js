import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/Layout";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <p>
          Hello, I'm CodeMoon. I'm a software enginer and translator
          (English/Korean). You can contact me on <a href="">Instagram</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          {" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
