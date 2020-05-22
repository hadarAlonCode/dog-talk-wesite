import React from 'react';
// import { PageProps, Link } from "gatsby"
import SEO from '../components/seo';
import Layout from '../components/layout';

const about = props => {
    return (
        <Layout>
        <div>
             <SEO title="אודות" description="אודות חיים אלון" />
            <h1>אודות</h1>
            <p>דגךלצכצלדג מלדךגכמלדכגמלח</p>
        </div>
        </Layout>
    );
};



export default about;