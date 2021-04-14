import   {Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private userService: UserService
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authToken = this.userService.getToken();
        let authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer" + authToken)
        });
        return next.handle(authRequest);
    }
}