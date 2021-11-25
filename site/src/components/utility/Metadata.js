import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        {title ? <title>KM | {title}</title> : <title>KM | Experiments</title>}
      </Head>

      <main className="min-h-screen">
        <div>{children}</div>
      </main>
    </>
  );
}
