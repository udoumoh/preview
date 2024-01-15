import { NextResponse } from 'next/server';
import axios from 'axios';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';


const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const apiUrl = `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`;

const requestData = {
      email: 'steve.wozniak@gmail.com',
    };

export async function POST() {
  try{
  const response = await axios.post(apiUrl, requestData, {
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Handle the response from the API
    console.log('Response:', response.data);

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error: any) {
    console.error('Error:', error);

    return {
      statusCode: error.response.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
