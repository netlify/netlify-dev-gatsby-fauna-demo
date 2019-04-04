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

const GET_DOGS = gql`
  query sdlkjs {
    allTodos {
      completed
      title
    }
  }
`

function List() {
  const { data, error, loading } = useQuery(GET_DOGS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

const MAKETODO = gql`
  mutation sdlkj($title: String!, $completed: Boolean!) {
    createTodo(data: { title: $title, completed: $completed }) {
      title
      completed
    }
  }
`
const mutationOptions = {
  refetchQueries: [{ query: GET_DOGS }],
  variables: {
    title: "2222lkj2lkj2lkj",
    completed: false,
  },
}

function ModifyUI() {
  return (
    <div>
      <button onClick={useMutation(MAKETODO, mutationOptions)}>click me</button>
    </div>
  )
}

export default SecondPage
