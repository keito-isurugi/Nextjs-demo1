import Head from 'next/head';
const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];
export default function Bag() {
  return (
    <>
      <Head>
        <title>{products[0].name}</title>
        <meta name="description" content={`${products[0].name}のページ`} />
        <meta property="og:title" content={products[0].name} />
        <meta
          property="og:description"
          content={`${products[0].name}のページ`}
        />
      </Head>
      <h1>バックのページです</h1>
    </>
  );
}