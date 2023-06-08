export interface UserLoginData {
  email: string;
  password: string;
  accessToken: string;
}

export interface User extends UserLoginData {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  role?: string;
  createdAt: string;
}
