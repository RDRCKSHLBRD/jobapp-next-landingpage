// API - / signUp - route.js


import axios from 'axios';

export async function POST(req) {
    try {
        const body = await req.json();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001'; // Backend server URL
        const response = await axios.post(`${apiUrl}/api/users/signup`, body);
        return new Response(JSON.stringify(response.data), { status: 201 });
    } catch (error) {
        console.error('Error in signup route:', error.message);
        return new Response(
            JSON.stringify({
                error: 'Failed to create user',
                details: error.message,
            }),
            { status: 500 }
        );
    }
}
