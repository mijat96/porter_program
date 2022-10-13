import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Passage } from "../models/passage-model";

@Injectable({
    providedIn: 'root'
})
export class PassageService {

    apiUrl: string = environment.api;
  
    constructor(private http: HttpClient) { }

    create(passageModel: Passage): Observable<Passage> {
        const url = this.apiUrl + '/passage/new';

        return this.http.post<Passage>(url, passageModel);
    }

    finish(){
            
    }

    getList(): Observable<Passage[]> {
        const url = this.apiUrl + '/passage/list';

        return this.http.get<Passage[]>(url);
    }


}