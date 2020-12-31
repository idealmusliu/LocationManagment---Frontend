
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;
const jwtHelper: JwtHelperService = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }

  login(body: any): Observable<any> {
    const url = `${apiUrl}/api/user/login`;

    return this.http.post(url, body).pipe(
      map((response: any) => {
        console.log('Logged in', response);
        localStorage.clear();
        const decodedToken = jwtHelper.decodeToken(response.token);
        console.log(decodedToken);

        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  register(body: any): Observable<any> {
    const url = `${apiUrl}/api/user/register`;

    return this.http.post(url, body).pipe(
      map((response: any) => {
        console.log('Register in', response);
        localStorage.clear();
        const decodedToken = jwtHelper.decodeToken(response.token);
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !jwtHelper.isTokenExpired(token);
  }

  public logout(): void {
    localStorage.clear();
    window.location.reload();
  }
}