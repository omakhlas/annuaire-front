import { Component, OnInit } from '@angular/core';
import {SearchContactService} from '../search-contact.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {

  config: any;
  contacts: any;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  departement: string;

  constructor(private service: SearchContactService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1 );
  }

  pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }


  ngOnInit(): void {
    let resp = this.service.searchContact('', '', '', '', '');
    resp.subscribe((data) => this.contacts = data);
  }

  public searchContacts(){
    if(this.first_name === undefined) this.first_name = '';
    if(this.last_name === undefined) this.last_name = '';
    if(this.email === undefined) this.email = '';
    if(this.company === undefined) this.company = '';
    if(this.departement === undefined) this.departement = '';
    let resp = this.service.searchContact(this.first_name, this.last_name, this.email, this.company, this.departement);
    console.log(this.first_name);
    resp.subscribe((data) => this.contacts = data);
  }

}
