import gql from 'graphql-tag'
export const users = gql`
query MyQuery {
 users {
   email_address
   id
   password
   username
 }
}
`