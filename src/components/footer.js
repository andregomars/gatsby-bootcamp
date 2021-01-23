import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
    }`);

    return (
        <div>
            <h3>Copy right by {site.siteMetadata.author} © 2020</h3>
        </div>
    )
}

export default Footer;