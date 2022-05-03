import { ObjectId } from 'mongodb';
import Company from './Company';
export default class User {
  constructor(
    public uid: string,
    public firstName: string,
    public lastName: string,
    public companies: Company[],
    public email?: string,
    public walletAddress?: string,
    public id?: ObjectId
  ) {}

  addCompany(company: Company) {
    this.companies.push(company);
  }
}
