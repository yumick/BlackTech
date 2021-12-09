interface IName {
  firstname: string;
  lastname: string;
}

interface IGeolocation {
  lat: string;
  long: string;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: IGeolocation;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: IName;
  address: Address;
  phone: string;
}
