export interface PageStatus {
  title: string;
  description: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface GeoLocation {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export const endpoint = {
  posts: import.meta.env.PUBLIC_JSONPLACEHOLODER_POSTS_API,
  authors: import.meta.env.PUBLIC_JSONPLACEHOLODER_USERS_API,
};
