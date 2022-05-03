import { collections, connectToDatabase } from '../../../db/mongoCollections';
import Company from '../../../models/Company';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === 'GET') {
    try {
      connectToDatabase();
      const companies = (await collections.companies
        ?.find({})
        .toArray()) as unknown as Company[];
      response.status(200).send(companies);
    } catch (error) {
	    response.status(500).send("Unable to get companies")
    }
  } else {
    throw new Error('Unsupported method');
  }
}
