export interface User{
    id: number;
    name: string;
    email: string;
    cpf: string
    cellphone: string;
    birth: string;
    accountId: number;
    updatedAt: string;
    createdAt: string;
    admin: boolean;
    token: string;
}

export interface UserResponse {
  status: string;
  message: string;
  data: User;
}
