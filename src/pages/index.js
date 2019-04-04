import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `netlify`, `react`]} />
    <h1>Welcome to Netlify Dev</h1>
    <Link to="/guestbook">Go to Guestbook</Link>
  </Layout>
)

export default IndexPage
