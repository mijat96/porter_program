import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Passage } from "../models/passage-model";
import { ShiftRepor } from "../models/shift-report-model";

@Injectable({
    providedIn: 'root'
})
export class ShiftReportService {

    apiUrl: string = environment.api;
  
    constructor(private http: HttpClient) { }

    create(shiftReporModel: ShiftRepor): Observable<ShiftRepor> {
        const url = this.apiUrl + '/shiftreport/new';

        return this.http.post<ShiftRepor>(url, shiftReporModel);
    }

    finish(shiftReporModel: ShiftRepor): Observable<ShiftRepor> {
        const url = this.apiUrl + '/shiftreport/edit';

        return this.http.post<ShiftRepor>(url, shiftReporModel);
    }

    getList(): Observable<ShiftRepor[]> {
        const url = this.apiUrl + '/shiftreport/list';

        return this.http.get<ShiftRepor[]>(url);
    }


}