import { ApiResponse, RegisterFormData } from '../types';

class Api {
  private token: string = '';
  private endpoint: string = 'http://localhost:3000'

  constructor(token: string = '') {
    this.token = token;
  }

  async register(fields: RegisterFormData): Promise<ApiResponse> {
    const url = `${this.endpoint}/user/register`
    const body = JSON.stringify(fields)
    const headers = new Headers({ 'Content-Type': 'application/json' })
    try {
      const response = await fetch(url, { method: 'POST', body, headers})
      const data = await response.json()
      return data;
    } catch ( err: any ) {
      throw new Error(err.error);
    }
  }
}

export default Api;