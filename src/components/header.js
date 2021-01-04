import { Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const TitleAndDescription = ({ data }) => {
  const { description, title } = data.site.siteMetadata;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'avenir'
    }}>
      <h2 style={{ marginbottom: 0 }}>{title}</h2>
      <p style={{
        marginTop: 0,
        opacity: 0.5
      }}>{description}
      </p>
    </div>
  )
}

export const Siteheader = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
    `}
      render={data => <TitleAndDescription data={data} />
      }
    />
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
