export interface IInputValidation {
  validationType: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern';
  message: string;
}
