import Head from 'next/head';
import { withRouter } from 'next/router';
import withLayout from "../lib/withLayout";

const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomad Store</title>
    </Head>
    {JSON.stringify(props)}
    <h1>Blog post</h1>
  </div>
);

export default withLayout(withRouter(Post));