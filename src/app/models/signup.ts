export interface Signup{
  name: string;
  password:string;
  email: string;
  cpf: string;
  cellphone: string;
  birth: string;
}

export const SIGNUP_FORM: Signup = {
  name: '',
  password:'',
  email: '',
  cpf: '',
  cellphone: '',
  birth: ''
}
