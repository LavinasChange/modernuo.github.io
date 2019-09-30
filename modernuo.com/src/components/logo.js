import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import clsx from "clsx"

const Logo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "modernuologo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      id="logo"
      className={clsx("logo", className)}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default styled(Logo)`
  margin: 32px auto;
  width: 300px;
  height: 300px;
`
