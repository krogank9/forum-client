export default {
  //API_ENDPOINT: 'http://localhost:8000/api',
  //API_ENDPOINT: 'https://boiling-chamber-32694.herokuapp.com/api',
  API_ENDPOINT: window. location.hostname === "localhost"? 'http://localhost:8000/api' : 'https://boiling-chamber-32694.herokuapp.com/api',
  TOKEN_KEY: 'blogful-client-auth-token',
}
