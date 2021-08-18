
export const account_form: createAccount = {
  id: null,
  bank_code: '342',
  agencia:'',
  agencia_dv:'',
  conta:'',
  conta_dv:'',
  typeAccount:'',
  document_number:'',
  document_type:'',
  description: '',
  legal_name:'',
  createdAt:'',
  userId: 0
}
export interface createAccount{

  id: number,
  bank_code: string;
  agencia:string;
  agencia_dv:string;
  conta:string;
  conta_dv:string;
  typeAccount:string;
  document_number:string;
  document_type:string;
  description: string;
  legal_name:string;
  createdAt:string;
  userId:number

}

export interface AccountResponse {
  status: string;
  message: string;
  data: createAccount;
}
