import Head from 'next/head';
import { withRouter } from 'next/router';

const Movie = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomad Store</title>
    </Head>
    {JSON.stringify(props)}
    <h1>Blog post</h1>
  </div>
);

export default withRouter(Movie);
