import { gql, useQuery } from '@apollo/client';
import { PROMOTIONS } from './constants';


const getEntries = gql`
query {
  data
  @rest( path: "/${PROMOTIONS}") {
    entries{
        _id
      title
      thumbnail
      metadescription
    }
  }
}
`;


export {
    getEntries,
}