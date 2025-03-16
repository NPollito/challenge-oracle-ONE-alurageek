const API_JSON_SERVER = 'http://localhost:3000'

async function fetchData(edpoint) {
  try {
    const response = await fetch(`${API_JSON_SERVER}${edpoint}`)
    return await response.json()
    
  } catch (error) {
    console.log(error);
  }
}

export default fetchData