import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';
  // phUrl = 'https://coronavirus-19-api.herokuapp.com/countries/{Philippines}';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }


  // getPhInfo() {
  //   return this.http.get(`${this.phUrl}Philippines`);
  // }
}
