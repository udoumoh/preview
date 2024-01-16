import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
const mailchimp = require("@mailchimp/mailchimp_marketing");
const apiKey = process.env.MAILCHIMP_API_KEY;
const apiServer = process.env.MAILCHIMP_API_SERVER;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

mailchimp.setConfig({
  apiKey: apiKey,
  server: apiServer,
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  let passedValue = await new Response(req.body).text();
  let {email} = JSON.parse(passedValue);
   
    try {
      if(req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
      }
      const response = await mailchimp.lists.addListMember(audienceId, {
        email_address: email,
        status: "subscribed",
      })      
      return NextResponse.json({
        message: `Successfully added contact as an audience member. The contact's id is ${response.id}.`,
        contactId: response.id,
      })
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}
