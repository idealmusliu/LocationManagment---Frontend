import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationModel } from 'src/app/models/location';
import { CityService } from 'src/app/services/city.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit {
  createForm: FormGroup;
  data: LocationModel;
  allCities: any[];

  constructor(
    private formBuilder: FormBuilder,
    private location: LocationsService,
    private city: CityService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
      cityid: ['', Validators.required],
    });
    this.getAllCities();
  }

  createLocation() {
    this.data = this.createForm.value;
    this.data.longitude = parseFloat(this.createForm.controls['longitude'].value);
    this.data.latitude = parseFloat(this.createForm.controls['latitude'].value);
    this.data.cityid = parseFloat(this.createForm.controls['cityid'].value);
    this.location.createLocation(this.data).subscribe(
      response => {
        this.router.navigateByUrl('/locations');
      }
    )

  }

  getAllCities() {
    this.city.getallCities().subscribe(
      response => {
        this.allCities = response;
      }
    )
  }
}