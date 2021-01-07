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

  searchContact(firstName: string, lastName: string, email: string, company: string, departement: string) {
    return this.http.get(this.CONTACT_API + '?firstName=' + firstName + '&lastName=' + lastName + '&email=' +
      email + '&company=' + company + '&departement=' + departement);
  }
}
