import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiEnvironment as env } from '../environments/api-enpoint';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { BaseResponse } from '../models/base-response';
import { Usuario } from '../models/usuario/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http = inject(HttpClient)
  public currentUser!: Usuario;

  isLogged(): boolean {
    if (typeof window !== 'undefined' && localStorage.getItem("TOKEN")) {
      return true;
    } else {
      return false;
    }
  }

  Login(data: Usuario): Observable<BaseResponse<string>> {
    debugger
    return this._http.post<BaseResponse<string>>(env.LOGIN, data)
      .pipe(
        tap((resp) => {
          if (resp.isSucces) {

            localStorage.setItem('TOKEN', resp.data);
          }
        }));
  }

  validarToken(): Observable<boolean> {
    debugger
    return this._http.get(`${env.REFRES_TOKEN}`)
      .pipe(
        tap((resp: any) => {
          if (resp.isSucces) {
            this.currentUser = resp.data;
            console.log(this.currentUser)
            localStorage.setItem('TOKEN', resp.data.token);
          }
        }),
        map(resp => true),
        catchError(error => of(false))
      );
  }

  logOut() {
    localStorage.removeItem('TOKEN');
  }
}
