import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NameLink = ({ name }) => (
    <li>
        <Link href={`/profile?name=${name}`}>
            <a>{name}</a>
        </Link>
    </li>
);

const Profile = () => {
    const router = useRouter();
    console.log(router);

    const style = {
        h1: {
            margin: '15px',
        },
        h2: {
            margin: '15px',
            color: 'red',
        },
    };
    return (
        <Layout>
            <h1 style={style.h1}>Profile</h1>
            <ul>
                <NameLink name='Jérôme' />
                <NameLink name='Hélène' />
                <NameLink name='Félix' />
                <NameLink name='Zoé' />
                <NameLink name='Fantin' />
            </ul>
            <h2 style={style.h2}>{router.query.name}</h2>
        </Layout>
    );
};

export default Profile;
