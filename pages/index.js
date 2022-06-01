import React from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const Home = ({data}) => {

  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: '1px solid #DDD'
};

  return (
    <Layout>
      {/* {JSON.stringify(data)} */}
      {
        data.map(region => (
          <div style={styles}>
            <h1>{region.nom}</h1>
            <p>{region.code}</p>
          </div>
        ))
      }
      </Layout>
  )
}

export async function getServerSideProps(context) {
  const url = 'https://geo.api.gouv.fr';
  const {data} = await axios.get(url + '/regions');

  return {
    props: {data},
  }
}

export default Home;
