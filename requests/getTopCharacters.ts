//This was a test file and is unused now. It gests the most popular
//character from the anilist api

import axios from 'axios';
import {character} from '../types';

export default async (page: number): Promise<character[]> =>
  axios({
    url: 'https://graphql.anilist.co',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: {
      query: `
      query ($pageNum: Int) { # Define which variables will be used in the query (id)
        Page(perPage:50, page:$pageNum)  {    
          characters (sort:FAVOURITES_DESC) {
            id
            name {
              full
            }
            image {
              large
            }
          }
        }
      }
      `,
      variables: {pageNum: page},
    },
  }).then((result) => result.data.data.Page.characters);
