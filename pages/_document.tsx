import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const disableNextOverlay = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })`;
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: disableNextOverlay }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
