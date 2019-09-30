import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faPatreon, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons"
import styled from 'styled-components';

const Icon = ({ className, icon, order }) => {
  const style = {
    order,
  };
  switch (icon) {
    case "facebook": {
      return <FontAwesomeIcon className={className} icon={faFacebook} />
    }
    case "github": {
      return <FontAwesomeIcon className={className} icon={faGithub} />
    }
    case "patreon": {
      return <FontAwesomeIcon className={className} icon={faPatreon} />
    }
    case "reddit": {
      return <FontAwesomeIcon className={className} icon={faReddit} />
    }
    case "twitter": {
      return <FontAwesomeIcon className={className} icon={faTwitter}/>
    }
    default: {
      return null;
    }
  }
}

const StyledIcon = styled(Icon)`
  color: hsla(40, 37%, 47%, 1);
  font-size:24px;
  padding: 8px;

  &:hover {
    color: hsla(40, 60%, 60%, 1);
  }
`;

const Social = ({ className }) => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                social {
                  icon
                  url
                }
              }
            }
          }
        `
      )
    
  return (
    <div className={className}>
      {site.siteMetadata.social.map(({ url, ...props }) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <StyledIcon {...props} />
        </a>
      ))}
    </div>
  )
}

export default styled(Social)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`
