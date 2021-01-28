import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `);

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {allMarkdownRemark.edges.map(({ node }) => {
                    const { frontmatter: { title, date }, fields: { slug } } = node;
                    return (
                        <li>
                            <Link to={`/blog/${slug}`}>
                                <h2>{title}</h2>
                                <p>{date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;