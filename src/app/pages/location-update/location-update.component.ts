import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditModel } from 'src/app/models/editModel';
import { LocationModel } from 'src/app/models/location';
import { MainLocation } from 'src/app/models/mainLocation';
import { CityService } from 'src/app/services/city.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.scss']
})
export class LocationUpdateComponent implements OnInit {

  updateForm: FormGroup;
  data: EditModel;
  location: MainLocation;
  allCities: any[];

  id = parseInt(this.route.snapshot.paramMap.get('id'));
  constructor(private locationService: LocationsService, private route: ActivatedRoute, private city: CityService,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
      cityid: ['', Validators.required],
    });
    this.getAllCities();
    this.getLocationById();
  }


  updateLocation() {
    this.data = this.updateForm.value;
    this.data.id = this.location.id;
    this.data.longitude = parseFloat(this.updateForm.controls['longitude'].value);
    this.data.latitude = parseFloat(this.updateForm.controls['latitude'].value);
    this.data.cityid = parseFloat(this.updateForm.controls['cityid'].value);
    this.locationService.updateLocation(this.id, this.data).subscribe(response => {
      this.router.navigateByUrl('/locations')
    });
    console.log(this.data);
  }

  getLocationById() {
    this.locationService.getLocationById(this.id).subscribe((response) => {
      this.location = response;
      console.log(this.location);
    });
  }
  getAllCities() {
    this.city.getallCities().subscribe(
      response => {
        this.allCities = response;
      }
    )
  }
}
