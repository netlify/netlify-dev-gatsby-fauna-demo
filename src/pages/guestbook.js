import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo-hooks"
import gql from "graphql-tag"
import { useQuery } from "react-apollo-hooks"

import { useMutation } from "react-apollo-hooks"

const client = new ApolloClient({
  uri: "/.netlify/functions/fauna-graphql",
})
const SecondPage = () => (
  <Layout>
    <ApolloProvider client={client}>
      <SEO title="Page two" />
      <h1>LIST</h1>
      <div>
        <List />
        <ModifyUI />
      </div>

      <Link to="/one-more-thing">one more thing...</Link>
    </ApolloProvider>
  </Layout>
)

const GET_COMMENTS = gql`
  query getcomments {
    allComments {
      name
      message
    }
  }
`

function List() {
  const { data, error, loading } = useQuery(GET_COMMENTS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return (
    <div>
      {data.allComments.map(({ message, name }, i) => {
        return (
          <blockquote key={i}>
            {message}

            <div style={{ textAlign: "right", fontStyle: "normal" }}>
              <b>{name}</b>
              {/* <button
          style={{
            border: 0,
            cursor: "pointer",
            background: "palegoldenrod",
            borderRadius: 5,
            margin: 10,
          }}
          onClick={handler}
        >
          x
        </button> */}
            </div>
          </blockquote>
        )
      })}
    </div>
  )
}

const MAKECOMMENT = gql`
  mutation addComment($name: String!, $message: String!) {
    createComment(data: { name: $name, message: $message }) {
      name
    }
  }
`
const mutationOptions = {
  refetchQueries: [{ query: GET_COMMENTS }],
  variables: {
    name: "swyx",
    message: "hello world " + Math.floor(Math.random() * 100),
  },
}

function ModifyUI() {
  return (
    <div>
      <button onClick={useMutation(MAKECOMMENT, mutationOptions)}>
        click me
      </button>
    </div>
  )
}

export default SecondPage
