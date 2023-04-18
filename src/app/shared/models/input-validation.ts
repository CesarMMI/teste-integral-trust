export interface IInputValidation {
  validationType: 'required' | 'email' | 'telefone' | 'data' | 'hora';
  message: string;
}
