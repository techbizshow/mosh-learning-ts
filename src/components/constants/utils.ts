export enum color {
  RED = 'RED_ME',
  GREEN = 'GREEN_YOU',
  BLUE = 'BLUE_TEST',
}
export class Customer {
  private customersList: string[] = [];
  constructor(public fname: string, public age: number, public city: string) {}

  addCustomer(cname: string) {
    this.customersList.push(cname);
  }

  displayCutomer() {
    console.log(
      `The customer name is ${this.fname} and he lives in ${this.city} and the age is ${this.age}`
    );
  }
}
