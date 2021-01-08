import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchContactService {
  public API = 'http://localhost:8080';
  public CONTACT_API = this.API + '/api/contacts';

  constructor(private http: HttpClient) {
  }

  searchContact(first_name: string, last_name: string, email: string, company: string, departement: string) {
    return this.http.get(this.CONTACT_API + '?firstName=' + first_name + '&lastName=' + last_name + '&email=' +
      email + '&company=' + company + '&departement=' + departement);
  }
}
