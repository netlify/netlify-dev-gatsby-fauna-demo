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
yarn
netlify init
netlify addons:create fauna
netlify dev:exec functions/functions/fauna-graphql/sync-schema.js
netlify dev ## or netlify dev --live
```

And you should have it running!
