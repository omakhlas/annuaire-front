import { Component, OnInit } from '@angular/core';
import {SearchContactService} from '../search-contact.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {

  contacts: any;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  departement: string;

  constructor(private service: SearchContactService) { }

  ngOnInit(): void {
    let resp = this.service.searchContact('', '', '', '', '');
    resp.subscribe((data) => this.contacts = data);
  }

  public searchContacts(){
    let resp = this.service.searchContact(this.firstName, this.lastName, this.email, this.company, this.departement);
    console.log(this.firstName);
    resp.subscribe((data) => this.contacts = data);
  }

}
