export interface ApiResponse {
  data?: ResponseData
  error?: string
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export interface FormInput {
  name: string;
  type: string;
  label?: string;
}