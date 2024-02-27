import { CompanyModel, ICompany } from "../models/CompanyModel";

export async function getCompanies() {
  try {
    console.log('called getCompanies')
    return await CompanyModel.find({});
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createCompany(company: ICompany) {
  try {
    return await CompanyModel.create(company);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCompanyById(_id: String) {
  try {
    return await CompanyModel.findOne({_id});
  } catch (error) {
    console.error(error);
    return null;
  }
}