
import { boot } from 'quasar/wrappers'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

const apolloClient = new ApolloClient({
  uri: 'https://project-lojee.herokuapp.com/v1/graphql'
})


console.log('apolloClient',apolloClient)
const cache = new InMemoryCache()

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  cache
})

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  console.log('app',app)
  app.use(apolloProvider)
  app.apolloProvider = apolloProvider
  app.config.globalProperties.$apollo = apolloClient
})
