export default class User {

  private _username: string;
  private _name: string;
  private _age: number;
  private _hasDrivingLicence: boolean;


  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get hasDrivingLicence(): boolean {
    return this._hasDrivingLicence;
  }

  set hasDrivingLicence(value: boolean) {
    this._hasDrivingLicence = value;
  }

  constructor(username: string, name: string, age: number, hasDrivingLicence: boolean) {
    this._username = username;
    this._name = name;
    this._age = age;
    this._hasDrivingLicence = hasDrivingLicence;
  }
}
