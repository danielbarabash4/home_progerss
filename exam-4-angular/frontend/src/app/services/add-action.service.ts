import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddActionService implements OnInit{

  URL = 'http://localhost:4000/api/v1/bank/addAction';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  addAction(action:any): Observable<any>{
    const data =action
    return this.http.post(this.URL,data);
  }
}
