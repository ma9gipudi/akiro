import { NextApiRequest, NextApiResponse } from 'next';
import { collections, connectToDatabase } from '../../db/mongo.service';
import Company from '../../models/Company';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await connectToDatabase();
  if (request.method === 'POST') {
    try {
      const newCompany = request.body as Company;
      const result = await collections.companies?.insertOne(newCompany);
      console.log(`post handler function invoked ${JSON.stringify(result)}`);
      result
        ? response
            .status(201)
            .json({ message: `Company updated: ${JSON.stringify(newCompany)}` })
        : response.status(500).json({ message: 'Failed to add new company' });
    } catch (error) {
      response.status(400).json({ message: getErrorMessage(error) });
    }
  } else {
    throw new Error('Unsupported HTTP Method GET');
  }
}
