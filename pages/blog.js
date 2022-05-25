import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

// refactorisation du code
const PostLink = ( {titre} ) => (
  <li>
     <Link href={`/blog:[${titre}]`} as={`/blog/${titre}`}><a>{titre}</a></Link>
  </li>
);

const Blog = () => {

  const router = useRouter();
  console.log(router);

  const style = {
    h1: {
        margin:'15px'
    }
};
    return (
        <Layout>
            <h1 style={style.h1}>blog</h1>
            <ul>
              <PostLink titre='ReactJs'/>
              <PostLink titre='Angular'/>
              <PostLink titre='VueJs'/>
              <PostLink titre='Selte'/>
              <PostLink titre='Apprendre NextJs'/>
                {/* <li>
                    <Link href='/blog:[titre]' as='/blog/reactjs'><a>ReactJs</a></Link>
                </li>
                <li>
                    <Link href='/blog:[titre]' as='/blog/angular'><a>Angular</a></Link>
                </li>
                <li>
                    <Link href='/blog:[titre]' as='/blog/vuejs'><a>VueJs</a></Link>
                </li>
                <li>
                    <Link href='/blog:[titre]' as='/blog/svelte'><a>Svelte</a></Link>
                </li> */}
            </ul>
        </Layout>
    );
};

export default Blog;
