import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"

export const LoginGuard = (): boolean => {

  const _auth$ = inject(AuthService)
  if (_auth$.isLogged()) {
    _auth$.validarToken();
  }
  return true;

}
