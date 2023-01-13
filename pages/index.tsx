import Head from 'next/head'

const domain = process.env.NEXT_PUBLIC_SERVER_DOMAIN || "https://next-iframe-poc-server.vercel.app"

console.log('domain', domain)

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next IFrame Poc Client</h1>
        <iframe src={domain} />
      </main>
    </>
  )
}
