import { ObjectId } from 'mongodb';

export default class Company {
  constructor(public name: string, public id?: ObjectId) {}
}
