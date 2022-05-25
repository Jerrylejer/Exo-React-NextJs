import React from 'react';
import Layout from '../../components/Layout';

const Items = () => {

  const style = {
    h1: {
        margin:'15px'
    }
};

  return (
      <Layout>
          <h1 style={style.h1}>Items</h1>
      </Layout>
  )
}

export default Items;