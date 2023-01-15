import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { AddressBook } from "../models/address-book-model";

@Injectable({
    providedIn: 'root'
})
export class AddressBookService {

    apiUrl: string = environment.api;
  
    constructor(private http: HttpClient) { }

    create(addressBookModel: AddressBook): Observable<AddressBook> {
        const url = this.apiUrl + '/addressBook/new';

        return this.http.post<AddressBook>(url, addressBookModel);
    }

    getList(): Observable<AddressBook[]> {
        const url = this.apiUrl + '/addressBook/list';

        return this.http.get<AddressBook[]>(url);
    }


}