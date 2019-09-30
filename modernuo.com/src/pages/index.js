import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AppBar from '../components/appbar'
import Brand from '../components/brand';
import Social from "../components/social"
import Logo from "../components/logo"
import Title from "../components/title"
import Divider from "../components/divider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AppBar row>
      <Brand>ModernUO</Brand>
      <Social />
    </AppBar>
    <Logo />
    <Title>ModernUO</Title>
    <Divider maxWidth={600} />
  </Layout>
)

export default IndexPage
