import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const Blog = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
        `);

    console.log(allMarkdownRemark);
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {allMarkdownRemark.edges.map(({node}) => {
                    const { frontmatter: { title, date }} = node;
                    return (
                        <li>
                            <h2>{ title }</h2>
                            <p>{ date }</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;