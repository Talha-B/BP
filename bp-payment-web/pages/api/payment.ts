// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function payment(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const response = await fetch('http://localhost:5164/Payment/Pay', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      siteId: req.body.siteId, 
      fuelType: req.body.fuelType,
      amount: req.body.amount, 
      cardDetails: req.body.cardDetails, 
      pumpNumber: req.body.pumpNumber 
    })
  });

  const data = await response.json();

  res.status(200).json(data);
}
