import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  name = 'test';
  rsp;
  url = 'http://127.0.0.1:8000/sign-in/'
  json;
  private httpOptions: any;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
    ) { 
       // CSRF token is needed to make API calls work when logged in
       let csrf = this.cookieService.get("csrftoken");
       // the Angular HttpHeaders class throws an exception if any of the values are undefined
       if (typeof(csrf) === 'undefined') {
         csrf = '';
       }
       this.httpOptions = {
         headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': csrf })
       };
    }

  getName(){
    return this.name
  }

  getToken(){
    this.http.get('http://127.0.0.1:8000/', {observe: 'response'}).subscribe(data => {
      console.log("Data!!!!!!!!", data.headers, this.httpOptions)
    })
  }

  postName(name){
    return this.http.post(this.url, name, this.httpOptions)
}

}
