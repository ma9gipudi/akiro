import Company from './Company';
export default class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public companies: Company[],
    public email?: string,
    public wallterAddress?: string
  ) {}

  addCompany(company: Company) {
    this.companies.push(company);
  }
}
