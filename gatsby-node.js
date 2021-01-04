const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // Get the pages
  const pageResult = graphql(`
    {
      allMarkdownRemark{
        sort:{order: ASC, fields: [frontmatter___date]}
      edges{
        node{
          frontmatter{
            path
          }
        }
      }
    }
  }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMarkdownRemark.edges || []

    posts.forEach(({ node }, index) => {
      const path = node.frontmatter.path

      createPage({
        path,
        component: require.resolve(`./src/templates/blog-post.js`),
        context: {
          pathSlug: path,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node
        }
      })
    })
  })

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([pageResult]);
};