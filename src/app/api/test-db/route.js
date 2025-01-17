import axios from 'axios';

export async function POST(req) {
  try {
    // Update to the correct backend port
    const response = await axios.get('http://127.0.0.1:3001/api/ping'); 
    const data = response.data;

    return new Response(
      JSON.stringify({
        message: 'Database is reachable!',
        data,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error connecting to backend:', error.message);

    return new Response(
      JSON.stringify({
        error: 'Failed to reach the database.',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
