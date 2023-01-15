import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBook } from 'src/app/models/address-book-model';
import { AddressBookService } from 'src/app/services/addressBook.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  listOfAddressBook: AddressBook[] = [];

  constructor(private router: Router,
              private addressBookService: AddressBookService) { }

  ngOnInit(): void {
    this.addressBookService.getList().toPromise().then(x => this.listOfAddressBook = x || [] as AddressBook[]);
  }

  route(componentName: string){
    this.router.navigate(['/' + componentName]);
  }
}
