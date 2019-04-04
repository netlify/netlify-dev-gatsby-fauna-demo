import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `netlify`, `react`]} />
    <h1>One more thing...</h1>
    <p>tada!</p>
  </Layout>
)

export default IndexPage
