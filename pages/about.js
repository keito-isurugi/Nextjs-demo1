import Layout from './components/layout';

const About = () => {
  return (
    <h1>About Page</h1>
  )
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
};

export default About