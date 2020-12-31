import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  endpointRoute = '/api/cities/';

  constructor(private http: HttpClient) { }

  getallCities() {
    // if (this.cities.length > 0) return of(this.cities);
    return this.http.get<any[]>(this.endpointRoute + 'getcity').pipe(
      map((response) => {
        return response;
      })
    );
  }
}
