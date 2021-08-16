
export const account_form: createAccount = {
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
  userId:0,
}

export interface createAccount{
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
  userId: number;

}

export interface ResponseAccount {
  data: createAccount;
}
