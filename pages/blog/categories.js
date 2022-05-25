import React from 'react';
import Layout from '../../components/Layout';


const Categories = () => {

  const style = {
    h1: {
        margin:'15px'
    }
};
  return (
      <Layout>
          <h1 style={style.h1}>Categories</h1>
      </Layout>
  )
}

export default Categories;