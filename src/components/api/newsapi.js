import axios from 'axios';

const apiKey = 'f10bc8effcb94b388b6e3544812ae423'
export default axios.create({
  baseURL: `https://newsapi.org/v2/`,
 
});