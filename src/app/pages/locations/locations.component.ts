import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations = [];
  constructor(private locationservice: LocationsService) { }

  ngOnInit(): void {
    this.getLocations();
  }
  getLocations() {
    this.locationservice.getLocations().subscribe(
      response => {
        this.locations = response
        console.log(this.locations);
      }
    )
  }
  deleteLocation(id: number) {
    if (confirm("Are you sure to delete?")) {
      this.locationservice.deleteLocation(id).subscribe(
        response => {
          window.location.reload();
        }
      )
    }

  }
}
