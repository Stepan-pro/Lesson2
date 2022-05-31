import {IUser} from "./IUser";

export interface IUserDetails extends IUser{
  email: string,
  username: string
}
