import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public userName: string | null = null;
  public jwt: string | null = null;

  setUserName(params: string) {
    this.userName = params
  }
}
