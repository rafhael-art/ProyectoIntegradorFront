import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (localStorage.getItem('TOKEN')) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', localStorage.getItem('TOKEN')!)
    })
    return next(authReq);
  }
  return next(req);
};
