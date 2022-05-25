import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();
    // console.log(router);
    
    const style = {
        header: {
            margin: '20px',
            padding: '20px',
            border: '1px solid #DDD'
        },

        link: {
            margin: '15px'
        },

        active: {
            margin: '15px',
            color: 'red',
            borderBottom: '1px solid red'
        }
    };

  return (
    <div style={style.header}>
        <Link href='/' passHref><span style={router.pathname === '/' ? (style.active) : (style.link)}>Home</span></Link>
        <Link href='/blog' passHref><span style={router.pathname === '/blog' ? (style.active) : (style.link)}>Blog</span></Link>
        <Link href='/profile' passHref><span style={router.pathname === '/profile' ? (style.active) : (style.link)}>Profile</span></Link>
        <Link href='/blog/items' passHref><span style={router.pathname === '/blog/items' ? (style.active) : (style.link)}>Items</span></Link>
        <Link href='/blog/categories' passHref><span style={router.pathname === '/blog/categories' ? (style.active) : (style.link)}>Categories</span></Link>
    </div>
  )
}

export default Header;