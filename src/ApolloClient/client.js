import { ApolloProvider, ApolloClient, InMemoryCache,gql } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { BASE_URL,BASE_URL_END_POINT,TOKEN } from "../Constants/constants";


const restLink = new RestLink({
  uri: 'https://cockpit.luckyways.com/api/collections/get',
 
  // Extra code to be added:
//   typePatcher: {
//     entries: data => {
//       if (data.Search != null) {
//         data.Search = 
//           data.Search.map(search => ({ 
//             __typename: "entries", ...search              
//          }));
//      }
//      return data;
//    }
//  }
});

const client = new ApolloClient({
  link : restLink,
  cache: new InMemoryCache(),
});

export default client;

