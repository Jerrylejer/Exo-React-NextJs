import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Titre = () => {

    const style = {
        h1: {
            margin:'15px'
        }
    };

    const router = useRouter();
    console.log(router.query);

  return (
      <Layout>
          <h1 style={style.h1}>{router.query.titre}</h1>
      </Layout>
  )
}

export default Titre;