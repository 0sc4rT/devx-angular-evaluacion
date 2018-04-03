import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {

  readonly URL: string = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.URL);
  }

  getClient(id: string): Observable<Client> {
    return this.http.get<Client>(this.URL + '/' + id);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(this.URL + '/' + client.id, client);
  }

  createClient(client: any): Observable<Client> {
    return this.http.post<Client>(this.URL, client);
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }
}
