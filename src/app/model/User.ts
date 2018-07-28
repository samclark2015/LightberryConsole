export interface IUser {
  isAdmin: boolean;
  linkedDevices: string[];
  info: any;
}

export class User implements IUser {
  info: any;
  isAdmin: boolean;
  linkedDevices: string[];

  constructor(json: IUser) {
    this.info = json.info;
    this.isAdmin = json.isAdmin;
    this.linkedDevices = json.linkedDevices;
  }
}
