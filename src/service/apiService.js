const API_JSON_SERVER = 'http://localhost:3000'
const URL_VERCEL = 'https://json-test-one.vercel.app'

async function fetchData(endpoint, options = {}) {
  try {
    const response = await fetch(`${URL_VERCEL}${endpoint}`, options)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json()
    
  } catch (error) {
    console.error(error);
    throw error
  }
}

export default fetchData