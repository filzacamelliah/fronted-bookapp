export interface IBook {
  _id?: string;
  name: string;
  desc: string;
  author: string;
  isbn: string;
  file: null | FileList | string;
  isAvailable?: boolean;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}
