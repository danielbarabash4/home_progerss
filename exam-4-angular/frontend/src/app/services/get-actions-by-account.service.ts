import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetActionsByAccountService implements OnInit{

  URL = 'http://localhost:4000/api/v1/bank/getByAccount/';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  getActions(account:string): Observable<any>{
    const data = account;
    return this.http.get(this.URL+data);
  }



}
