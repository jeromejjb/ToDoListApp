import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiTestService {
    apiBaseUrl: string = "https://swapi.dev/api/people/";
constructor(private http: HttpClient){}
    getPerson(id:number): any{
        let url = this.apiBaseUrl + id
    return this.http.get(url);
    }
}