import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(): boolean {
    return true;
  }

  logout(): boolean {
    return true;
  }
}
