import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import './../styles/index.scss';

const Index = () => {
    return (
        <Layout>
            <h1>hello andre</h1>
            <div>here is more <Link to="/about">about us</Link> </div>
        </Layout>
    )
}

export default Index;
