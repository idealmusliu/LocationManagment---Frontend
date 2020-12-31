import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainLocation } from 'src/app/models/mainLocation';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  location: MainLocation;

  constructor(private locationService: LocationsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLocationById();
  }

  getLocationById() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.locationService.getLocationById(id).subscribe(
      response => {
        this.location = response;
      }
    )
  }
}
