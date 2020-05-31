import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientListServiceService {

  private url = "http://northwind.netcore.io/query/customers.json"
  client = []

  constructor(private http: HttpClient) { }

  getClients() : Observable<any>{
    return this.http.get(this.url)}
  }
