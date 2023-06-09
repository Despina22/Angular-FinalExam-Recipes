export interface User {
  accessToken: string;
  user: {
    id: number;
    fullName: string;
    email: string;
    password: string;
    role?: string;
    country: string;
    createdAt: string;
  };
}
