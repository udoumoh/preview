// import { NextApiRequest, NextApiResponse } from 'next';
// const mailchimp = require("@mailchimp/mailchimp_marketing");

// // sgMail.setApiKey(process.env.EMAIL_API_KEY);
// const apiKey = process.env.MAILCHIMP_API_KEY
// const apiServer = process.env.MAILCHIMP_API_SERVER
// const audienceId = process.env.MAILCHIMP_AUDIENCE_ID

// mailchimp.setConfig({
//   apiKey: apiKey,
//   server: apiServer,
// });

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { email } = req.body
//   try {
//     const response = await mailchimp.lists.addListMember(audienceId, {
//     email_address: "johnudoumoh64@gmail.com",
//     status: "subscribed",
//     })
//     res.json(`Successfully added contact as an audience member. The contact's id is ${
//       response.id
//     }.`)
//   } catch (error) {
//     res.status(500).json({ error: error })
//   }
// }


import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import axios from 'axios';
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
