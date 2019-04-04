<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Netlify Dev + Fauna GraphQL
</h1>

the ultimate cutting edge JAMstack

## 🚀 Getting Started

You will need the latest `netlify-cli` installed. (`npm i -g netlify-cli`)

Clone this repo and then:

```
## install dependencies at the root
npm install

## install dependencies inside the function
cd functions/fauna-graphql
npm install

## Now you can set up with Netlify & Fauna DB!
cd ... ## back to project root
netlify init ## link to netlify site
netlify addons:create fauna ## create fauna addon
netlify dev:exec functions/functions/fauna-graphql/sync-schema.js ## upload GraphQL Schema

## Big reveal!
netlify dev ## or netlify dev --live
```

And you should have it running!
