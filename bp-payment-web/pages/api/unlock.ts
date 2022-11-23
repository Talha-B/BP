// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type UnlockResult = {
  Success: boolean,
  ErrorMessage: string
}

export default async function payment(
  req: NextApiRequest,
  res: NextApiResponse<UnlockResult>
) {

  const response = await fetch('http://localhost:5164/Payment/UnlockPump', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      paymentId: req.body.paymentId
    })
  });

  const data = await response.json() as UnlockResult;

  res.status(200).json(data);
}
