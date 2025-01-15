import axios from 'axios';

export async function GET(request) {
  try {
    const response = await axios.get('http://localhost:3002/'); // Database microservice endpoint
    const data = response.data; // Axios automatically parses JSON
    return new Response(JSON.stringify({ message: 'Database is reachable!', data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to reach the database.', details: error.message }), {
      status: 500,
    });
  }
}
