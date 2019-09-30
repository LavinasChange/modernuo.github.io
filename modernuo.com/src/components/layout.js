import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import clsx from "clsx"
import Globals from "./globals"

const Layout = ({ className, children }) => {
  return (
    <>
      <Globals />
      <main id="content" className={clsx("content", className)}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default styled(Layout)`
  align-self: center;
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
  justify-content: center;
  ${props => (props.maxWidth ? `max-width:${props.maxWidth}px;` : "")}
  width: 100%;
`
