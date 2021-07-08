import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    var ad_idzone = "4345132",
    ad_width = "728",
    ad_height = "90",
    v_pos = "top",
    h_pos = "left";

    return (
      <Html>
        <Head><title>Precious Things</title>
    <script type="application/javascript" src="https://a.realsrv.com/js.php?t=17&idzone=4345132"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument