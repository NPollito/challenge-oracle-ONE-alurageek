const API_JSON_SERVER = 'http://localhost:3000'
const URL_VERCEL = 'https://json-test-one.vercel.app'

async function fetchData(edpoint) {
  try {
    const response = await fetch(`${URL_VERCEL}${edpoint}`)
    return await response.json()
    
  } catch (error) {
    console.log(error);
  }
}

export default fetchData