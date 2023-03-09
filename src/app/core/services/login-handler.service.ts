import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/config/constans';

@Injectable({
  providedIn: 'root'
})
export class LoginHandlerService {

  public user_id: number | null = 1;
  public user_name: string = "";
  public user_password: string = "";

  constructor(private http: HttpClient, private constants: Constants) { }

  public login(name: string, password: string): Observable<any> {
    return this.http.post<any>(Constants.LOGIN_ENDPOINT, null, { headers: this.constants.getHeaders(name, password) });
  }

  public register(name: string, email: string, password1: string, password2: string): Observable<any> {
    return this.http.post<any>(Constants.API_ENDPOINT + '/user_api.php', { name: name, email: email, password1: password1, password2: password2, object: "User", save: "" }, { headers: this.constants.getHeaders("admin", "admin") });
  }
}
