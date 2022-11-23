// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { FinishResponse } from '../types/finishResponse';

export default async function finish(
  req: NextApiRequest,
  res: NextApiResponse<FinishResponse>
) {

  const response = await fetch('http://localhost:5164/Payment/FinishTransaction', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      paymentId: req.body.paymentId
    })
  });

  const data = await response.json() as FinishResponse;
  
  res.status(200).json(data);
}
