import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    image
                    url
                    icon
                }
            }
        }
    `)

  return data.site.siteMetadata
}