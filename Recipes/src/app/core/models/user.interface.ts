export interface UserLoginData {
  accessToken: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface User extends UserLoginData {
  user: {
    id: number;
    role?: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    createdAt: string;
  };
}
