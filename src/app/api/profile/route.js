import axios from 'axios'; // Import Axios for making HTTP requests

export async function POST(req) {
  try {
    // Parse the incoming JSON body
    const body = await req.json();

    // Define the backend API URL (environment variable fallback)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

    // Send the parsed data to the backend's /api/profile endpoint
    const response = await axios.post(`${apiUrl}/api/profile`, body);

    // Return the response from the backend to the frontend
    return new Response(JSON.stringify(response.data), { status: 201 });
  } catch (error) {
    // Log and handle any errors
    console.error('Error in profile API route:', error.message);
    return new Response(
      JSON.stringify({
        error: 'Failed to create profile',
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
