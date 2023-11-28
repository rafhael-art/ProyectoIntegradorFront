import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiEnvironment as env } from '../environments/api-enpoint';
import { BaseResponse } from '../models/base-response';
import { Usuario } from '../models/usuario/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private _http = inject(HttpClient)

  Register(data: Usuario): Observable<BaseResponse<Usuario>> {
    return this._http.post<BaseResponse<Usuario>>(env.USER, data);
  }
}
