import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditModel } from '../models/editModel';
import { MainLocation } from '../models/mainLocation';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  endpointRoute = '/api/locations/';

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<any>(this.endpointRoute + 'GetLocation');
  }

  createLocation(model: any) {
    return this.http.post(this.endpointRoute + 'PostLocation', model).pipe(
      map((response: any) => {
        console.log(response);
      })
    );
  }

  updateLocation(id: number, model: any) {
    return this.http.put(this.endpointRoute + `PutLocation/${id}`, model).pipe(
      map((response: EditModel) => {
        console.log(response);
      })
    );
  }

  deleteLocation(id: number) {
    return this.http.delete(this.endpointRoute + `DeleteLocation/${id}`).pipe(
      map((response: any) => {
        console.log(response);
      })
    );
  }

  getLocationById(id: number) {
    return this.http.get<MainLocation>(this.endpointRoute + `GetLocationCityId/${id}`);
  }
}