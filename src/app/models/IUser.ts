import {ICompany} from "./ICompany";

export interface IUser {
  id: number,
  name: string,
  email: string,
  surname: string,
  company: ICompany
}
