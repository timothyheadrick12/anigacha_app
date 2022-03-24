//This was a test file and is unused now. It gests the most popular
//character from the anilist api

import axios from 'axios';
import {character} from '../types';

export default async (): Promise<character[]> =>
  axios
    .get('http://131.151.53.54:3000/get-characters')
    .then((result) => result.data)
    .catch((err) => console.log('Something went wrong:\n' + err));
