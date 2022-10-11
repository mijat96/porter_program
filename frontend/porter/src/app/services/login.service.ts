import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ILogin, ITokenData } from "../models/login-model";
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    apiUrl: string = environment.api;
  
    constructor(private http: HttpClient) { }

    login(login: ILogin): Observable<ITokenData> {
        const url = this.apiUrl + '/Account/login';

        return this.http.post<ITokenData>(url, login);
    }
}