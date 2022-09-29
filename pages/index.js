import Image from 'next/image';
import Link from "next/link";
import Head from 'next/head';
import styles from "../styles/Home.module.css";

const products = [{ name: "bag" }, { name: "shoes" }, { name: "socks" }];

function Content({type}) {
  return (
    <div>
      <p>ここにコンテンツが入ります。</p>
      <style global jsx>{`
        p {
          color: ${type === 'alert' ? "red" : "blue"}
        }
      `}</style>
      <style jsx>{`
        p {
          background: green;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>トップページ</title>
        <meta name="description" content="これはトップページです" />
        <meta property="og:title" content="トップページ" />
        <meta property="og:description" content="これはトップページ" />
      </Head>
      <ul>
      {products.map((product) => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`} >
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={{
              pathname: '/about',
              query: { name: 'test' },
            }}
          >
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1 className="heading">Hello Next.js</h1>
      <h2 className={styles.h2}>Hello Next.js</h2>
      <h3 className="text-3xl py-3 bg-indigo-900">Hello Next.js</h3>
      <Content type="hoge"/>
      <p>ここにもコンテンツが入ります。</p>
      <style jsx>
        {`
          h1 {
            color: red;
            background: green;
          }
          .heading {
            padding: 30px;
          }
        `}
      </style>
      <Image src="/test.png" width={500} height={300} />
      <Image
        src="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjY4OTkyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        width={500}
        height={300}
      />
    </div>
  );
}