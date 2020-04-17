import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

const cardMap = {
  '1' : 'Duke',
  '2' : 'Duke',
  '3' : 'Duke',
  '4' : 'Assasin',
  '5' : 'Assasin',
  '6' : 'Assasin',
  '7' : 'Ambassador',
  '8' : 'Ambassador',
  '9' : 'Ambassador',
  '10' : 'Captain',
  '11' : 'Captain',
  '12' : 'Captain',
  '13' : 'Contessa',
  '14' : 'Contessa',
  '15' : 'Contessa',
}

@Injectable({
  providedIn: 'root'
})
export class GameplayService {

  rsp;
  url = 'http://127.0.0.1:8000/gameplay/'

  constructor(private http: HttpClient) { 
  }

  getGameState(player){
    let params = new HttpParams()
    params = params.append('name', player)
    return this.http.get(this.url,  {params: params})
  }
}
